import { useState } from 'react';

const genderLabels = {
  all: 'هردو',
  male: 'آقا',
  female: 'خانم',
};

export default function GenderFilter({ onChange }) {
  const [selected, setSelected] = useState('all');

  function handleClick(key) {
    setSelected(key);
    if (onChange) onChange(key);
  }

  return (
    <div className="mt-10 flex flex-row items-center justify-around">
      <span className="text-md font-medium text-main-text-2">
        جنسیت پزشک :
      </span>

      <div role="radiogroup" className="flex gap-6">
        {Object.entries(genderLabels).map(([key, label]) => {
          const isActive = selected === key;
          return (
            <button
              key={key}
              type="button"
              role="radio"
              aria-checked={isActive}
              onClick={() => handleClick(key)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ` +
                  (isActive
                    ? 'bg-primery-600 border-primery-600'
                    : 'border-gray-200')
                }
              >
                {isActive && (
                  <span className="w-2 h-2 bg-white rounded-full" />
                )}
              </span>
              <span className="text-sm text-sub-text">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
