import React from 'react';
import About from '../../Shared/About/About';
import Mission from '../../Shared/Mission/Mission';
import Contact from '../../Shared/Contact/Contact';
import Apartments from '../Apartments/Apartments';
import Banner from '../Banner/Banner';
import Reviews from '../../Dashboard/Reviews/Reviews';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Apartments></Apartments>
            <About></About>
            <Mission></Mission>
            <Contact></Contact>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;