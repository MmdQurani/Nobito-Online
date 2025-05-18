import Banner_Box from '@/Components/Banner_Box/Banner_Box';
import Card_Slide from '@/Components/CardSlide/CardSlide';
import Slider from '@/Components/Slider/Slider';
import Link from 'next/link';
import React from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import { SlArrowLeftCircle } from "react-icons/sl";

function Home() {
  return (
    <>
      <div className='Home-Page-Main-Content flex flex-col item-center'>

        <HeaderBanner>
          <img src='/images/Banner/Banner.png' className='w-full max-h-full min-h-75 object-cover sm:flex hidden' />
          <img src='/images/Banner/Banner-sm.png' className='w-full max-h-full object-contain sm:hidden flex' />
        </HeaderBanner>

        <div className='Main-Content'>

          <Site_Statistics />

          {/* Slider-Box */}
          <div className='Slider-Box flex flex-col justify-between'>

            <Slider_Box_Title title='محبوبترین پزشکان این ماه' />

            <div className='min-h-96 max-h-max py-1 my-8 container w-8xl mx-auto'>
              <Slider dataKey="doctors">
                <Card_Slide />
              </Slider>
            </div>

          </div>

          {/* Slider-Box */}
          <div className='Slider-Box flex flex-col justify-between'>

            <Slider_Box_Title title='مشاورین در دسترس' />

            <div className='min-h-96 max-h-max py-1 my-8 container w-8xl mx-auto'>
              <Slider dataKey="admin">
                <Card_Slide />
              </Slider>
            </div>

          </div>

          <Banner_Box />

          {/* Slider-Box */}
          <div className='Slider-Box flex flex-col justify-between'>

            <Slider_Box_Title title='محبوبترین کلینیک های پزشکی' />

            <div className='min-h-96 max-h-max py-1 my-8 container w-8xl mx-auto'>
              <Slider dataKey="clinic">
                <Card_Slide />
              </Slider>
            </div>

          </div>

          <div className='Insurance-Box container w-8xl mx-auto' dir='rtl'>

            {/* <div className='w-full h-full bg-white p-8'>

              <div className='Content-Insurance grid grid-cols-14'>

                <div className='xl:col-span-10 lg:col-span-8 col-span-14 lg:order-1 order-2 flex flex-col justify-around items-start pe-4'>
                  <span className='text-3xl text-main-text-2 mb-8'>بیمه دکترتو در روزهای سخت همراه شماست</span>
                  <p className='leading-8 text-sm text-sub-text mb-8'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،</p>
                  <button>click</button>
                </div>

                <div className='xl:col-span-4 lg:col-span-6 col-span-14 lg:order-2 order-1 bg-amber-400 flex justify-center items-center'>
                  <img src='/images/Insurance/Insurance.png' className='object-contain w-full' />
                </div>

              </div>

              <div className='Option-Insurance'></div>

            </div> */}

            <div className='w-full h-full bg-white py-12 px-8 rounded-xl'>

              <div className='Content-Insurance flex lg:flex-row flex-col gap-y-8 gap-x-6'>

                <div className='flex flex-col justify-around sm:items-start items-center lg:pe-4 flex-1 lg:order-1 order-2'>
                  <span className='lg:text-3xl text-2xl text-main-text-2 mb-8'>بیمه دکترتو در روزهای سخت همراه شماست</span>
                  <p className='leading-8 text-sm text-sub-text mb-8'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،</p>
                  <button className='border-2 border-sub-text px-4 py-1 rounded-lg text-sub-text cursor-pointer hover:border-primery-600 hover:text-primery-600 sm:w-max w-full'>مطالعه بیشتر</button>
                </div>

                <div className='flex justify-center items-center lg:order-2 order-1'>
                  <img src='/images/Insurance/Insurance.png' className='object-cover min-w-full max-h-[256] min-h-[256] sm:min-h-full rounded-xl' />
                </div>

              </div>

              <div className='Option-Insurance'></div>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

// * HeaderBanner
export function HeaderBanner({ children }) {
  return (
    <div className='relative header-baner w-full'>

      {/* به عنوان فرزند باید دوتا عکس به این کامپوننت پاس داده بشه ، به دلیل اینکه در صفحات مختلف از بنرهای متفاوتی استفاده شده ما از این روش استفاده میکنیم */}
      {children}

      <div className='absolute bottom-[-1.2rem] left-0 w-full flex justify-center' dir='rtl'>

        <div className='min-w-7/12 max-w-[95%] bg-white rounded-lg shadow-md shadow-sub-text/10 flex flex-row justify-between items-center gap-x-2 sm:px-4 px-2'>

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

    </div>
  )
}
// * HeaderBanner

// * Site_Statistics
export function Site_Statistics() {
  return (
    <div className='Site-Statistics w-full'>

      <div className='w-full h-8 flex justify-end'>
        <Rectangle>
          <img src='/images/Rectangle/Rectangle-6.png' className='w-full h-full' />
        </Rectangle>
      </div>

      <Site_Statistics_Content />

      <div className='w-full h-8 flex justify-start'>
        <Rectangle>
          <img src='/images/Rectangle/Rectangle-7.png' className='w-full h-full' />
        </Rectangle>
      </div>

    </div>
  )
}

export function Site_Statistics_Content() {
  return (
    <div className='Site-Statistics-Content container w-8xl mx-auto'>
      <div className='w-full grid grid-cols-12'>
        <Site_Statistics_Content_Items_Box statistics='1500' title='مراکز درمانی' />
        <Site_Statistics_Content_Items_Box statistics='1500' title='مراکز درمانی' />
        <Site_Statistics_Content_Items_Box statistics='1500' title='مراکز درمانی' />
        <Site_Statistics_Content_Items_Box statistics='1500' title='مراکز درمانی' />
      </div>
    </div>
  )
}

export function Rectangle({ children }) {
  return (
    <div className='min-w-8xl max-w-[80%] h-full'>
      {children}
    </div>
  )
}

export function Site_Statistics_Content_Items_Box({ statistics, title }) {
  return (
    <div className='lg:col-span-3 col-span-6 py-8 mx-6 lg:my-0 my-4'>
      <div className='w-full h-full flex flex-col items-center justify-between gap-y-4'>
        <span className='text-3xl text-main-text-2'>+{statistics}</span>
        <span className='text-sm text-sub-text'>{title}</span>
      </div>
    </div>
  )
}
// * Site_Statistics

// * Slider_Box
export function Slider_Box_Title({ href = '/', title }) {
  return (
    // todo  به این کامپوننت همیشه باید دو پراپ ارسال شوند ، یکی تایتل و یکی روت برای کامپوننت لینک

    <div className='Slider-Box-title container w-8xl mx-auto flex flex-row justify-between items-center gap-x-1' dir='rtl'>

      <span className='px-2 sm:text-2xl text-lg text-main-text-2 '>{title}</span>

      <hr className='sm:flex hidden flex-1 h-[1px] text-sub-text/60' />

      <Link href={href} className='px-2 py-1 flex flex-row items-center gap-x-2 sm:text-sm text-xs  text-sub-text hover:text-primery-600'>
        <span>مشاهده همه</span>
        <SlArrowLeftCircle className='sm:text-xl text-sm sm:flex hidden' />
      </Link>

    </div>
  )
}
// * Slider_Box

export default Home