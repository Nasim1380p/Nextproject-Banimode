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
      <div className='w-full h-[140px] hidden md:flex'>
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Navigation]}
          navigation={true}
          spaceBetween={20}
          slidesPerView={7}
          loop={false}
          autoplay={{ delay: 1500 }}
          nagination={{ clickable: true }}

          //   scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >

          <SwiperSlide><Link href='#'><div className='w-full  mb-10 '><img className='w-full  object-cover' src='./1.webp' alt='discount'></img></div></Link></SwiperSlide>
          <SwiperSlide><Link href='#'><div className='w-full  mb-10 '><img className='w-full  object-cover' src='./2.webp' alt='discount'></img></div></Link></SwiperSlide>
          <SwiperSlide><Link href='#'><div className='w-full  mb-10 '><img className='w-full  object-cover' src='./3.webp' alt='discount'></img></div></Link></SwiperSlide>
          <SwiperSlide><Link href='#'><div className='w-full  mb-10 '><img className='w-full  object-cover' src='./4.webp' alt='discount'></img></div></Link></SwiperSlide>
          <SwiperSlide><Link href='#'><div className='w-full  mb-10 '><img className='w-full  object-cover' src='./5.webp' alt='discount'></img></div></Link></SwiperSlide>
          <SwiperSlide><Link href='#'><div className='w-full  mb-10 '><img className='w-full  object-cover' src='./6.webp' alt='discount'></img></div></Link></SwiperSlide>
          <SwiperSlide><Link href='#'><div className='w-full  mb-10 '><img className='w-full  object-cover' src='./7.webp' alt='discount'></img></div></Link></SwiperSlide>
          <SwiperSlide><Link href='#'><div className='w-full  mb-10 '><img className='w-full  object-cover' src='./8.webp' alt='discount'></img></div></Link></SwiperSlide>
          <SwiperSlide><Link href='#'><div className='w-full  mb-10 '><img className='w-full  object-cover' src='./9.webp' alt='discount'></img></div></Link></SwiperSlide>
          


        </Swiper>
      </div>

       {/* in mobile m ode */}

      <div className='w-full h-[120px] md:hidden flex'>
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Navigation]}
          navigation={true}
          spaceBetween={15}
          slidesPerView={2}
          loop={false}
          autoplay={{ delay: 1500 }}
          nagination={{ clickable: true }}

          //   scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >

          <SwiperSlide><Link href='#'><div className='w-full  mb-10 '><img className='w-full  object-cover' src='./1.webp' alt='discount'></img></div></Link></SwiperSlide>
          <SwiperSlide><Link href='#'><div className='w-full  mb-10 '><img className='w-full  object-cover' src='./2.webp' alt='discount'></img></div></Link></SwiperSlide>
          <SwiperSlide><Link href='#'><div className='w-full  mb-10 '><img className='w-full  object-cover' src='./3.webp' alt='discount'></img></div></Link></SwiperSlide>
          <SwiperSlide><Link href='#'><div className='w-full  mb-10 '><img className='w-full  object-cover' src='./4.webp' alt='discount'></img></div></Link></SwiperSlide>
          <SwiperSlide><Link href='#'><div className='w-full  mb-10 '><img className='w-full  object-cover' src='./5.webp' alt='discount'></img></div></Link></SwiperSlide>
          <SwiperSlide><Link href='#'><div className='w-full  mb-10 '><img className='w-full  object-cover' src='./6.webp' alt='discount'></img></div></Link></SwiperSlide>
          <SwiperSlide><Link href='#'><div className='w-full  mb-10 '><img className='w-full  object-cover' src='./7.webp' alt='discount'></img></div></Link></SwiperSlide>
          <SwiperSlide><Link href='#'><div className='w-full  mb-10 '><img className='w-full  object-cover' src='./8.webp' alt='discount'></img></div></Link></SwiperSlide>
          <SwiperSlide><Link href='#'><div className='w-full  mb-10 '><img className='w-full  object-cover' src='./9.webp' alt='discount'></img></div></Link></SwiperSlide>
          


        </Swiper>
      </div>




    </>
  )
}