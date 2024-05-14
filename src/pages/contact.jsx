import React from 'react'
import smapleIcon from '../assets/sample-icon.svg';

export default function ContactUs() {

    var editTlcss = 'py-5 px-6 outline-none block w-full rounded-xl';

    return (
        <div className='container-center mt-20'>
            <h1 className='text-3xl text-black font-semibold text-center my-8'>Get in touch with us</h1>
            <div className='mx-auto max-w-7xl bg-[#F0F2FE] p-14'>
                <div className='grid grid-cols-12 gap-x-4'>
                    <div className='col-span-7 flex flex-col space-y-5 p-2'>
                        <h1 className='text-3xl font-semibold text-black'>Drop us a message</h1>
                        <p className=' text-base'>We will get back to you as soon as possible.</p>
                        <div className='grid grid-cols-2 gap-2'>
                            <input className={`${editTlcss}`} placeholder='Full name' />
                            <input className={`${editTlcss}`} placeholder='company name' />
                        </div>
                        <input className={`${editTlcss}`} placeholder='Work Email' />
                        <input className={`${editTlcss}`} placeholder='Subject' />
                        <textarea className={` outline-none block w-full rounded-xl resize-none py-5 px-6`} rows={5} cols={50} placeholder='Subject'></textarea>
                        <button className='button-fill h-12'>Send</button>
                    </div>
                    <div className='col-span-5 m-auto grid gap-10'>
                        <div className='flex gap-x-4 '>
                            <img src={smapleIcon} ></img>
                            <div className='block'>
                                <p className='block text-black font-semibold text-xl' >finsweet@gmail.com</p>
                                <p className='block text-gray-400'>Help Email support</p>
                            </div>
                        </div>
                        <div className='flex gap-x-4'>
                            <img src={smapleIcon} ></img>
                            <div className='block'>
                                <p className='block text-black font-semibold text-xl' >finsweet@gmail.com</p>
                                <p className='block text-gray-400'>Help Email support</p>
                            </div>
                        </div>
                        <div className='flex gap-x-4'>
                            <img src={smapleIcon} ></img>
                            <div className='block'>
                                <p className='block text-black font-semibold text-xl' >finsweet@gmail.com</p>
                                <p className='block text-gray-400'>Help Email support</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
