import Link from 'next/link'
import React from 'react'
import { MdOutlineLocationOn } from 'react-icons/md'

function Card_Slide() {
  return (
    <div className='Card-Slide h-full w-full flex flex-col justify-start gap-y-2.5 p-4'>
      <Slide_Image />

      <Slide_Body />
    </div>
  )
}

export function Slide_Image({ srcImg }) {
  return (
    <Link href='/' className='slide-image w-full flex justify-center'>
      <img src="/images/Doctors/Pic.png" className='object-cover w-full' alt="" />
    </Link>
  )
}

export function Slide_Body() {
  return (
    <div className='body-slide flex-1 flex flex-col justify-between' dir='rtl'>

      <div className='flex flex-row justify-between items-center mb-2'>
        <Title_Card />

        <Star_Score />
      </div>

      <PhysicianExpertiseAndPatientSatisfaction />

      <Doctor_Specialty />

      <hr className='my-2.5 text-gray-200' />

      <DoctorAddress />

    </div>
  )
}

export function Title_Card({ title }) {
  return (
    <Link href='/' className='title-card text-lg text-main-text-2'>محمد ابراهیمی</Link>
  )
}

export function Star_Score({ score }) {
  return (
    <div className='Star-Score flex flex-row items-center text-xs gap-x-1'>
      <span className='text-main-text-2/70 font-bold font-Dirooz'>4/2</span>
      <img src="/icons/star.png" className='w-[18px] h-[18px]' alt="" />
    </div>
  )
}

export function PhysicianExpertiseAndPatientSatisfaction({ satisfaction, specialty }) {
  return (
    <div className='Physician-expertise-and-patient-satisfaction flex flex-col gap-y-4 items-start mb-2'>
      <span className='text-sm text-sub-text font-Dirooz font-medium'>متخصص قلب و عروق</span>
      <span className='text-sm text-primery-600 font-Dirooz font-medium'>(97%) 2374 بیمار راضی</span>
    </div>
  )
}

export function Doctor_Specialty({ specialty }) {
  return (
    <div className='Doctor-specialty text-xs text-main-text-3 flex flex-row justify-around'>
      <span className='bg-gray-50 px-3 py-1 rounded-2xl cursor-pointer'>جراحی قلب</span>
      <span className='bg-gray-50 px-3 py-1 rounded-2xl cursor-pointer'>آنجوگرافی</span>
      <span className='bg-gray-50 px-3 py-1 rounded-2xl cursor-pointer'>تست ورزش</span>
    </div>
  )
}

export function DoctorAddress({ address }) {
  return (
    <div className='Doctor-address flex flex-row items-center text-main-text-3'>
      <MdOutlineLocationOn className='text-xl' />
      <span className='text-xs test-text'>نشانی : تهران _ میدان آرژانتین _ خیابان لاله _ کوچه صاد _ پلاک 18</span>
    </div>
  )
}

export default Card_Slide