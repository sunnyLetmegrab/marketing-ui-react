import React from 'react'
import img from '../assets/smaple-image.svg'
import Secure from '../assets/secure.svg'
import PageHeader from '../component/page-header';

export default function AboutUsPage() {
    var memebers = [
        { id: 1, name: 'Blake Matthews', designation: "CEO & Co-Founder", },
        { id: 2, name: 'Jack Newman', designation: "CTO", },
        { id: 3, name: 'Sarinia Martins', designation: "Marketing", },
        { id: 4, name: 'Spencer Wright', designation: "Marketing", },
        { id: 5, name: 'Caroline Ming', designation: "Sales", },
        { id: 6, name: 'Anna Mills', designation: "Design lead", },
    ];
    return (
        <div>
            <PageHeader title='We are proud of our products'/>
            <section className='block mx-auto max-w-5xl my-20'>
                <div className='flex gap-5 flex-wrap items-center justify-center'>
                    {
                        [1, 2, 3].map((e, index) => (
                            <img key={index} src={img} alt='text img' className='col-span-1 inline' />
                        ))
                    }

                </div>
            </section>

            <section className='block mx-auto max-w-4xl my-20'>
                <h6 className='text-base font-bold text-center'>About Us</h6>
                <h1 className='text-3xl font-bold text-center my-5'>We’re a team of data analysts</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
            </section>

            <section className='bg-[#F0F2FE] grid grid-cols-2 gap-10 py-14 px-10'>
                <div className='flex flex-col gap-5'>
                    <h5 className='text-black font-bold text-lg'>our goal</h5>
                    <h1 className='text-black font-bold text-3xl'>To upscale your business to the next level</h1>
                    <h6>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</h6>
                </div>
                <div className='flex flex-col gap-5'>
                    <h5 className='text-black font-bold text-lg'>Our Vision</h5>
                    <h1 className='text-black font-bold text-3xl'>To provide solutions for growing companies</h1>
                    <h6>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</h6>
                </div>
            </section>
            <section className='py-20 block mx-auto my-20'>
                <h4 className='text-3xl text-black font-semibold text-center'>Our corporate values</h4>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 max-w-5xl  bg-[#F9F0FB] gap-10 lg:px-20 px-10 py-10 my-10 lg:mx-auto mx-10 rounded-xl'>
                    {[1, 2, 3, 4, 5, 6].map((e) => (<div key={e} className='col-span-1 grid grid-cols-1 gap-2'>
                        <img src={Secure} alt='secure tag' />
                        <h1>High security to protect from piracy</h1>
                        <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</span>
                    </div>))}
                </div>
            </section>
            <section className='my-20 mx-auto block max-w-5xl'>
                <div className='grid lg:grid-cols-12 gap-10 lg:px-10 px-6'>
                    <div className='col-span-4 flex flex-col gap-4'>
                        <h4 className='text-3xl font-semibold'>Our talented Team</h4>
                        <p className='text-sm'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
                    </div>

                    <div className='col-span-8 grid sm:grid-cols-3 grid-cols-2 gap-5 mx-auto'>
                        {memebers.map((e) => (
                            <div key={e.id} className='block mx-auto  rounded-xl bg-[#ececec]'>
                                <img className='size-48' src={Secure} />
                                <div className="px-5 py-3 bg-[#F0F2FE] rounded-b-xl">
                                    <p className="font-semibold">{e.name}</p>
                                    <p className="text-sm">{e.designation}</p>
                                </div>


                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className='block mx-auto max-w-7xl my-20'>
                <h1 className='text-4xl text-black font-bold text-center'>Are you ready to grow your business with us?</h1>
                <p className='my-10 block mx-auto text-center'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
            </div>
        </div>
    )
}
