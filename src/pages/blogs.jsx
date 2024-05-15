import React from 'react'
import PageHeader from '../component/page-header'
import sampleImage from '../assets/smaple-image.svg'
import { useNavigate } from 'react-router-dom'
import BottomContent from '../component/bottom-content'
export default function BlogPage() {
  var navigator = useNavigate()
  return (
    <>
      <div className='overflow-hidden'>
        <div className='container-center'>
          <section className='relative'>
            <div className='absolute left-0 top-[40%] -translate-x-1/2 bg-blue-500 size-[450px] rounded-full opacity-20 -z-10 blur-[132px]' />
            <div className='absolute right-0 top-[40%] -translate-y-0 bg-blue-500 size-[450px] rounded-full opacity-20 -z-10 blur-[132px]' />

            <PageHeader title='Read our latest blogs' />
            <div className='border rounded-2xl my-20 grid sm:grid-cols-4 gap-4 sm:p-10 p-5'>
              <div className='sm:col-span-2 flex gap-5 flex-col sm:order-1 order-2'>
                <p>Trending Post</p>
                <p className='font-bold sm:text-3xl text-xl'>New invoicing features to help you get paid faster</p>
                <p className='text-[#6D6E76] text-[13px]'>Over the past few months, we’ve added several new features to SaaS Invoicing to help any business get paid faster and streamline their collection workflows.</p>
                <p className='text-sm'>Luke Matthews l  November 8, 2021</p>
              </div>
              <div className=' block sm:col-span-2 sm:order-2 order-1'>
                <img src={sampleImage} alt='text tag' className='aspect-[16/8]  h-full w-full object-cover rounded-xl' />
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className='container-center'>
        <section className='my-20'>
          <p className='block mx-auto text-4xl font-[650] text-center my-10'>All posts</p>
          <div className='grid lg:grid-cols-3 xsm:grid-cols-2 gap-x-5 gap-y-8 sm:px-0 px-10'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div key={item} className='flex flex-col gap-3' onClick={(e) => {
                navigator(`${item}`);
              }}>
                <img src={sampleImage} className='aspect-[16/8] object-cover rounded-xl w-full' />
                <p className='text-lg font-semibold'>7 Automation use cases that foster excellent CX</p>
                <p className='text-[#6D6E76] text-[13px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <p className='text-[#6D6E76] text-[13px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <p className='text-sm'>Luke Matthews l  November 8, 2021</p>
              </div>)
            )}
          </div>
        </section>
        <BottomContent/>

      </div>
    </>
  )
}
