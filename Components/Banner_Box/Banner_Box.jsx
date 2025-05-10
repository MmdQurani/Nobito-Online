import React from 'react'

function Banner_Box() {
  return (
    <div className='Banner-Box container w-8xl mx-auto' dir='rtl'>
      <div className='w-full max-h-max grid grid-cols-12'>

        <Banner_Photo_Space src='/images/Banner/Banner-3.png' />
        
        <Banner_Photo_Space src='/images/Banner/Banner-4.png' />

      </div>
    </div>
  )
}

export function Banner_Photo_Space({ src }) {
  return (
    <div className='lg:col-span-6 col-span-12 my-4 flex justify-center items-center'>
      <div className='h-full w-9/10'>
        <img src={src} className='w-full object-cover' />
      </div>
    </div>
  )
}

export default Banner_Box