import React from 'react'
import Slider from "react-slick";
import { Feedback } from './Api';
import SectionTitle from './SectionTitle'
import './style.css'
import "./slick.css"; 
import "./slick-theme.css";
const CarouselContainer = () => {
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section id='reviews' className='carousel_container '>
                <SectionTitle title="What Our Client Think About us" />
                <Slider {...settings} >
                    {
                        Feedback.map((e, index) => {
                            const { feedback, name, icon } = e;
                            return (
                                <div className="review_card" key={index}>
                                    <div className="review_">
                                        <p>{feedback}</p>
                                    </div>

                                    <div className="review_title">
                                       <span> {icon}</span>
                                        <h3>{name}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* Add more images and legends as needed */}
                </Slider>
            </section>
        </>
    )
}

export default CarouselContainer
