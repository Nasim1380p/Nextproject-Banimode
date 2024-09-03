
import React from 'react'
import Slidetopright from './myslide/Slidetopright'
import Slidertopleft from './myslide/Slidertopleft'
import Sliderdwonright from './myslide/Sliderdwonright'
import Sliderdownleft from './myslide/Sliderdownleft'
import Slidermain from './myslide/Slidermain'
export default function Body() {
  return (
    <section className='w-full flex justify-center mt-5 md:mt-1'>
     <div className='w-[90%] md:flex hidden flex-wrap '>
      <div className='w-[65%] p-4'>
        <div className='w-full  rounded-2xl overflow-hidden'>
          <Sliderdownleft/>
        </div>
      </div>
      <div className='w-[35%] p-4'>
        <div className='w-full  rounded-2xl overflow-hidden'>
            <Slidertopleft className='w-full'/>
        </div>
      </div>
      <div className='w-[35%] p-4'>
      <div className='w-full  rounded-2xl overflow-hidden'>
            <Sliderdwonright className='w-full'/>
        </div>
      </div>
      <div className='w-[65%] p-4'>
      <div className='w-full  rounded-2xl overflow-hidden'>
            <Slidetopright className='w-full'/>
        </div>
      </div>
     </div>
     <div className='w-[100%] flex md:hidden'>
        <Slidermain/>
     </div>
    </section>
  )
}
