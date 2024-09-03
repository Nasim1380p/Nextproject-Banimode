'use client'
import { Autoplay,Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import './style.css'
import 'swiper/css'
import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import 'swiper/css/scrollbar'
import useFetch from '../useFetch'
import useCart from './../../store/store'
import { FaCartPlus } from "react-icons/fa";
export default () => {
    const data=useFetch('https://6692237126c2a69f6e91a3ae.mockapi.io/bonimode-wonderfull')
    const addToCart = useCart((state) => state.addToCart)
    
  return (
   <>
   <div className='w-full hidden flex-wrap md:flex h-[400px]'>
     <Swiper
      // install Swiper modules
      modules={[Autoplay,Navigation]}
      navigation={true}
      spaceBetween={40}
      slidesPerView={4}
     loop={false}
     autoplay={{ delay:3000 }}
    //  pagination={{ clickable: true }}
     nagination={{ clickable: true }}
     
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
     {data.map((val)=>{
      const item={
        id:val.id,
        title:val.title,
        name:val.name,
        price:val.price,
        avatar:val.avatar,
        backavatar:val.backavatar,
        previuosprice:val.previuosprice,
        discount:val.discount,
        count:1
      }
        return(
            <SwiperSlide className='w-full h-full flex'>
            <div className='flex flex-wrap h-[100%] rounded-t-xl'>
                <div className='w-full bg-[#c5c7cb] h-[85%] rounded-t-xl group transition-all duration-300' key={val.id}>
                  <img className='absolute rounded-t-xl w-full h-[87%] object-cover top-0 left-0 group-hover:z-10' src={val.backavatar} alt="product" />
                  <img className='absolute rounded-t-xl w-full h-[87%] top-0 left-0 object-cover' src={val.avatar} alt="product" />
                  <div className='absolute top-5 left-5 z-20'>
                    <div className='w-[45px] font-semibold h-[45px] bg-[#f16422] rounded-full flex justify-center items-center text-white'>{val.discount}</div>
                  </div>
                 <Link onClick={() => addToCart(item)} href='./Cart'>
                   <div className='absolute bottom-16 right-4 z-20 rounded-sm '>
                    <div className=' w-[50px] h-[50px] flex justify-center rounded-full items-center font-semibold text-white bg-[#00bf6f] text-xl'><FaCartPlus/></div>
                   </div>
                 </Link>
                </div>
                <div className='flex flex-wrap h-[15%] w-full p-2'>
                    <p className='font-semibold w-1/2'>{val.title}</p>
                    <s className='w-1/2 text-[#adaaaad1] text-left'>{val.previuosprice}تومان</s>
                    <h2 className='w-1/2 text-[#666]'>{val.name}تومان</h2>
                    <p className='w-1/2 text-[#00bf6f] text-left'>{val.price}تومان</p>
    
                </div>
    
            </div>
            </SwiperSlide>
        )
     })}
     
    </Swiper>
   </div>

   {/* mobile mode  */}

   <div className='w-[80%] flex flex-wrap md:hidden h-[400px]'>
     <Swiper
      // install Swiper modules
      modules={[Autoplay,Navigation]}
      navigation={true}
      spaceBetween={40}
      slidesPerView={1}
     loop={false}
     autoplay={{ delay:3000 }}
    //  pagination={{ clickable: true }}
     nagination={{ clickable: true }}
     
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
     {data.map((val)=>{
      const item={
        id:val.id,
        title:val.title,
        name:val.name,
        price:val.price,
        avatar:val.avatar,
        backavatar:val.backavatar,
        previuosprice:val.previuosprice,
        discount:val.discount,
        count:1
      }
        return(
            <SwiperSlide className='w-full h-full flex'>
            <div className='flex flex-wrap h-[100%] rounded-t-xl'>
                <div className='w-full bg-[#c5c7cb] h-[85%] rounded-t-xl group transition-all duration-300' key={val.id}>
                  <img className='absolute rounded-t-xl w-full h-[87%] object-cover top-0 left-0 group-hover:z-10' src={val.backavatar} alt="product" />
                  <img className='absolute rounded-t-xl w-full h-[87%] top-0 left-0 object-cover' src={val.avatar} alt="product" />
                  <div className='absolute top-5 left-5 z-20'>
                    <div className='w-[45px] font-semibold h-[45px] bg-[#f16422] rounded-full flex justify-center items-center text-white'>{val.discount}</div>
                  </div>
                 <Link onClick={() => addToCart(item)} href='./Cart'>
                   <div className='absolute bottom-16 right-4 z-20 rounded-sm '>
                    <div className=' w-[50px] h-[50px] flex justify-center rounded-full items-center font-semibold text-white bg-[#00bf6f] text-xl'><FaCartPlus/></div>
                   </div>
                 </Link>
                </div>
                <div className='flex flex-wrap h-[15%] w-full p-2'>
                    <p className='font-semibold w-1/2'>{val.title}</p>
                    <s className='w-1/2 text-[#adaaaad1] text-left'>{val.previuosprice}تومان</s>
                    <h2 className='w-1/2 text-[#666]'>{val.name}</h2>
                    <p className='w-1/2 text-[#00bf6f] text-left'>{val.price}تومان</p>
    
                </div>
    
            </div>
            </SwiperSlide>
        )
     })}
     
    </Swiper>
   </div>


  
   </>
  )
}