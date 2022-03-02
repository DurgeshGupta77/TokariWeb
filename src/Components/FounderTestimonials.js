import React from "react";

//Swiper.js
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useSwiper } from 'swiper/react';


import Testimonials from "../data/Testimonials";

import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

import '../styles/FounderTestimonials.css';

const FounderTestimonials = () => {
    // const swiper = useSwiper();
    return (
        <div className="swiper-container" id="testimonials">
            {/* <button onClick={() => swiper.slideNext()}>Slide to the next slide</button> */}
            <h1 className="swiper-intro">Words from our Founders!</h1>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {Testimonials.map((testimonials, index) => {
                    const { name, designation, image, message, fb, linkedin } = testimonials;
                    return (
                        <SwiperSlide key={index}>
                            <section>
                                <div className="founder-img-container">
                                    <img src={image} alt="Founders" className="founder-img" />
                                </div>
                                <h1 className="founder-name">{name}</h1>
                                <h2 className="founder-designation">{designation}</h2>
                                <div className="icon-container">
                                    <a href={fb} target='_blank' rel="noreferrer"><FaFacebookSquare /></a>
                                    <a href={linkedin} target='_blank' rel="noreferrer"><FaLinkedin /></a>
                                </div>
                                <p className="founder-msg">{message}</p>
                            </section>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default FounderTestimonials;