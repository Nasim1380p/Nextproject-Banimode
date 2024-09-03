import React from 'react'
import Image from 'next/image'
import Sliderwonderfull from './myslide/Sliderwonderfull'
export default function Wonderproduct() {
  return (
    <section className='w-full flex flex-wrap justify-center mt-10'>
       <div className='w-[90%] md:flex hidden'><Image width={300} height={300} alt='wonderproduct' src='/wonderfull.webp'/></div>
       <div className='w-[90%] flex md:hidden'><Image width={200} height={200} alt='wonderproduct' src='/wonderfull.webp'/></div>
       <div className='w-[90%] mt-10'>
          <div className='w-full h-[400px] flex justify-center'>
            <Sliderwonderfull/>
          </div>
       </div>
    </section>
  )
}
