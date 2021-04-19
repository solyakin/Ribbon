import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
import 'swiper/swiper-bundle.css';
import imageOne from '../assets/image1.jpg';
import imageTwo from '../assets/image2.jpg';
import imageThree from '../assets/image3.jpg';
import imageFour from '../assets/image4.jpg';
SwiperCore.use([Autoplay]);

const HeroPage = ()=> {
    return(
        <div className="hero-page">
            <Swiper
                spaceBetween={10}
                slidesPerView={2}
                // centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
            >
                <SwiperSlide><img src={imageOne} alt=""/></SwiperSlide>
                <SwiperSlide><img src={imageTwo} alt=""/></SwiperSlide>
                <SwiperSlide><img src={imageThree} alt=""/></SwiperSlide>
                <SwiperSlide><img src={imageFour} alt=""/></SwiperSlide>
            </Swiper>
        </div>
    )
};
export default HeroPage;