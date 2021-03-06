import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Login/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";



// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const registerUser = (name, email, password, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { displayName: name, email }
                setUser(newUser);
                hanldeUserInfoRegister(userCredential.user.email, userCredential.user.name);
                //send name to firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                    })
                    .catch((error) => {
                    });
                history.replace("/");
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }


    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));

    }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])


    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // successful signout
        }).catch((error) => {
            // an error occured
        })
            .finally(() => setIsLoading(false));
    }

    const hanldeUserInfoRegister = (email, name) => {
        fetch("https://desolate-thicket-65781.herokuapp.com/addUserInfo", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email, name }),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    };

    return {
        user,
        isLoading,
        authError,
        registerUser,
        signInWithGoogle,
        loginUser,
        logout,
    }
}

export default useFirebase;