import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function MainCarousel() {
    return (
        <div className='main_carousel' style={{ position: 'relative' }}>
            <Carousel fade >
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
            <div className='main_slide_btn_wrap'>
                <div className='main_slide_btn_in'>
                    <ul className='main_slide_btn' >
                        <li><Link to=''><img src="/images/main_slide/slide_btn1.jpg" alt="slide_btn01" /></Link></li>
                        <li><Link to=''><img src="/images/main_slide/slide_btn2.jpg" alt="slide_btn02" /></Link></li>
                        <li><Link to=''><img src="/images/main_slide/slide_btn3.jpg" alt="slide_btn03" /></Link></li>
                        <li><Link to=''><img src="/images/main_slide/slide_btn4.jpg" alt="slide_btn04" /></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MainCarousel;





