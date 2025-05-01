import React from 'react'
import Link from 'next/link'
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

function Header() {
  return (
    <header className='h-36 w-full sticky top-0 mb-8 mx-auto bg-white'>

      <div className='container w-8xl h-full mx-auto flex flex-col'>
        <div className='top-bar h-[70%] flex items-center'>

          <nav className='w-full flex flex-row justify-between items-center' dir='rtl'>
            <div className='nav-right flex flex-row items-center'>

              <LogoBox />

              <NavbarBtnsBox />

            </div>

            <div className='nav-left'>

              <ProfBtnsBox />
              
              <HamburgerMenu />

            </div>
          </nav>

        </div>

        <div className='bottom-bar bg-cyan-500 flex-1'>hello world</div>
        
      </div>

    </header>
  )
}

export function LogoBox() {
  return (
    <div className='logo-box'>
      <img src="/images/logo/Logo.png" className='w-full' alt="" />
    </div>
  )
}

export function NavbarBtnsBox() {
  return (
    <div className='navbar-btns h-full lg:flex flex-row gap-x-2 hidden ms-4'>
      <NavbarBtn title='نوبت دهی مطب' />
      <NavbarBtn title='خدمات' />
      <NavbarBtn title='مشاوره آنلاین' />
      <NavbarBtn title='مجله سلامت' />
      <NavbarBtn title='نیکوکاری' />
    </div>
  )
}

export function NavbarBtn({ title }) {
  return (
    <Link href='/' className='px-2.5 py-1 rounded-sm font-Dirooz font-normal text-sm hover:text-primery-600 text-sub-text'>
      {title}
    </Link>
  )
}

export function ProfBtnsBox() {
  return (
    <div className='prof-btns-box lg:flex flex-row justify-end gap-x-2 hidden'>

      <Link href='/' className='flex items-center justify-center rounded-sm font-Dirooz font-normal text-sub-text'>
        <IoMdNotificationsOutline className='text-4xl text-sub-text hover:text-primery-600' />
      </Link>

      <Link href='/' className='flex justify-center items-center px-4 py-2.5 rounded-md font-Vazir font-bold text-sm bg-primery-600 text-white'>ورود / ثبت نام</Link>

    </div>
  )
}

export function HamburgerMenu() {
  return (
    <div className='lg:hidden flex justify-end'>
      <button className='cursor-pointer'>
        <IoMenu className='text-4xl text-sub-text hover:text-primery-600' />
      </button>
    </div>
  )
}

export default Header