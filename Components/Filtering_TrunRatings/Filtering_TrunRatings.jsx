'use client'

import React, { useState } from 'react'
import { CiFilter } from 'react-icons/ci';
import { Medical_Consultation_Method } from '../Medical_Consultation_Method/Mediacl_Consultation_Method_Item';
import { Select_List_Filter_Box } from '@/app/Turn-Ratings/page';
import GenderFilter from '../GenderFilter/GenderFilter';

function Filtering_TrunRatings() {

  const [gender, setGender] = useState('all');

  return (
    <>
      <div className='col-span-4 lg:flex hidden'>
        <div className='filter-box w-full bg-white rounded-lg shadow-xs px-4 py-8'>

          {/* تایتل باکس فیلترکننده */}
          <div className='title-filter-box flex flex-row justify-between'>
            <div className='flex flex-row items-center gap-1 text-main-text-2 '>
              <CiFilter className='text-4xl' />
              <span className='text-md'>فیلتر کردن</span>
            </div>
            <button className='text-xs text-sub-text cursor-pointer'>حذف فیلترها</button>
          </div>

          <Medical_Consultation_Method />

          <hr className='mt-10 text-gray-200' />

          <Select_List_Filter_Box title='تخصص' >

            <option value="all">همه</option>
            <option value="rating-high">بیشترین رتبه</option>
            <option value="rating-low">کمترین رتبه</option>
            <option value="alphabetical">الفبایی</option>
          </Select_List_Filter_Box>

          <hr className='mt-10 text-gray-200' />

          <Select_List_Filter_Box title='خدمات' >

            <option value="all">همه</option>
            <option value="rating-high">بیشترین رتبه</option>
            <option value="rating-low">کمترین رتبه</option>
            <option value="alphabetical">الفبایی</option>
          </Select_List_Filter_Box>

          <hr className='mt-10 text-gray-200' />

          <div className='grid grid-cols-12 gap-x-4'>

            <div className='col-span-6'>
              <Select_List_Filter_Box title='شهر' >

                <option value="all">همه</option>
                <option value="rating-high">بیشترین رتبه</option>
                <option value="rating-low">کمترین رتبه</option>
                <option value="alphabetical">الفبایی</option>
              </Select_List_Filter_Box>
            </div>

            <div className='col-span-6'>
              <Select_List_Filter_Box title='استان' >

                <option value="all">همه</option>
                <option value="rating-high">بیشترین رتبه</option>
                <option value="rating-low">کمترین رتبه</option>
                <option value="alphabetical">الفبایی</option>
              </Select_List_Filter_Box>
            </div>

          </div>

          <hr className='mt-10 text-gray-200' />

          <Select_List_Filter_Box title='بیمه' >

            <option value="all">همه</option>
            <option value="rating-high">بیشترین رتبه</option>
            <option value="rating-low">کمترین رتبه</option>
            <option value="alphabetical">الفبایی</option>
          </Select_List_Filter_Box>

          <hr className='mt-10 text-gray-200' />

          <GenderFilter onChange={(g) => setGender(g)} />

        </div>
      </div>
    </>
  )
}

export default Filtering_TrunRatings