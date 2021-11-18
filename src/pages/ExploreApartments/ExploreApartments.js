import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ExploreApartment from '../ExploreApartment/ExploreApartment';

const ExploreApartments = () => {
    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5050/allApartments')
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
                        apartments.map(apartment => <ExploreApartment
                            key={apartment._id}
                            apartment={apartment}
                        ></ExploreApartment>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default ExploreApartments;