'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper container"
      >
        <SwiperSlide className='h-full'>Slide 1</SwiperSlide>
        <SwiperSlide className='h-full'>Slide 2</SwiperSlide>
        <SwiperSlide className='h-full'>Slide 3</SwiperSlide>
        <SwiperSlide className='h-full'>Slide 4</SwiperSlide>
        <SwiperSlide className='h-full'>Slide 5</SwiperSlide>
        <SwiperSlide className='h-full'>Slide 6</SwiperSlide>
        <SwiperSlide className='h-full'>Slide 7</SwiperSlide>
        <SwiperSlide className='h-full'>Slide 8</SwiperSlide>
        <SwiperSlide className='h-full'>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}