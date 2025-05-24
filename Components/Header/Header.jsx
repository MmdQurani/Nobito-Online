'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

function Header() {
  const [activeMenu, setActiveMenu] = useState(false);

  const activeMenuHandler = () => {
    setActiveMenu(prev => !prev);
  };

  return (
    <header className="h-max w-full sticky top-0 mx-auto bg-white border-b border-gray-200 z-50">
      <div className="container w-8xl mx-auto flex flex-col">
        <div className="top-bar h-26 flex items-center">
          <nav className="w-full flex flex-row justify-between items-center" dir="rtl">
            <div className="nav-right flex flex-row items-center">
              <LogoBox />
              <NavbarBtnsBox />
            </div>
            <div className="nav-left">
              <ProfBtnsBox />
              <HamburgerMenu activeMenuProp={{ activeMenu, setActiveMenu }} />
            </div>
          </nav>
        </div>

        <hr className="my-1 lg:flex hidden text-gray-300" />

        <div className="bottom-bar h-10 lg:flex hidden">
          <nav className="flex flex-row justify-between h-full w-full">
            <div className="top-link-btns-box min-h-full flex flex-row items-center flex-1 me-50">
              <NavbarBtn title="درباره ما" />
              <NavbarBtn title="تماس با ما" />
              <NavbarBtn title="سوالات متداول" />
            </div>

            <div className="Social-media-btns-box min-w-max lg:flex flex-row-reverse justify-start items-center gap-x-6 min-h-full px-2.5">
              <Link href="/">
                <FaInstagram className="text-2xl text-sub-text hover:text-pink-500" />
              </Link>
              <Link href="/">
                <FaTelegram className="text-2xl text-sub-text hover:text-blue-400" />
              </Link>
              <Link href="/">
                <FaLinkedin className="text-2xl text-sub-text hover:text-blue-500" />
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* لایه تارکننده پس‌زمینه */}
      <div
        className={`fixed inset-0 bg-black/10 backdrop-blur-xs z-40 transition-opacity duration-300 ${activeMenu ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      />

      {/* منوی اسلایدینگ از سمت راست */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full bg-main-background w-[70%] sm:w-96 z-50 transform transition-transform duration-300 px-4 ${activeMenu ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* محتوای منو به دلخواه شما */}
        <div className="head-hamburger-menu h-max w-full top-0 flex flex-row justify-between items-center gap-x-6 py-4">
          <button className="cursor-pointer" onClick={activeMenuHandler}>
            <IoCloseSharp className="text-4xl text-sub-text hover:text-primery-600" />
          </button>


          <div className='logo-box'>
            <img src="/images/logo/Logo.png" className='object-contain w-full' alt="" />
          </div>
        </div>

        <hr className='text-sub-text/40' />

        <div className="body-hamburger-menu h-full w-full top-0 overflow-y-auto hide-scrollbar" dir='rtl'>
          <ul>
            <li className="my-6 text-sm text-main-text-3 hover:text-primery-600">
              <Link href="/">نوبت دهی مطب</Link>
            </li>
            <li className="my-6 text-sm text-main-text-3 hover:text-primery-600">
              <Link href="/">خدمات</Link>
            </li>
            <li className="my-6 text-sm text-main-text-3 hover:text-primery-600">
              <Link href="/">مشاوره آنلاین</Link>
            </li>
            <li className="my-6 text-sm text-main-text-3 hover:text-primery-600">
              <Link href="/">مجله سلامت</Link>
            </li>
            <li className="my-6 text-sm text-main-text-3 hover:text-primery-600">
              <Link href="/">نیکوکاری</Link>
            </li>
            <hr className='text-sub-text/40' />
            <li className="my-6 text-sm text-main-text-3 hover:text-primery-600">
              <Link href="/">درباره ما</Link>
            </li>
            <li className="my-6 text-sm text-main-text-3 hover:text-primery-600">
              <Link href="/">تماس با ما</Link>
            </li>
            <li className="my-6 text-sm text-main-text-3 hover:text-primery-600">
              <Link href="/">سوالات متداول</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
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

export function HamburgerMenu({ activeMenuProp }) {

  const activeMenuHandler = () => {
    activeMenuProp.setActiveMenu(prev => !prev)
  }

  return (
    <div className='lg:hidden flex justify-end'>
      <button className='cursor-pointer' onClick={activeMenuHandler}>
        <IoMenu className='text-4xl text-sub-text hover:text-primery-600' />
      </button>
    </div>
  )
}

export default Header