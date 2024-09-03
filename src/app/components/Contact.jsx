import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
export default function Contact() {
  return (
    <section className='w-full flex justify-center mt-10 mb-20 md:h-[260px] h-[240px]'>
        <div className='md:w-[90%] relative w-full bg-[#f8f8f8] bg-no-repeat bg-back'>
              <h1 className='mt-16 text-lg text-center lg:text-3xl font-medium md:text-2xl '>ثبت نام در خبرنامه بانی‌مد</h1>
              <p className='mt-3 md:mb-10 mb-4 text-center text-sm md:text-lg text-[#616161]'>اولین نفری باشید که از جدیدترین محصولات، جشنواره ها و فروش‌های ویژه ما مطلع می شوید .</p>
              <div className='w-full flex justify-center '>
                 <div className='w-[95%] absolute -bottom-12  flex flex-wrap justify-around items-center md:w-[50%] h-[90px] rounded-full bg-white'>
                    <input className='md:w-[70%] w-[70%] outline-none md:h-[55px] h-[48px] px-6 placeholder-[#8b8a8a] rounded-full bg-[#f0ecec]' type="text" placeholder='آدرس ایمیل شما'/>
                    <div className='md:w-[20%] hover:bg-[#04ad66] cursor-pointer transition-all duration-300 w-[22%] md:h-[55px] h-[48px] rounded-full text-white bg-[#00bf6f] flex justify-center items-center'>ارسال < FaArrowLeft className='text-sm md:text-xl md:mx-3' /></div>
                 </div>
              </div>
        </div>
    </section>
  )
}
