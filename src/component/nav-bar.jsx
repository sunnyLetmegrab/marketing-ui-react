import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {

    const [toggelMenu, setToggelMenu] = useState(false);

    var navLinks = [
        {
            id: 1,
            title: 'Home',
            path: ''
        },
        {
            id: 2,
            title: 'Product',
            path: 'product'
        },
        {
            id: 3,
            title: 'Price', path: 'pricing'
        },
        {
            id: 6,
            title: 'About us', path: 'aboutus'
        },
        {
            id: 4,
            title: 'Blog', path: 'blog'
        },
        {
            id: 5,
            title: 'Contact us', path: 'contactus'
        },
    ];

    
    return (
        <>
            <div className='w-full mx-auto flex justify-between content-center *:text-[#121212] py-5 shadow-[0_10px_10px_-15px_rgba(0,0,0,0.3)]'>
                <span className='text-3xl font-semibold mx-4'>&#123;Finsweet</span>
                <div className='flex items-center'>
                    <i className='fa-lg fa fa-bars p-2 lg:hidden inline' onClick={() => {
                        setToggelMenu(true)
                    }}></i>
                    <ul className={`lg:flex items-center lg:space-x-6 lg:space-y-1 block lg:p-0 px-2 py-3 bg-white lg:w-auto w-[250px] lg:h-auto h-full lg:max-h-[unset] max-h-screen lg:relative fixed z-10 lg:left-0 top-0 transition-all ${toggelMenu ? 'left-0' : '-left-full'}`}>
                        <div className='flex items-center px-2 mb-4 lg:hidden'>
                            <span className="text-3xl font-semibold">&#123;Finsweet</span>
                            <i className='fa-lg fa fa-window-close ml-auto' onClick={() => setToggelMenu(false)}></i>
                        </div>
                        {
                            navLinks.map((item) => <li key={item.id} className=''>
                                <NavLink to={item.path} className="lg:p-0 px-3 py-2 block text-base leading-5 lg:rounded-none rounded">{item.title}</NavLink></li>)
                        }
                    </ul>

                    <button className='inline-flex mx-4 bg-[#121212] px-5 py-2 rounded-xl text-white text-sm'>Free trial</button>
                </div>
            </div>
            <div className={`fixed top-0 w-full h-full bg-black/15  transition-all lg:hidden ${toggelMenu ? 'left-0' : '-left-full'}`} onClick={() => setToggelMenu(false)} />
        </>
    );
}
