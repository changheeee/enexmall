import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function ReviewCarousel() {
    return (
        <div className='main_carousel' style={{ position: 'relative' }}>
            <Carousel
                pause='hover' //hover하면 멈춤
                interval={5000} //넘어가는 시간

            >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/mainimg_1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/mainimg_2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/mainimg_3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/mainimg_4.jpg"
                        alt="Forth slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/mainimg_5.jpg"
                        alt="Fifth slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item><Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/mainimg_6.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item><Carousel.Item>
                    <Link to='../components/best'><img
                        className="d-block w-100"
                        src="/images/mainimg_7.jpg"
                        alt="slide7"
                    /></Link>

                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
}

export default ReviewCarousel;





