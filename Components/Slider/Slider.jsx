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
        breakpoints={{
          320: { slidesPerView: 1 }, // برای موبایل کوچک
          480: { slidesPerView: 1.5 }, // برای موبایل بزرگ‌تر
          640: { slidesPerView: 2 }, // برای موبایل بزرگ‌تر
          768: { slidesPerView: 2.5 }, // برای تبلت‌ها
          1024: { slidesPerView: 3.2 },
          1280: { slidesPerView: 4 },
          1536: { slidesPerView: 5 },
        }}

        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
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