import Link from 'next/link'
import React from 'react'
import { SlArrowLeftCircle } from "react-icons/sl";
import { MdPhoneInTalk, MdEmail } from "react-icons/md";
import { PiBuildingOfficeFill } from "react-icons/pi";

function Footer() {
  return (
    <footer className='h-max w-full mt-6 bg-white shadow-[0_5px_10px_rgba(0,0,0,0.02)] py-12'>
      <div className='container w-8xl h-full mx-auto flex flex-col'>

        <FooterAboutUs />
        <LinksFooterBox />

        <ContactAddresses />

        <hr className='text-sub-text/40 my-6' />

        <div className='Social-media'>social media</div>

      </div>
    </footer>
  )
}

export function FooterAboutUs() {
  return (
    <div className='footer-About-us grid grid-cols-12 mb-12'>

      <div className='footer-about-us-box flex-1 flex flex-col justify-around lg:col-span-11 2xl:col-span-11 col-span-12 lg:px-12 px-0 lg:order-1 order-2 lg:text-start text-center px' dir='rtl'>
        <h3 className='text-main-text-2 font-bold text-xl lg:mb-0 mb-4 leading-10'>تلاش ما دسترسی آسان تر شما به خدمات پزشکی است</h3>

        <span className='text-sub-text text-sm leading-7'>
          با افتخار به شما پلتفرم نوبیتو را معرفی میکنیم. ما با افتخار به عنوان یک پلتفرم جامع ارائه دهنده خدمات پزشکی مثل نوبت‌دهی آنلاین، خدمات مشاوره حضوری و غیرحضوری و خدمات پزشکی در منزل را ارائه می‌دهیم. از اختصاص نوبت‌های پزشکی تا امکان مشاوره آنلاین و حضوری، همه چیز در اینجاست تا به شما یک تجربه درمانی راحت و بی دردسر ارائه دهیم.تمام تلاش و سعی ما بر این باور است که دغدغه های دسترسی و درمان را برای بیماران و همراهانشان کمتر کنیم،امیدواریم نوبیتو در روزهای ناخوش احوالی همراه و همیار شما باشد.
        </span>

      </div>

      <div className='footer-logo-box w-full flex lg:justify-end justify-center items-center lg:col-span-1 2xl:col-span-1 col-span-12 lg:order-2 order-1 lg:mb-0 mb-8'>
        <img src="/images/logo/logo-footer.png" alt="" />
      </div>

    </div>
  )
}

export function LinksFooterBox() {
  return (
    <div className='links-footer-box w-full mb-12'>
      <div className='grid grid-cols-12 w-full'>
        <InputNewsBox />
        <LinksByPagesBoxInFooter />
      </div>
    </div>
  )
}

export function InputNewsBox() {
  return (
    <div className='input-News-box xl:col-span-5 col-span-12 xl:order-1 order-2'>
      <div className='w-full h-full flex flex-col items-start justify-start' dir='rtl'>

        <div className='flex flex-col gap-y-2.5'>
          <span className='font-bold text-lg'>خبرنامه</span>
          <span className='text-xs text-sub-text'>برای اینکه از جدیدترین اخبار نوبیتو جا نمونید...</span>
        </div>

        <form className='w-full flex flex-row gap-2 my-6'>
          <input className='bg-transparent border-1 border-sub-text text-main-text-2 rounded-md py-2.5 px-4 outline-0 w-96 max-w-[50%]' type="text" placeholder='ایمیل خود را اینجا وارد کنید' />
          <button className='bg-primery-600 px-4 py-2.5 flex flex-row items-center gap-x-2 rounded-md cursor-pointer text-white'>
            <span>ارسال</span>
            <SlArrowLeftCircle className='text-xl' />
          </button>
        </form>

        <span className='text-xs text-sub-text'>تلاش ما ارائه بهترین خدمات ممکن به شما همراهان  نوبیتو است.</span>

      </div>
    </div>
  )
}

export function LinksByPagesBoxInFooter() {
  return (
    <div className='links-by-pages-box xl:col-span-7 col-span-12 xl:order-2 order-1 mb-8'>

      <div className='w-full grid grid-cols-12'>
        <RowOfLinks title='نیکوکاری'>
          <RowOfLinksItem title='درمانگر داوطلب' />
          <RowOfLinksItem title='بیشتر بدانید' />
          <RowOfLinksItem title='کمک مالی' />
        </RowOfLinks>
        <RowOfLinks title='پشتیبانی'>
          <RowOfLinksItem title='شبکه های اجتماعی' />
          <RowOfLinksItem title='واحد انفورماتیک' />
          <RowOfLinksItem title='حریم شخصی' />
          <RowOfLinksItem title='تماس با ما' />
        </RowOfLinks>
        <RowOfLinks title='خدمات'>
          <RowOfLinksItem title='خدمات پزشکی در منزل' />
          <RowOfLinksItem title='مشاوره غیرحضوری' />
          <RowOfLinksItem title='مراکز درمانی' />
          <RowOfLinksItem title='نوبت دهی' />
        </RowOfLinks>
        <RowOfLinks title='نوبیتو'>
          <RowOfLinksItem title='سوالات متداول' />
          <RowOfLinksItem title='تماس با ما' />
          <RowOfLinksItem title='درباره ما' />
        </RowOfLinks>
      </div>

    </div>
  )
}

export function RowOfLinks({ children, title }) {
  return (
    <ul className='Row-of-links md:col-span-3 sm:col-span-6 col-span-12 flex flex-col justify-start gap-y-4 md:mb-0 sm:mb-6 mb-6' dir='rtl'>
      <span className='text-2xl mb-4 font-bold text-main-text-2'>{title}</span>
      {children}
    </ul>
  )
}

export function RowOfLinksItem({ title }) {
  return (
    <li className='text-sub-text hover:text-primery-600'>
      <Link href='/'>{title}</Link>
    </li>
  )
}

export function ContactAddresses() {
  return (
    <div className='Contact-addresses'>
      <div className='grid grid-cols-12' dir='rtl'>

        <ContactAddressesItems />
        <SymbolOfTrustt />

      </div>
    </div>
  )
}

export function ContactAddressesItems() {
  return (
    <div className='Contact-addresses-items xl:col-span-7 md:col-span-6 col-span-12 md:m-0 mb-8 pe-8'>
      <div className='w-full h-full flex flex-col md:justify-around md:gap-0 gap-y-8'>
        <div className='flex flex-row items-center gap-x-2'>
          <MdPhoneInTalk className='text-2xl text-primery-600' />
          <span className='text-sm text-sub-text'>تماس با پشتیبانی : ۱۲۳۴۵۶۷۸-۰۲۱ | ۱۲۳۴۵۶۷۸-۰۲۱</span>
        </div>
        <div className='flex flex-row items-center gap-x-2'>
          <MdEmail className='text-2xl text-primery-600' />
          <span className='text-sm text-sub-text'>نشانی پست الکترونیک : smartix@yahoo.com</span>
        </div>
        <div className='flex flex-row items-center gap-x-2'>
          <PiBuildingOfficeFill className='text-2xl text-primery-600' />
          <span className='text-sm text-sub-text'>نشانی : تهران _ میدان آرژانتین _ خیابان لاله _ کوچه صاد _ پلاک 18</span>
        </div>
      </div>
    </div>
  )
}

export function SymbolOfTrustt() {
  return (
    <div className='Symbol-of-trust xl:col-span-5 md:col-span-6 col-span-12'>
      <div className='w-full h-full flex flex-col gap-y-4'>
        <div className='w-full h-full flex flex-row justify-around flex-wrap gap-2.5 gap-y-4'>
          <img src="/images/trust/cetificate.png" width='100' alt="" />
          <img src="/images/trust/cetificate-2.png" width='100' alt="" />
          <img src="/images/trust/cetificate-3.png" width='100' alt="" />
          <img src="/images/trust/cetificate-4.png" width='100' alt="" />
        </div>
        <div className='w-full h-full'>
          <span className='text-sub-text text-sm leading-7'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه</span>
        </div>
      </div>
    </div>
  )
}

export default Footer