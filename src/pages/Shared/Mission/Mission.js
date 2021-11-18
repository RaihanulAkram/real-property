import React from 'react';
import "./Mission.css"
const Mission = () => {
    return (
        <div className="">
            <section className="mission mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-4 mb-5 text-center">
                            <h2 className="text-white">Our Goal</h2>
                            <p className="text-white">---------------------------------------------------</p>
                            <div className="mx-auto mb-5"></div>
                            <div className="d-md-flex align-items-center justify-content-center flex-sm-wrap text-center px-5">
                                <div className="col-md-3 col-sm-12 text-center px-3">
                                    <h4 className="text-white">Our Vision</h4>
                                    <p className="text-white">----------------------------------------</p>
                                    <p className="">Our vission is to provide apartment at a affordable price.</p>
                                </div>
                                <div className="col-md-3 col-sm-12 text-center">
                                    <h4 className="text-white">Our Mission</h4>
                                    <p className="text-white">----------------------------------------</p>
                                    <p className="">Our Mission is to make people feel at home in luxarious Apartment.</p>
                                </div>
                                <div className="col-md-3 col-sm-12 text-center px-3">
                                    <h4 className="text-white">Our Core Value</h4>
                                    <p className="text-white">----------------------------------------</p>
                                    <p className="">Our core value is to make people happy in their day to day life.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Mission;