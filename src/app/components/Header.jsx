'use client'
import React from 'react'
import Image from 'next/image'
import { CiSearch } from "react-icons/ci"
import { LuSearch } from "react-icons/lu"
import { HiMenu } from "react-icons/hi"
import { TbHanger2 } from "react-icons/tb"
import { FaBicycle } from "react-icons/fa"
import { PiTShirtThin } from "react-icons/pi"
import { LuBaby } from "react-icons/lu"
import { BsStars } from "react-icons/bs"
import { FaShieldHeart } from "react-icons/fa6"
import Badge from './Badge'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='w-full flex justify-center flex-wrap font-medium'>
        <div className='w-[90%] flex flex-wrap md:mt-10 mt-3'>
            <div className='md:w-[15%] w-1/2 flex items-center'>
               <div className='mx-3'><Link href='/Cart'><Badge/></Link></div>
               <div className='w-[130px] h-[45px] text-sm md:text-md md:font-semibold cursor-pointer hover:bg-[#05ab66] bg-[#00bf6f] transition-all duration-300 rounded-3xl hidden md:flex text-white items-center justify-center'>ورود / ثبت نام</div>
               <div className='w-[10%] md:hidden rounded-r-xl text-4xl flex cursor-pointer justify-center items-center'><LuSearch/></div>

            </div>
            <div className='w-[70%] hidden md:flex items-center justify-center '>
                <div className='lg:w-[65%] md:w-[80%] bg-[#f3f3f3] rounded-xl flex h-[40px]'>
                <div className='w-[10%] rounded-r-xl text-2xl flex justify-center items-center cursor-pointer'><CiSearch/></div>
                    <input className='w-[90%] placeholder-[gray] text-sm  rounded-l-xl bg-[#f3f3f3] outline-none border-none' type="text" placeholder='جست و جو میان هزاران برند وصدها هزار کالا' />
                </div>
            </div>
            <div className='md:w-[15%] w-1/2'>
                <Link href='/'><Image width={300} height={300} src='/bonilogo.png' alt='bonimode'/></Link>
           
            </div>
        </div>
         <div className='w-[90%] hidden md:flex'>
            <nav className='w-full mt-6 mb-3'>
                <ul className='flex '>
                    <li className='flex group pb-3 items-center relative cursor-pointer before:absolute before:right-0 before:bottom-0 before:bg-[#00bf6f] before:h-[2px] before:w-0 before:hover:w-full before:transition-all before:duration-300'><HiMenu className='text-xl' /> دسته بندی کالا ها
                     <ul className='absolute  hidden group-hover:flex flex-wrap *:w-full top-[100%] *:transition-all *:duration-300 bg-white right-0 w-[150%] z-20'>
                        <li className='flex items-center p-2 bg-[#f3f3f3] hover:text-[#00bf6f]'><PiTShirtThin className='mx-1'/>مدو پوشاک</li>
                        <li className='flex items-center hover:bg-[#f3f3f3] p-2 hover:text-[#00bf6f]'><FaShieldHeart className='mx-1'/>زیبایی و سلامت</li>
                        <li className='flex items-center hover:bg-[#f3f3f3] p-2 hover:text-[#00bf6f]'><FaBicycle className='mx-1'/>ورزش و سفر</li>
                        <li className='flex items-center hover:bg-[#f3f3f3] p-2 hover:text-[#00bf6f]'>< LuBaby className='mx-1'/>کودک و سرگرمی</li>
                        <li className='flex items-center hover:bg-[#f3f3f3] p-2 hover:text-[#00bf6f]'><TbHanger2 className='mx-1'/>خانه مد</li>
                        <li className='flex items-center hover:bg-[#f3f3f3] p-2 hover:text-[#00bf6f]'><BsStars className='mx-1'/>جدیدترین ها</li>
                       
                     </ul>
                    </li>
                    <li className='mx-5 cursor-pointer'>شگفت انگیز</li>
                    <li className=' border-l-[1px] mx-3 cursor-pointer pl-4'>اوتلت</li>
                    <li className='mx-3 relative group cursor-pointer'>برندها
                    <ul className='absolute hidden group-hover:flex border-t-2 p-3 border-[#00bf6f] flex-wrap *:w-full top-[100%] *:transition-all *:duration-300 bg-white -right-[40%] w-[800%] z-20'>
                        <p className='w-full font-semibold'>برند ها</p>
                       <li className=' w-full flex items-center justify-between hover:text-[#00bf6f]'>جوتی جینز<Image src='/1.webp' width={100} height={100} alt='brand'/></li>
                       <li className=' w-full flex items-center justify-between hover:text-[#00bf6f]'>سامسونگ<Image src='/7.webp' width={100} height={100} alt='brand'/></li>
                       <li className=' w-full flex items-center justify-between hover:text-[#00bf6f]'>کوتون<Image src='/2.webp' width={100} height={100} alt='brand'/></li>
                       <li className=' w-full flex items-center justify-between hover:text-[#00bf6f]'>جین وست<Image src='/9.webp' width={100} height={100} alt='brand'/></li>
                       <li className=' w-full flex items-center justify-between hover:text-[#00bf6f]'>مارال چرم<Image src='/5.webp' width={100} height={100} alt='brand'/></li>
                       <li className=' w-full flex items-center justify-between hover:text-[#00bf6f]'>بادی اسپینر<Image src='/6.webp' width={100} height={100} alt='brand'/></li>
                       <li className=' w-full flex items-center justify-between hover:text-[#00bf6f]'>چرم مشهد<Image src='/8.webp' width={100} height={100} alt='brand'/></li>
                       <li className=' w-full flex items-center justify-between hover:text-[#00bf6f]'>سارک<Image src='/3.webp' width={100} height={100} alt='brand'/></li>

                       <li></li>
                     </ul>
                    </li>
                    <li className='mx-3 cursor-pointer'>کارت هدیه</li>
                    <li className='mx-3 cursor-pointer'>بانی مگ</li>
                </ul>
            </nav>
         </div>
    </header>
  )
}



