import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Apartment from '../Apartment/Apartment';

const Apartments = () => {
    const [apartments, setApartments] = useState([]);

    const apartmentsSlice = apartments.slice(0, 6);

    useEffect(() => {
        fetch('https://desolate-thicket-65781.herokuapp.com/allApartments')
            .then(res => res.json())
            .then(data => setApartments(data))
    }, [])
    return (
        <div>
            <div className="container text-center my-5">
                <h1 className="text-primary">Buy an Apartment</h1>
                <Row xs={1} md={3} className
                    ="g-4 my-3">
                    {
                        apartmentsSlice.map(apartment => <Apartment
                            key={apartment._id}
                            apartment={apartment}
                        ></Apartment>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Apartments;