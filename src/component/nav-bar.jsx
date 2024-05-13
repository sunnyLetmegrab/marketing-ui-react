import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {

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
        <div className='flex justify-between content-center *:text-[#121212] px-10 py-5 shadow-[0_10px_10px_-15px_rgba(0,0,0,0.3)]'>
            <span className='text-3xl font-semibold'>&#123;Finsweet</span>
            <ul className='inline'>
                {
                    navLinks.map((item) => <li key={item.id} className='inline mx-3'><NavLink to={item.path}>{item.title}</NavLink></li>)
                }
                <button className='mx-4 bg-[#121212] px-5 py-2 rounded-xl text-white text-sm'>Free trial</button>
            </ul>
        </div>
    );
}
