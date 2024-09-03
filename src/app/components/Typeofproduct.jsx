import React from 'react'
import Image from 'next/image'
export default function Typeofproduct() {
  return (
    <section className='w-full flex justify-center mt-24'>
      <div className='w-[80%] flex flex-wrap *:mt-4 *:cursor-pointer'>
        <div className='w-full md:w-1/3 flex justify-center rounded-t-xl items-center overflow-hidden'>
        <Image className='w-[80%] hover:scale-[1.05] rounded-t-xl transition-all duration-300' src='/a.webp' width={400} height={200} alt='productType'/>
        </div>
        <div className='w-full md:w-1/3 flex justify-center rounded-t-xl items-center overflow-hidden'>
        <Image className='w-[80%] hover:scale-[1.05] rounded-t-xl transition-all duration-300' src='/b.png' width={400} height={200} alt='productType'/>
        </div>
        <div className='w-full md:w-1/3 flex justify-center rounded-t-xl items-center overflow-hidden'>
        <Image className='w-[80%] hover:scale-[1.05] rounded-t-xl transition-all duration-300' src='/c.png' width={400} height={200} alt='productType'/>
        </div>
      </div>
    </section>
  )
}
