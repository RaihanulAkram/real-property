import React from 'react';
import AboutImg from "../../../img/SlideImg/buildingSlide.jpg"
import "./About.css"

const About = () => {
    return (
        <div className="container-fluid mx-auto">
            <img className="img-fluid mt-2" src={AboutImg} alt="" />
            <div className="container-fluid text-center custom">
                <h2>About Us</h2>
                <p>Welcome to Real Property, the world's largest professional real estate agency based in New York. We provide our awesome services in more than 200 countries and territories worldwide.</p>
                <h3>Who are we?</h3>
                <p>Real Property was officially launched on May 5, 1995 in New York.</p>
                <p>Today, we leads a diversified business with revenues from membership subscriptions, advertising sales and recruitment solutions under the leadership of John Doe.</p>
            </div>
        </div>
    );
};

export default About;