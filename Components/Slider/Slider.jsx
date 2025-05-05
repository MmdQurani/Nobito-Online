'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { MdOutlineLocationOn } from "react-icons/md";

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
          <div className='h-full w-full flex flex-col justify-start gap-y-2.5 p-4'>
            <div className='image-slide'>
              <img src="/images/Doctors/Pic.png" className='object-cover' alt="" />
            </div>

            <div className='body-slide flex-1 flex flex-col justify-between' dir='rtl'>
              <div className='flex flex-row justify-between items-center mb-2'>
                <span className='text-lg text-main-text-2'>محمد ابراهیمی</span>

                <div className='flex flex-row items-center text-xs gap-x-1'>
                  <span className='text-main-text-2/70 font-bold font-Dirooz'>4/2</span>
                  <img src="/icons/star.png" className='w-[18px] h-[18px]' alt="" />
                </div>
              </div>

              <div className='flex flex-col gap-y-4 items-start mb-2'>
                <span className='text-sm text-sub-text font-Dirooz font-medium'>متخصص قلب و عروق</span>
                <span className='text-sm text-primery-600 font-Dirooz font-medium'>(97%) 2374 بیمار راضی</span>
              </div>

              <div className='text-xs text-main-text-3 flex flex-row justify-around'>
                <span className='bg-gray-50 px-3 py-1 rounded-2xl cursor-pointer'>جراحی قلب</span>
                <span className='bg-gray-50 px-3 py-1 rounded-2xl cursor-pointer'>آنجوگرافی</span>
                <span className='bg-gray-50 px-3 py-1 rounded-2xl cursor-pointer'>تست ورزش</span>
              </div>

              <hr className='my-1 text-gray-200' />

              <div className='bg-amber-400'>
                <MdOutlineLocationOn className='text-2xl' />
              </div>

            </div>
          </div>
        </SwiperSlide>

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