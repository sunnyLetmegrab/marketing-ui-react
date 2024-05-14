import React from 'react'
import Secure from '../assets/secure.svg'

export default function GridSection() {
    return (
        <>
            <div className='grid  lg:grid-cols-3 sm:grid-cols-2 gap-3 lg:px-12 lg:py-16 bg-[var(--light-violet)] rounded-xl px-5 py-5'>
                <div className='col-span-1 grid grid-cols-1 gap-2'>
                    <img src={Secure} alt='secure tag' />
                    <h1>High security to protect from piracy</h1>
                    <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</span>
                </div>
                <div className='col-span-1 grid grid-cols-1 gap-2'>
                    <img src={Secure} alt='secure tag' />
                    <h1>High security to protect from piracy</h1>
                    <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</span>
                </div>
                <div className='col-span-1 grid grid-cols-1 gap-2'>
                    <img src={Secure} alt='secure tag' />
                    <h1>High security to protect from piracy</h1>
                    <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</span>
                </div>

            </div></>
    )
}
