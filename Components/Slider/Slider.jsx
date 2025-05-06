'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Card_Slide from '../CardSlide/CardSlide';

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
        <SwiperSlide className='h-full'>
          <Card_Slide />
        </SwiperSlide>
        <SwiperSlide className='h-full'>
          <Card_Slide />
        </SwiperSlide>
        <SwiperSlide className='h-full'>
          <Card_Slide />
        </SwiperSlide>
        <SwiperSlide className='h-full'>
          <Card_Slide />
        </SwiperSlide>
        <SwiperSlide className='h-full'>
          <Card_Slide />
        </SwiperSlide>
        <SwiperSlide className='h-full'>
          <Card_Slide />
        </SwiperSlide>
        <SwiperSlide className='h-full'>
          <Card_Slide />
        </SwiperSlide>
        <SwiperSlide className='h-full'>
          <Card_Slide />
        </SwiperSlide>
      </Swiper>
    </>
  );
}