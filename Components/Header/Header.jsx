import React from 'react'
import Link from 'next/link'
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <header className='h-max w-full sticky top-0 mb-6 mx-auto bg-white shadow-md shadow-gray-200/60'>

      <div className='container w-8xl mx-auto flex flex-col'>
        <div className='top-bar h-26 flex items-center'>

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

        <hr className='my-1 text-sub-text/40' />

        <div className='bottom-bar h-10 lg:flex hidden'>

          <nav className='flex flex-row justify-between h-full w-full'>

            <div className='top-link-btns-box min-h-full flex flex-row items-center flex-1 me-50'>
              <NavbarBtn title='درباره ما' />
              <NavbarBtn title='تماس با ما' />
              <NavbarBtn title='سوالات متداول' />
            </div>

            <div className='Social-media-btns-box min-w-max lg:flex flex-row-reverse justify-start items-center gap-x-6 min-h-full px-2.5'>

              <Link href='/'>
                <FaInstagram className='text-2xl text-sub-text hover:text-pink-500' />
              </Link>

              <Link href='/'>
                <FaTelegram className='text-2xl text-sub-text hover:text-blue-400' />
              </Link>
              
              <Link href='/'>
                <FaLinkedin className='text-2xl text-sub-text hover:text-blue-500' />
              </Link>

            </div>

          </nav>

        </div>

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
    <Link href='/' className='px-2.5 py-1 rounded-sm font-Vazir font-bold text-sm hover:text-primery-600 text-sub-text'>
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