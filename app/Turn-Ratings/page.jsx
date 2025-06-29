import React from 'react'
import { MdOutlineLocationOn } from 'react-icons/md'
import { RiSearchLine } from 'react-icons/ri'

// todo نوبت دهی مطب
function TurnRatings() {
  return (
    <div className='TurnRatings container w-8xl mx-auto mt-12 flex flex-col'>

      <Serach_Box_Turn_Ratings />

      <div className='Content_Box_Turn_Ratings w-full grid grid-cols-12 gap-x-8' dir='rtl'>
        <div className='col-span-4 bg-white rounded-lg shadow-xs px-4 py-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates voluptatum, aperiam nostrum consequatur aliquam dignissimos assumenda architecto, officiis ut similique eveniet itaque rem laborum. Autem sed ad veritatis pariatur fugit aliquid? Earum labore esse unde distinctio? Quas recusandae excepturi non modi laudantium veniam in optio, ipsam impedit aliquam! Odit quae nostrum, quam id quas tempore consequatur illum suscipit inventore accusantium ipsam laboriosam fugit reiciendis. Expedita culpa omnis quisquam a magnam, voluptates totam quibusdam quasi. Neque perspiciatis nulla, iste consequatur iusto quaerat corporis esse quam, aspernatur quos unde officia commodi cum ullam ipsam officiis quibusdam veniam dignissimos omnis laborum asperiores rem.</div>
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