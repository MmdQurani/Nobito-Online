'use client'

import { useState } from 'react'
import { LuPhone } from 'react-icons/lu'
import { LuMonitorSmartphone } from "react-icons/lu";
import { LuHospital } from "react-icons/lu";

export function Medical_Consultation_Method() {
  // 1. اندیسِ آیتمِ فعال
  const [activeIndex, setActiveIndex] = useState(0)

  // 2. آرایه‌ای از متدها و آیکون‌ها
  const methods = [
    { icon: LuPhone, label: 'تماس صوتی' },
    { icon: LuMonitorSmartphone, label: 'آنلاین' },
    { icon: LuHospital, label: 'حضوری' },
  ]

  return (
    <div className="Medical_Consultation_Method mt-6">
      <span className="text-sm text-main-text-2">
        شیوه مشاوره پزشکی خود را انتخاب کنید
      </span>

      <div className="Medical_Consultation_Method_Items grid grid-cols-12 gap-4 mt-6">
        {methods.map((method, idx) => (
          <Medical_Consultation_Method_Item
            key={idx}
            Icon={method.icon}
            label={method.label}
            // پرپ برای تشخیص فعال بودن
            isActive={activeIndex === idx}
            // وقتی کلیک شد، اندیس فعال رو آپدیت کن
            onClick={() => setActiveIndex(idx)}
          />
        ))}
      </div>
    </div>
  )
}

export function Medical_Consultation_Method_Item({
  Icon,
  label,
  isActive,
  onClick,
}) {
  return (
    <div className="col-span-4 flex flex-col items-center">
      <button
        onClick={onClick}
        className={[
          'size-18 rounded-full transition-colors duration-200 cursor-pointer',
          isActive ? 'bg-primery-600' : 'bg-gray-200',
        ].join(' ')}
      >
        <Icon
          className={[
            'text-3xl m-auto transition-colors duration-200',
            isActive ? 'text-white' : 'text-gray-600',
          ].join(' ')}
        />
      </button>
      <span
        className={[
          'mt-2 text-sm',
          isActive ? 'text-primary-600 font-semibold' : 'text-gray-500',
        ].join(' ')}
      >
        {label}
      </span>
    </div>
  )
}