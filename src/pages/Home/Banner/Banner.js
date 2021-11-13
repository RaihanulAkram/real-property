import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../../img/SlideImg/buildingSlide-1.jpg'
import slide2 from '../../../img/SlideImg/buildingSlide-2.jpg'
import slide3 from '../../../img/SlideImg/buildingSlide-3.jpg'

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>Elegant Home</h1>
                    <p>Home gives us security</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1>Beautiful Home</h1>
                    <p>Beauty makes us happy</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1>Great Location</h1>
                    <p>You feel at home.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;