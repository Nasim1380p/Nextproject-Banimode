'use client'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'

import './style.css'
import 'swiper/css'
import 'swiper/css/navigation'
// import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
export default () => {
  return (
    <>
      <div className='w-full h-[300px] hidden md:flex'>
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Navigation]}
          navigation={true}
          spaceBetween={25}
          slidesPerView={4}
          loop={false}
          autoplay={{ delay: 2000 }}
          nagination={{ clickable: true }}

          //   scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >

          <SwiperSlide>
            <Link href='#'>
            <div className='w-full h-full  mb-4 rounded-md '>
                <img className='w-full  rounded-md object-cover' src='./new1.webp' alt='discount'></img>
                <p className='text-md md:text-sm animate-pulse px-1 text-[#00bf6f] mt-3'>راهنمای خرید هارد اکسترنال و ویژگی های هر کدام</p>
            </div>
            </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link href='#'>
            <div className='w-full h-full  mb-4 rounded-md '>
                <img className='w-full  rounded-md object-cover' src='./new7.webp' alt='discount'></img>
                <p className='text-md md:text-sm animate-pulse px-1 text-[#00bf6f] mt-3'>آیا واقعا عطر جدایی می آورد ؟</p>
            </div>
            </Link>
            </SwiperSlide>
           
            
            <SwiperSlide>
            <Link href='#'>
            <div className='w-full h-full  mb-4 rounded-md '>
                <img className='w-full  rounded-md object-cover' src='./new0.webp' alt='discount'></img>
                <p className='text-md md:text-sm animate-pulse px-1 text-[#00bf6f] mt-3'>پارچه کتان چیست ؟ تاریخچه و ویژگی آن</p>
            </div>
            </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link href='#'>
            <div className='w-full h-full  mb-4 rounded-md '>
                <img className='w-full  rounded-md object-cover' src='./new4.webp' alt='discount'></img>
                <p className='text-md md:text-sm animate-pulse px-1 text-[#00bf6f] mt-3'>چند نکته برای ست کردن تیشرت اورسایز</p>
            </div>
            </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link href='#'>
            <div className='w-full h-full  mb-4 rounded-md '>
                <img className='w-full  rounded-md object-cover' src='./new5.webp' alt='discount'></img>
                <p className='text-md md:text-sm animate-pulse px-1 text-[#00bf6f] mt-3'>استایل کلاسیک و تفاوت آن با سایر سبک ها</p>
            </div>
            </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link href='#'>
            <div className='w-full h-full  mb-4 rounded-md '>
                <img className='w-full  rounded-md object-cover' src='./new9.webp' alt='discount'></img>
                <p className='text-md md:text-sm animate-pulse px-1 text-[#00bf6f] mt-3'>بهترین وسیله ها برای ورزش در خانه</p>
            </div>
            </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link href='#'>
            <div className='w-full h-full  mb-4 rounded-md '>
                <img className='w-full  rounded-md object-cover' src='./new3.webp' alt='discount'></img>
                <p className='text-md md:text-sm animate-pulse px-1 text-[#00bf6f] mt-3'>نحوه تمیز کردن کتونی پارچه ای</p>
            </div>
            </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link href='#'>
            <div className='w-full h-full  mb-4 rounded-md '>
                <img className='w-full  rounded-md object-cover' src='./new8.webp' alt='discount'></img>
                <p className='text-md md:text-sm animate-pulse px-1 text-[#00bf6f] mt-3'>دکانت عطر چیست ؟ همه چیز درباره دکانتینگ عطر</p>
            </div>
            </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link href='#'>
            <div className='w-full h-full  mb-4 rounded-md '>
                <img className='w-full  rounded-md object-cover' src='./new2.webp' alt='discount'></img>
                <p className='text-md md:text-sm animate-pulse px-1 text-[#00bf6f] mt-3'>راهنمای خرید بهترین گوشی شیائومی</p>
            </div>
            </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link href='#'>
            <div className='w-full h-full  mb-4 rounded-md '>
                <img className='w-full  rounded-md object-cover' src='./new6.webp' alt='discount'></img>
                <p className='text-md md:text-sm animate-pulse px-1 text-[#00bf6f] mt-3'>افترشیو چیست ؟ وانواع آن کدام اند ؟</p>
            </div>
            </Link>
            </SwiperSlide>
          
         
          


        </Swiper>
      </div>

       {/* in mobile m ode */}
       <div className='w-full h-[350px] flex md:hidden'>
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Navigation]}
          navigation={true}
          spaceBetween={25}
          slidesPerView={1}
          loop={false}
          autoplay={{ delay: 2000 }}
          nagination={{ clickable: true }}

          //   scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >

          <SwiperSlide>
            <Link href='#'>
            <div className='w-full h-full  mb-4 rounded-md '>
                <img className='w-full  rounded-md object-cover' src='./new1.webp' alt='discount'></img>
                <p className='text-md md:text-sm animate-pulse px-1 text-[#00bf6f] mt-3'>راهنمای خرید هارد اکسترنال و ویژگی های هر کدام</p>
            </div>
            </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link href='#'>
            <div className='w-full h-full  mb-4 rounded-md '>
                <img className='w-full  rounded-md object-cover' src='./new7.webp' alt='discount'></img>
                <p className='text-md md:text-sm animate-pulse px-1 text-[#00bf6f] mt-3'>آیا واقعا عطر جدایی می آورد ؟</p>
            </div>
            </Link>
            </SwiperSlide>
           
            
            <SwiperSlide>
            <Link href='#'>
            <div className='w-full h-full  mb-4 rounded-md '>
                <img className='w-full  rounded-md object-cover' src='./new0.webp' alt='discount'></img>
                <p className='text-md md:text-sm animate-pulse px-1 text-[#00bf6f] mt-3'>پارچه کتان چیست ؟ تاریخچه و ویژگی آن</p>
            </div>
            </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link href='#'>
            <div className='w-full h-full  mb-4 rounded-md '>
                <img className='w-full  rounded-md object-cover' src='./new4.webp' alt='discount'></img>
                <p className='text-md md:text-sm animate-pulse px-1 text-[#00bf6f] mt-3'>چند نکته برای ست کردن تیشرت اورسایز</p>
            </div>
            </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link href='#'>
            <div className='w-full h-full  mb-4 rounded-md '>
                <img className='w-full  rounded-md object-cover' src='./new5.webp' alt='discount'></img>
                <p className='text-md md:text-sm animate-pulse px-1 text-[#00bf6f] mt-3'>استایل کلاسیک و تفاوت آن با سایر سبک ها</p>
            </div>
            </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link href='#'>
            <div className='w-full h-full  mb-4 rounded-md '>
                <img className='w-full  rounded-md object-cover' src='./new9.webp' alt='discount'></img>
                <p className='text-md md:text-sm animate-pulse px-1 text-[#00bf6f] mt-3'>بهترین وسیله ها برای ورزش در خانه</p>
            </div>
            </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link href='#'>
            <div className='w-full h-full  mb-4 rounded-md '>
                <img className='w-full  rounded-md object-cover' src='./new3.webp' alt='discount'></img>
                <p className='text-md md:text-sm animate-pulse px-1 text-[#00bf6f] mt-3'>نحوه تمیز کردن کتونی پارچه ای</p>
            </div>
            </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link href='#'>
            <div className='w-full h-full  mb-4 rounded-md '>
                <img className='w-full  rounded-md object-cover' src='./new8.webp' alt='discount'></img>
                <p className='text-md md:text-sm animate-pulse px-1 text-[#00bf6f] mt-3'>دکانت عطر چیست ؟ همه چیز درباره دکانتینگ عطر</p>
            </div>
            </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link href='#'>
            <div className='w-full h-full  mb-4 rounded-md '>
                <img className='w-full  rounded-md object-cover' src='./new2.webp' alt='discount'></img>
                <p className='text-md md:text-sm animate-pulse px-1 text-[#00bf6f] mt-3'>راهنمای خرید بهترین گوشی شیائومی</p>
            </div>
            </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link href='#'>
            <div className='w-full h-full  mb-4 rounded-md '>
                <img className='w-full  rounded-md object-cover' src='./new6.webp' alt='discount'></img>
                <p className='text-md md:text-sm animate-pulse px-1 text-[#00bf6f] mt-3'>افترشیو چیست ؟ وانواع آن کدام اند ؟</p>
            </div>
            </Link>
            </SwiperSlide>
          
         
          


        </Swiper>
      </div>
      




    </>
  )
}