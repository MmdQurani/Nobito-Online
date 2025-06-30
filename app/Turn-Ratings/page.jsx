import React from 'react'
import { MdOutlineLocationOn } from 'react-icons/md'
import { RiSearchLine } from 'react-icons/ri'
import { CiFilter } from "react-icons/ci";
import { Medical_Consultation_Method } from '@/Components/Medical_Consultation_Method/Mediacl_Consultation_Method_Item';
// import { LuPhone } from "react-icons/lu";

// todo نوبت دهی مطب
function TurnRatings() {
  return (
    <div className='TurnRatings container w-8xl mx-auto mt-12 flex flex-col'>

      <Serach_Box_Turn_Ratings />

      <div className='Content_Box_Turn_Ratings w-full grid grid-cols-12 gap-x-8' dir='rtl'>

        <div className='filter-box col-span-4 bg-white rounded-lg shadow-xs px-4 py-8'>

          {/* تایتل باکس فیلترکننده */}
          <div className='title-filter-box flex flex-row justify-between'>
            <div className='flex flex-row items-center gap-1 text-main-text-2 '>
              <CiFilter className='text-4xl ' />
              <span className='text-md'>فیلتر کردن</span>
            </div>
            <button className='text-xs text-sub-text cursor-pointer'>حذف فیلترها</button>
          </div>

          <Medical_Consultation_Method />

        </div>

        <div className='col-span-8 bg-blue-500'>left</div>
      </div>

    </div>
  )
}

export function Serach_Box_Turn_Ratings() {
  return (
    <div className='Serach_Box_Turn_Ratings w-full h-20' dir='rtl'>
      <div className='xl:min-w-7/12 xl:max-w-7/12 w-full bg-white rounded-lg shadow-md shadow-sub-text/10 flex flex-row justify-between items-center gap-x-2 sm:px-4 px-2'>

        <button>
          <RiSearchLine className='text-2xl text-sub-text' />
        </button>

        <input type='text' placeholder='جستجو پزشک،درمانگر،کلینیک...' className=' w-[140] truncate overflow-hidden whitespace-nowrap search-input placeholder:text-lg  bg-transparent sm:flex-1 flex-auto outline-0 py-4 pe-2' />

        <button className='sm:px-2 px-1.5 sm:py-2 py-1.5 border-1 border-primery-600 rounded-lg text-primery-600 flex flex-row items-center gap-x-1 bg-primery-600/8 cursor-pointer'>
          <MdOutlineLocationOn className='text-xl' />
          <span className='sm:flex hidden text-xs'>
            انتخاب شهر
          </span>
        </button>

      </div>
    </div>
  )
}


export default TurnRatings