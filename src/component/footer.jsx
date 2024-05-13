import React from 'react'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='grid grid-cols-4'>
                <div className='col-span-1'>
                    <span className='font-semibold'>Company</span>
                    <ul>
                        <li>About us</li>
                        <li>Why us</li>
                        <li>Testimonials</li>
                        <li>Price</li>
                    </ul>
                </div>
                <div className='col-span-1'>
                    <span className='font-semibold'>Resources</span>
                    <ul>
                        <li>Privacy policy</li>
                        <li>Term & condition</li>
                        <li>Blog</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className='col-span-1'>
                    <span className='font-semibold'>Product</span>
                    <ul>
                        <li>Project management</li>
                        <li>Time tracker</li>
                        <li>Time schedule</li>
                        <li>Lead generate</li>
                        <li>Remote collaberation</li>
                    </ul>
                </div>
                <div className='col-span-1 block *:my-3'>
                    <span className='font-semibold block'>Finsweet</span>
                    <span className='block'>Subscribe to our Newsletter</span>
                    <div className='h-12 bg-[#8d8d8d18] flex rounded-xl'>
                        <input placeholder='Enter your email' className='outline h-12 w-full bg-transparent outline-none px-3'></input>
                        <button className='bg-white whitespace-nowrap text-[#121212] px-5 rounded-xl'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='flex content-center align-middle justify-center my-5'><hr className='flex-[2] self-center'></hr><span className='flex-1 text-center'> © Copyright Finsweet 2022 </span><hr className='flex-[2] self-center'></hr></div>
        </footer>
    )
}
