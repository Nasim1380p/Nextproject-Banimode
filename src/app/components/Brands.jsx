
import React from 'react'
import Sliderbrand from './myslide/Sliderbrand'

export default function Brand() {
  return (
    <section className='w-full flex justify-center flex-wrap mt-10 mb-10 md:mt-16 md:mb-16 bg-[#f9f9f9]'>
       <div className='mt-12 mb-12 w-full'>
       <h2 className='w-full text-center text-xl font-semibold md:text-2xl'>برترین برندها در بانی‌مد</h2>
       <div className='w-full flex justify-center'>
       <div className='md:w-[80%] w-[90%] flex items-center h-[140px] mt-8'>
           <Sliderbrand/>
          </div>
       </div>
       </div>
    </section>
  )
}
