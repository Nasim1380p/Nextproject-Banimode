'use client'
import { Autoplay,Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import pic6 from './../../../../public/pic6.webp'
import pic3 from './../../../../public/pic3.webp'
import pic4 from './../../../../public/pic4.webp'


// Import Swiper styles
import 'swiper/css'
// import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
export default () => {
  return (
   <>
   <div className='w-full flex h-[400px]'>
     <Swiper
      // install Swiper modules
      modules={[Autoplay,Pagination]}
      spaceBetween={0}
      slidesPerView={1}
     loop={false}
     autoplay={{ delay:2000 }}
     pagination={{ clickable: true }}
      // navigation
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
     
      <SwiperSlide><div className='w-full h-full  rounded-2xl'><img className='w-full h-full object-cover' src='./pic6.webp' alt='discount'></img></div></SwiperSlide>
      <SwiperSlide><div className='w-full h-full  rounded-2xl'><img className='w-full object-cover h-full' src='./pic4.webp' alt='discount'></img></div></SwiperSlide>
      <SwiperSlide><div className='w-full h-full  rounded-2xl'><img className='w-full object-cover h-full' src='./pic3.webp' alt='discount'></img></div></SwiperSlide>
      
      
    </Swiper>
   </div>


  
   </>
  )
}