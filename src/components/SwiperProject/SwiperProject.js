import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"

import "./SwiperProject.css";
import repair from '../../images/projects/1.png';
import eplanet from '../../images/projects/2.png';
import sundarban from '../../images/projects/3.png';
import imgSlider from '../../images/projects/9.png';
import alpha from '../../images/projects/4.png';

// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination]);



const SwiperProject = () => {
    return (
        <section className="pb-5 swiper-main">
            <span className="swiper-title">Latest Projects</span>
            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                "rotate": 50,
                "stretch": 0,
                "depth": 100,
                "modifier": 1,
                "slideShadows": true
            }} pagination={true} className="mySwiper">
                <SwiperSlide>
                    <a href={`https://${'repair-guruji.web.app'}`} target='_blank' rel="noreferrer" className="text-decoration-none"><img src={repair} alt="" /></a>
                </SwiperSlide>

                <SwiperSlide>
                    <a href={`https://${'e-planetshop.web.app/'}`} target='_blank' rel="noreferrer" className="text-decoration-none"><img src={eplanet} alt=""/></a>
                </SwiperSlide>

                <SwiperSlide>
                    <a href={`https://${'sundarban-express.web.app/'}`} target='_blank' rel="noreferrer" className="text-decoration-none"><img src={sundarban} alt=""/></a>
                </SwiperSlide>

                <SwiperSlide>
                    <a href={`https://${'sabbir185-alpha-teams.netlify.app/'}`} target='_blank' rel="noreferrer" className="text-decoration-none"><img src={alpha} alt=""/></a>
                </SwiperSlide>

                <SwiperSlide>
                    <a href={`https://${'sabbir185.github.io/JavaScript/API-basic-concept/fancy-slider-bug-fixing/index.html'}`} target='_blank' rel="noreferrer" className="text-decoration-none"><img src={imgSlider} alt=""/></a>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default SwiperProject;