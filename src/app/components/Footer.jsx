import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { GiBeachBag } from "react-icons/gi";
import { TfiAndroid } from "react-icons/tfi";
export default function Footer() {
  return (
    <section className='w-full flex flex-wrap justify-center mt-16 mb-10 font-fontcapital'>
        <div className='w-[90%] flex flex-wrap border-t-[1px] mt-10 *:mt-5 border-t-[#ebe7e7]'>
            <div className=' hidden md:flex md:w-1/2  lg:w-1/3  xl:w-1/5'>
                <ul className='w-full mt-10'>
                    <h6 className='text-[#8f8f8f] text-lg'>خرید از بانی‌مد</h6>
                    <li className='mt-5 hover:text-[#00bf6f] transition-all duration-300 text-[#454444] cursor-pointer'>لباس مردانه</li>
                    <li className='hover:text-[#00bf6f] transition-all duration-300 mt-3  text-[#454444] cursor-pointer'>لباس زنانه</li>
                    <li className='hover:text-[#00bf6f] transition-all duration-300 mt-3  text-[#454444] cursor-pointer'>لوازم خانه با کیفیت</li>
                    <li className='hover:text-[#00bf6f] transition-all duration-300 mt-3  text-[#454444] cursor-pointer'>کیف و کفش برند</li>
                </ul>
            </div>
            <div className=' hidden md:flex md:w-1/2  lg:w-1/3  xl:w-1/5'>
            <ul className='w-full mt-10'>
                    <h6 className='text-[#a3a1a1] text-lg'>خدمات مشتریان</h6>
                    <li className='mt-5 hover:text-[#00bf6f] transition-all duration-300  text-[#454444] cursor-pointer'>پرسش های متداول</li>
                    <li className='hover:text-[#00bf6f] transition-all duration-300 mt-3  text-[#454444] cursor-pointer'>شرایط بازگشت</li>
                    <li className='hover:text-[#00bf6f] transition-all duration-300 mt-3  text-[#454444] cursor-pointer'>راهنمای خرید</li>
                    <li className='hover:text-[#00bf6f] transition-all duration-300 mt-3  text-[#454444] cursor-pointer'>فروش B2B</li>
                   
                </ul>
            </div>
            <div className=' hidden md:flex md:w-1/2  lg:w-1/3  xl:w-1/5'>
            <ul className='w-full mt-10'>
                    <h6 className='text-[#8f8f8f] text-lg'>اطلاعات بانی مد</h6>
                    <li className='mt-5 hover:text-[#00bf6f] transition-all duration-300  text-[#454444] cursor-pointer'>درباره ما</li>
                    <li className='hover:text-[#00bf6f] transition-all duration-300 mt-3  text-[#454444] cursor-pointer'>قوانین و مقررات</li>
                    <li className='hover:text-[#00bf6f] transition-all duration-300 mt-3  text-[#454444] cursor-pointer'>تماس با ما</li>
                    <li className='hover:text-[#00bf6f] transition-all duration-300 mt-3  text-[#454444] cursor-pointer'>فرصت های شغلی</li>
                   
                </ul>
            </div>
            <div className=' w-full md:w-1/2  lg:w-1/3  xl:w-1/5'>
                <ul className='w-full mt-10'>
                    <h6 className='text-[#8f8f8f] text-lg'>منتظر شنیدن صدای گرمتیم</h6>
                    <p className='text-[#8f8f8f] text-sm mt-2'>7 روز هفته - 24 ساعته</p>
                    <li className='mt-3 flex items-center text-[#8f8f8f]'>تلفن : <span className='cursor-pointer hover:text-[#00bf6f] text-[#454444] transition-all duration-300'>021-49215</span></li>
                    <li className='mt-3 flex items-center text-[#8f8f8f]'>پیامک :  <span className='cursor-pointer hover:text-[#00bf6f] transition-all text-[#454444] duration-300'>10001654</span></li>
                    <li className='mt-3 flex items-center text-[#8f8f8f]'>ایمیل :  <span className='cursor-pointer hover:text-[#00bf6f] transition-all text-[#454444] duration-300'>customer@banimode.com</span></li>
                    <li className='mt-4 cursor-pointer'><Image src='/logofooter.png' width={150} height={150} alt='footerlogo'/></li>
                    
                </ul>
            </div>
            <div className=' w-full md:w-1/2  lg:w-1/3 xl:w-1/5'>
                <ul className='w-full flex flex-wrap md:justify-end mt-10 '>
                    <li className='md:w-[84%] w-[55%] cursor-pointer'><Image src='/bonilogo.png' width={250} height={250} alt='banimodelogo'/></li>
                    <li className='md:w-[90%] w-[70%] h-[55px] rounded-xl mt-7 bg-[#02b168] text-white border cursor-pointer flex justify-center items-center'>دریافت اپلیکیشن از <GiBeachBag className='m-1 font-bold text-xl'/> <span className='font-bold text-lg'>بازار</span></li>
                    <li className='md:w-[90%] w-[70%] border-[1px] mt-2 h-[55px] rounded-xl border-black cursor-pointer flex justify-center items-center'>دریافت اپلیکیشن از <span className='text-lg font-medium'>سیب اپ</span></li>
                    <li className='md:w-[90%] w-[70%] h-[55px] mt-2 rounded-xl border-[1px] border-[#00bf6f] text-[#00bf6f] cursor-pointer flex justify-center items-center'><TfiAndroid className='md:mx-2 mx-1 text-xl'/> دانلود اپلیکیشن</li>
                </ul>
            </div>
          
        </div>
        <div className='w-full flex justify-center mt-10 md:mt-14'>
            <div className='w-[90%] border-t-[#ebe7e7] border-t-[1px]'>
               <h5 className='text-center mt-5'>توسعه دهنده :<Link className=' animate-pulse text-[#05ba6f] ' href='https://github.com/Nasim1380p'> نسیم پیرقوللو</Link></h5>
            </div>
        </div>
    </section>
  )
}
