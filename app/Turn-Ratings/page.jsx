import React from 'react'
import { MdOutlineLocationOn } from 'react-icons/md'
import { RiSearchLine } from 'react-icons/ri'

// todo نوبت دهی مطب
function TurnRatings() {
  return (
    <div className='container w-8xl mx-auto mt-12 flex flex-col'>

      <Serach_Box_Turn_Ratings />

    </div>
  )
}

export function Serach_Box_Turn_Ratings() {
  return (
    <div className='w-full h-20' dir='rtl'>
      <div className='xl:min-w-7/12 xl:max-w-7/12 w-full bg-white rounded-lg shadow-md shadow-sub-text/10 flex flex-row justify-between items-center gap-x-2 sm:px-4 px-2'>

        <button>
          <RiSearchLine className='text-2xl text-sub-text' />
        </button>

        <input type='text' placeholder='جستجو پزشک،درمانگر،کلینیک...' className=' w-[200px] truncate overflow-hidden whitespace-nowrap search-input placeholder:text-lg  bg-transparent sm:flex-1 flex-auto outline-0 py-4 pe-2' />

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