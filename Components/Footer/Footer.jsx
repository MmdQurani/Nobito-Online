import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='h-max w-full mt-6 bg-white shadow-[0_5px_10px_rgba(0,0,0,0.02)] py-12'>
      <div className='container w-8xl h-full mx-auto flex flex-col'>

        <FooterAboutUs />
        <LinksFooterBox />

        <div className='Contact-addresses'>address</div>

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
    <div className='links-footer-box w-full'>

      <div className='grid grid-cols-12 w-full'>

        <div className='input-News-box xl:col-span-5 col-span-12 xl:order-1 order-2'>input</div>

        <LinksByPagesBoxInFooter />

      </div>

    </div>
  )
}

export function LinksByPagesBoxInFooter() {
  return (
    <div className='links-by-pages-box xl:col-span-7 col-span-12 xl:order-2 order-1'>

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

export default Footer