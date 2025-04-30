import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='h-36 w-full sticky top-0 mb-8 mx-auto bg-white'>

      <div className='container w-full h-full mx-auto flex flex-col'>
        <div className='top-bar h-[70%] flex items-center'>

          <nav className='w-full flex flex-row justify-between items-center' dir='rtl'>
            <div className='nav-right flex flex-row items-center bg-blue-400'>

              <div className='logo-box'>
                <img src="/images/logo/Logo.png" className='w-full' alt="" />
              </div>

              <div className='navbar-btns h-full flex flex-row gap-x-4 ms-8'>
                <Link href='/' className='px-4 py-1 rounded-sm font-Dirooz font-normal text-sub-text'>نوبت دهی مطب</Link>
                <Link href='/' className='px-4 py-1 rounded-sm font-Dirooz font-normal text-sub-text'>خدمات</Link>
                <Link href='/' className='px-4 py-1 rounded-sm font-Dirooz font-normal text-sub-text'>مشاوره آنلاین</Link>
                <Link href='/' className='px-4 py-1 rounded-sm font-Dirooz font-normal text-sub-text'>مجله سلامت</Link>
                <Link href='/' className='px-4 py-1 rounded-sm font-Dirooz font-normal text-sub-text'>نیکوکاری</Link>
              </div>

            </div>

            <div className='nav-left flex-1 bg-red-400'>
              <div className='prof-btns-box flex flex-row justify-end'>
                <Link href='/' className='px-4 py-1 rounded-sm font-Dirooz font-normal bg-amber-300 text-sub-text'>نیکوکاری</Link>
                <Link href='/' className='px-4 py-1 rounded-sm font-Vazir font-bold bg-amber-300 text-sub-text'>ورود/ثبت نام</Link>
              </div>
            </div>
          </nav>

        </div>

        <div className='bottom-bar bg-cyan-500 flex-1'>hello world</div>
      </div>

    </header>
  )
}

export default Header