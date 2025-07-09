'use client'

import { useState } from 'react';
import { IoFilterSharp } from "react-icons/io5";

export default function CategoryFilter() {
  // تعریف گزینه‌ها
  const options = [
    { id: 'popular', label: 'محبوب‌ترین‌ها' },
    { id: 'topRated', label: 'بیشترین امتیاز' },
    { id: 'fastest', label: 'سریع‌ترین نوبت' },
    { id: 'leastWait', label: 'کمترین معطلی در مطب' },
  ];

  // state برای گزینه فعال
  const [active, setActive] = useState(options[0].id);

  return (
    <div className="Category flex flex-row items-center py-2.5">
      <div className="flex flex-row items-center gap-x-2 text-main-text-2 text-lg ml-2">
        <IoFilterSharp className='text-3xl' />
        <span>دسته بندی :</span>
      </div>

      <div className="flex space-x-2">
        {options.map((opt) => {
          // تعیین کلاس براساس فعال بودن
          const isActive = opt.id === active;
          const baseClasses = 'px-4 py-2 text-xs cursor-pointer rounded-md transition-colors duration-200';
          const activeClasses = 'text-primery-600';
          const inactiveClasses = 'text-main-text-3';

          return (
            <button
              key={opt.id}
              onClick={() => setActive(opt.id)}
              className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
