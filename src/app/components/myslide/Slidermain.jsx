'use client'
import { Autoplay,Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
// import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
export default () => {
  return (
   <>
   <div className='w-full flex h-[350px]'>
     <Swiper
      // install Swiper modules
      modules={[Autoplay,Pagination]}
      spaceBetween={0}
      slidesPerView={1}
     loop={false}
     autoplay={{ delay:1500 }}
     pagination={{ clickable: true }}
      // navigation
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
     
      <SwiperSlide><div className='w-full h-full  '><img className='w-full h-full object-cover' src='./pic4.webp' alt='discount'></img></div></SwiperSlide>
      <SwiperSlide><div className='w-full h-full  '><img className='w-full h-full object-cover' src='./pic2.webp' alt='discount'></img></div></SwiperSlide>
      <SwiperSlide><div className='w-full h-full  '><img className='w-full object-cover h-full' src='./pic6.webp' alt='discount'></img></div></SwiperSlide>
      <SwiperSlide><div className='w-full h-full '><img className='w-full h-full object-cover' src='./pic11.webp' alt='discount'></img></div></SwiperSlide>
      <SwiperSlide><div className='w-full h-full '><img className='w-full object-cover h-full' src='./pic1.webp' alt='discount'></img></div></SwiperSlide>
      <SwiperSlide><div className='w-full h-full '><img className='w-full object-cover h-full' src='./pic0.webp' alt='discount'></img></div></SwiperSlide>
      
      
    </Swiper>
   </div>


  
   </>
  )
}