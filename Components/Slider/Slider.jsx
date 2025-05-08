'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Card_Slide from '../CardSlide/CardSlide';
import { SlArrowLeftCircle, SlArrowRightCircle } from 'react-icons/sl';

import { useContext } from "react";
import { DataContext } from '@/Context/Context';

export default function Slider() {

  const { data, setData } = useContext(DataContext);
  console.log(data)

  return (
    <>
      <div className="relative">
        <Swiper
          slidesPerView="auto"
          spaceBetween={20}
          pagination={{
            clickable: true,
            el: ".custom-pagination" // مشخص کردن مکان جدید برای دکمه‌های pagination
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="h-full">
            <Card_Slide />
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <Card_Slide />
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <Card_Slide />
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <Card_Slide />
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <Card_Slide />
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <Card_Slide />
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <Card_Slide />
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <Card_Slide />
          </SwiperSlide>
        </Swiper>

        {/* محل جدید برای دکمه‌های ناوبری و صفحه‌بندی */}
        <div className="custom-controls mt-8 h-12 flex flex-row justify-center items-center">
          <div className='flex flex-row h-full items-center'>
            <button className="custom-prev rounded-full p-2 border-1 text-sub-text hover:text-primery-600 hover:border-primery-600 border-sub-text cursor-pointer">
              <SlArrowLeftCircle className='text-2xl' />
            </button>
            <div className="custom-pagination flex items-center px-8"></div>
            <button className="custom-next rounded-full p-2 border-1 text-sub-text hover:text-primery-600 hover:border-primery-600 border-sub-text cursor-pointer">
              <SlArrowRightCircle className='text-2xl' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}