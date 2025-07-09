import React from 'react'
import { MdOutlineLocationOn } from 'react-icons/md'
import { RiSearchLine } from 'react-icons/ri'
import { CiFilter } from "react-icons/ci";
import { Medical_Consultation_Method } from '@/Components/Medical_Consultation_Method/Mediacl_Consultation_Method_Item';
import { SlArrowDown } from "react-icons/sl";
import GenderFilter from '@/Components/GenderFilter/GenderFilter';
import Filtering_TrunRatings from '@/Components/Filtering_TrunRatings/Filtering_TrunRatings';
import CategoryFilter from '@/Components/CategoryFilter/CategoryFilter';
// import { LuPhone } from "react-icons/lu";

// todo نوبت دهی مطب
function TurnRatings() {

  return (
    <div className='TurnRatings container w-8xl mx-auto mt-12 flex flex-col'>

      <Serach_Box_Turn_Ratings />

      <div className='Content_Box_Turn_Ratings w-full grid grid-cols-12 gap-x-8' dir='rtl'>

        <Filtering_TrunRatings />

        <div className="Turn_Ratings_Cards lg:col-span-8 col-span-12 p-4 rounded-lg">
          <CategoryFilter />
        </div>

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

export function Select_List_Filter_Box({ children, title }) {
  return (
    <>
      <div className="mt-6">
        <label className="block mb-2 text-lg font-medium text-gray-700">
          {title}
        </label>

        <div className="relative">
          <select className="
            w-full
            py-2
            px-3
            border
            border-gray-300
            bg-white
            rounded-md
            shadow-sm
            appearance-none
            focus:outline-none
            focus:ring-1
            focus:border-gray-100/20  /* مرز در حالت فوکوس مثل حالت عادی */
            cursor-pointer
            text-sm
            text-main-text-2
            font-Dirooz
          "
          >

            {children}

          </select>

          <SlArrowDown
            className="
            pointer-events-none
            absolute
            left-3
            top-1/2
            transform
            -translate-y-1/2
            text-gray-500
          "
            size={20}
          />
        </div>
      </div>
    </>
  )
}


export default TurnRatings