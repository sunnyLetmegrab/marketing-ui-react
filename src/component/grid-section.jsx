import React from 'react'
import Secure from '../assets/secure.svg'

export default function GridSection() {
    return (
        <>
            <div className='grid grid-cols-3 gap-3 px-12 py-16 bg-[var(--light-violet)] rounded-xl'>
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
