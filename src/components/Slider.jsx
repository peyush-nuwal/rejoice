import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../App.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
          slidesPerView={4}
          spaceBetween={20} 
          loop={true} 
          loopAdditionalSlides={3} 
          freeMode={true} 
          modules={[FreeMode]} 
          className="mySwiper"
      >
        <SwiperSlide className='slide '> 
            <img src="src/assets/imgs/swipe-1.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide className='slide'>
        <img src="src/assets/imgs/swipe-4.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide className='slide'>
        <img src="src/assets/imgs/swipe-2.webp" alt="" />
        </SwiperSlide>

        <SwiperSlide className='slide'>
        <img src="src/assets/imgs/swipe-3.webp" alt="" />
        </SwiperSlide>
      
        <SwiperSlide className='slide'>
        <img src="src/assets/imgs/swipe-5.webp" alt="" />
        </SwiperSlide >
        
        <SwiperSlide className='slide'> 
            <img src="src/assets/imgs/swipe-1.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide className='slide'>
        <img src="src/assets/imgs/swipe-4.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide className='slide'>
        <img src="src/assets/imgs/swipe-2.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide className='slide'> 
        <img src="src/assets/imgs/swipe-3.webp" alt="" />
        </SwiperSlide>
      
        <SwiperSlide className='slide'> 
        <img src="src/assets/imgs/swipe-5.webp" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
