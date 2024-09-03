import React from 'react'
import Sliderbest from './myslide/Sliderbest'

export default function Bestproduct() {
  return (
    <section className='w-full flex flex-wrap justify-center mt-20 '>
        <h1 className='w-full text-2xl md:text-3xl font-semibold text-center'>پر فروش ترین محصولات</h1>
      <div className='w-[90%] mt-16'>
          <div className='w-full h-[400px] flex justify-center'>
           <Sliderbest/>
          </div>
       </div>
    </section>
  )
}
