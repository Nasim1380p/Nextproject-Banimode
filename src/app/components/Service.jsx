import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Service() {
  return (
    <section className='w-full flex flex-wrap justify-center mt-20 mb-20'>
      <div className='w-[90%] flex flex-wrap justify-center '>
        <div className='w-full sm:w-1/2 lg:w-1/4 p-4  flex justify-center'>
            <Link href='/Shopingservices'>
            <div className='flex justify-center items-center w-[270px] h-[270px] bg-[#f1fff9] hover:bg-[#ebfff6] rounded-full transition-all duration-300'>
            <div className='w-[240px] h-[240px] bg-white rounded-full'>
            <div className='flex justify-center'><Image src='/icon3.jpg' width={100} height={100} alt='icon'/></div>
               <h3 className='font-semibold text-center text-lg text-[#6c6b6b]'>خدمات پس از خرید</h3>
               <p className='text-sm text-center text-[#9a9999] mt-1'>میزبان صدای گرمتان هستیم.هدف تیم پشتیبانی ارائه خدمات به مشتریان میباشد.</p>
               <p className='text-sm text-center text-[#00bf6f]'>بیشتر بدانید...</p>
              </div>
            </div>
            </Link>
        </div>
        <div className='w-full sm:w-1/2 lg:w-1/4 p-4  flex justify-center'>
        <Link href='/returnproduct'>
            <div className='flex justify-center items-center w-[270px] h-[270px] bg-[#f1fff9] hover:bg-[#ebfff6] rounded-full transition-all duration-300'>
            <div className='w-[240px] h-[240px] bg-white rounded-full'>
            <div className='flex justify-center'><Image src='/icon1.jpg' width={100} height={100} alt='icon'/></div>
               <h3 className='font-semibold text-center text-lg text-[#6c6b6b]'>ضمانت بازگشت کالا</h3>
               <p className='text-sm text-center text-[#9a9999] mt-1'>تا 7 روز برای اجترام به مشتریان کالای خریداری شده برگردانده می شود.</p>
               <p className='text-sm text-center text-[#00bf6f] mt-6'>بیشتر بدانید...</p>
              </div>
            </div>
            </Link>
        </div>
        <div className='w-full sm:w-1/2 lg:w-1/4 p-4  flex justify-center'>
        <Link href='/orginalityproduct'>
            <div className='flex justify-center items-center w-[270px] h-[270px] bg-[#f1fff9] hover:bg-[#ebfff6] rounded-full transition-all duration-300'>
            <div className='w-[240px] h-[240px] bg-white rounded-full'>
               <div className='flex justify-center'><Image src='/icon3.jpg' width={100} height={100} alt='icon'/></div>
               <h3 className='font-semibold text-center text-lg text-[#6c6b6b]'>ضمانت اصالت کالا</h3>
               <p className='text-sm text-center text-[#9a9999] mt-1'>تمامی کالا ها  اورجینالو با ضمانت اصل بودن از نمایندگی تهیه . ارائه می شوند.</p>
               <p className='text-sm text-center text-[#00bf6f] mt-4'>بیشتر بدانید...</p>
              </div>
            </div>
            </Link>
        </div>
        <div className='w-full sm:w-1/2 lg:w-1/4 p-4  flex justify-center'>
        <Link href='/sendproduct'>
            <div className='flex justify-center items-center w-[270px] h-[270px] bg-[#f1fff9] hover:bg-[#ebfff6] rounded-full transition-all duration-300'>
            <div className='w-[240px] h-[240px] bg-white rounded-full'>
               <div className='flex justify-center'><Image src='/icon4.jpg' width={100} height={100} alt='icon'/></div>
               <h3 className='font-semibold text-center text-lg text-[#6c6b6b]'>ارسال سریع و رایگان</h3>
               <p className='text-sm text-center text-[#9a9999] mt-1'>ارسال رایگان برای خرید های بالای 2 میلیون تومان به سریع ترین شکل ممکن می باشد.</p>
               <p className='text-sm text-center text-[#00bf6f] mt-4'>بیشتر بدانید...</p>
              </div>
            </div>
            </Link>
        </div>
      </div>
    </section>
  )
}
