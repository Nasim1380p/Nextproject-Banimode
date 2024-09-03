import React from 'react'
import Slidernew from './myslide/Slidernew'

export default function Newimformation() {
  return (
    <section className='w-full flex justify-center mt-10 mb-10'>
      <div className='w-[80%] md:w-[90%]'>
        <h1 className='w-full text-lg md:text-2xl font-bold text-center'>جدیدترینِ بانی مگ</h1>
        <div className='w-full mt-12 h-[300px]'>
         <Slidernew/>
        </div>
      </div>
    </section>
  )
}
