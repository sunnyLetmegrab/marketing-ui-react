import React from 'react'

export default function BottomContent() {
    return (
        <section className='relative py-20'>
            <div className='flex mx-auto max-w-7xl  flex-col justify-center'>
                <h1 className='text-4xl text-black font-bold text-center'>Are you ready to grow your business with us?</h1>
                <p className='my-10 block mx-auto text-center'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                <button className='mx-auto bg-[#121212]  rounded-xl border text-white text-sm px-6 h-12 w-fit'>View Pricing</button>

            </div>
            <div className='h-[200px] w-full  bg-blue-400 absolute bottom-0  z-[-1] translate-x-[0] blur-[130px] opacity-[.5]' />
        </section>

    )
}
