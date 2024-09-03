'use client'
import React from 'react'
import { BsPlusSquare } from "react-icons/bs";
import { BsDashSquare } from "react-icons/bs";
import { ImDropbox } from "react-icons/im";
import useCart from '../store/store';
export default function page() {
  const cart = useCart((state) => state.cart)
  const pluscart=useCart((state)=>state.pluscart)
  const minezcart=useCart((state)=>state.minezcart)
  const sumtotal=cart.reduce((prevalue,nextvalue)=>{
    return prevalue + (nextvalue.price) *(nextvalue.count)
  },0)
  return (
     <>
     {cart.length === 0 ?(
      <section className='w-full mt-10 mb-10 flex justify-center font-myfont'>
      <div className='w-[80%] flex justify-center flex-wrap mt-16 mb-14'>
          <div className='w-[160px] h-[160px] bg-[#fafafa] rounded-full text-[#b9b7b7] flex justify-center items-center'>< ImDropbox className='text-6xl'/></div>
          <h5 className='w-full text-[#9d9b9b] text-center mt-7'>سبد خرید شما خالی است .</h5>
      </div>
    </section>
     ) :(
      <section className='w-full flex justify-center'>
     <div className='md:w-[90%] w-[100%] flex flex-wrap mt-16 mb-12'>
       <div className='w-full h-[60px] flex justify-center  items-center bg-[#fafafa]'>
        <div className='w-[42%] text-[#948e8e] text-sm md:text-lg px-4'>سبد خرید شما</div>
        <div className='w-[24%] text-[#948e8e] text-sm md:text-lg flex justify-center'>قیمت واحد</div>
        <div className='w-[14%] text-[#948e8e] text-sm md:text-lg flex justify-center'>تعداد</div>
        <div className='w-[20%] text-[#948e8e] text-sm md:text-lg flex justify-center'>مبلغ کل</div>
       </div>

       {/* map/////// */}
       {cart.map((item)=>{
         return(
          <div className='w-full flex *:mt-2 *:mb-2 font-myfont border-b-[1px] border-[#f3f0f0]' key={item.id}>
         <div className='w-[42%] flex items-center text-sm md:text-md'>
           <div className='md:w-[28%] w-[45%] md:p-2'><img className='rounded-md' src={item.avatar} alt="" /></div>
           <div className='md:w-[72%] w-[55%] md:p-4 p-1'>
            <h2 className='text-sm md:text-lg mt-3 font-semibold'>{item.title}</h2>
            <p className='mt-3 text-sm md:text-md'>{item.name}</p>
            <p className='text-[#808080] mt-2 text-sm md:text-md hidden md:flex'>کد محصول :<span className='text-black text-sm md:text-md'>{item.id}</span></p>
           </div>
         </div>

         <div className='w-[24%] flex flex-wrap text-sm md:text-md'>
           <s className='text-[#abaaaa] w-full flex justify-center text-sm items-center'>{item.previuosprice} تومان</s>
           <div className='md:flex w-full justify-center '>
           <p className='text-[#f37a23] text-center mx-2 text-sm md:text-md'>{item.discount} تخفیف</p>
            <p className='text-[#f37a23] text-center text-sm md:text-md'>{item.price} تومان</p>
            
           </div>
         </div>
         <div className='w-[14%] text-sm md:text-md flex items-center justify-center'>
          < BsPlusSquare onClick={() => pluscart(item.id)} className='md:text-2xl text-[#abaaaa] cursor-pointer'/>
           <span className='mx-2 md:text-xl'>{item.count}</span>
           <BsDashSquare onClick={() => minezcart(item.id)} className='md:text-2xl text-[#abaaaa] cursor-pointer'/>
         </div>
         <div className='w-[20%] text-sm md:text-md items-center flex justify-center text-[#00bf6f]'>{item.count * item.price} تومان</div>
       </div>
         )
       })}
       

       {/* map//// */}
       <div className='w-full flex justify-center'>
        <div className='w-[70%] md:w-[50%] lg:w-[40%] rounded-sm xl:w-[30%] mt-8  text-[#abaaaa] h-[60px] bg-[#fafafa] flex justify-center items-center'>مبلغ قابل پرداخت :<span className='mx-1'>{sumtotal} تومان</span></div>
       </div>
       <div className='w-full flex justify-center'>
        <div className='w-[120px] cursor-pointer rounded-md mt-10 transition-all duration-300 hover:bg-[#07b16a] text-white h-[47px] bg-[#00bf6f] flex justify-center items-center'>ثبت خرید</div>
       </div>
     </div>
    </section>
     )}




     </>

    


    
  )
}
