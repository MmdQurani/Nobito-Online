import React from 'react'

function Footer() {
  return (
    <footer className='h-max w-full mt-8 bg-white shadow-md shadow-gray-200 py-12'>
      <div className='container w-8xl h-full mx-auto flex flex-col'>

        <FooterAboutUs />

        <div className='links-by-pages-box'>links by pages</div>

        <div className='Contact-addresses'>address</div>

        <div className='Social-media'>social media</div>

      </div>
    </footer>
  )
}

export function FooterAboutUs() {
  return (
    <div className='footer-About-us grid grid-cols-9'>

      <div className='footer-about-us-box flex-1 px-10 flex flex-col justify-around lg:col-span-8 col-span-12 lg:order-1 order-2 lg:text-start text-center' dir='rtl'>
        <h3 className='text-main-text-2 font-bold text-xl lg:mb-0 mb-4 leading-10'>تلاش ما دسترسی آسان تر شما به خدمات پزشکی است</h3>

        <span className='text-sub-text text-sm leading-7'>
          با افتخار به شما پلتفرم نوبیتو را معرفی میکنیم. ما با افتخار به عنوان یک پلتفرم جامع ارائه دهنده خدمات پزشکی مثل نوبت‌دهی آنلاین، خدمات مشاوره حضوری و غیرحضوری و خدمات پزشکی در منزل را ارائه می‌دهیم. از اختصاص نوبت‌های پزشکی تا امکان مشاوره آنلاین و حضوری، همه چیز در اینجاست تا به شما یک تجربه درمانی راحت و بی دردسر ارائه دهیم.تمام تلاش و سعی ما بر این باور است که دغدغه های دسترسی و درمان را برای بیماران و همراهانشان کمتر کنیم،امیدواریم نوبیتو در روزهای ناخوش احوالی همراه و همیار شما باشد.
        </span>

      </div>

      <div className='footer-logo-box w-full flex justify-center items-center lg:col-span-1 col-span-12 lg:order-2 order-1 lg:mb-0 mb-8'>
        <img src="/images/logo/logo-footer.png" alt="" />
      </div>

    </div>
  )
}
export default Footer