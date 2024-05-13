import React from 'react'
import Navbar from '../component/nav-bar'
import ArrowIcon from '../assets/arrow.svg'
import dbImage from '../assets/db-second.svg'
import testLogo from '../assets/test-logo.svg'
import featureIcon from '../assets/feature-icon.svg'
import GridSection from '../component/grid-section'
import Footer from '../component/footer'
export default function HomePage() {
    var list = ['sdadas'];
    return (

        <div className='container block mx-auto px-2'>
            <section className='block mx-auto w-full max-w-2xl my-20 bg-slate-100 p-10'>
                <h1 className='text-5xl text-center'>The Best Software to Grow your Sales and Services</h1>

                <h6 className='text-base text-center py-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</h6>
                <div className='bg-white flex mx-auto max-w-lg w-full border rounded-xl'>
                    <input className='mx-auto bg-transparent h-14 w-full outline-none pl-3' placeholder='' />
                    <button className='bg-[#121212] mr-2 my-1 rounded-xl border max-w-fit whitespace-nowrap text-white text-sm px-4'>Get free trial</button>
                </div>
            </section>
            <img src='src/assets/img-dashboard.png' alt='dashboard image' className='aspect-[4000/2600] mx-auto px-5' />

            <section className='block mx-auto my-20 max-w-7xl'>
                <h4 className='text-xl text-center font-extrabold '> High-quality</h4>
                <h6 className='text-3xl text-center py-5 font-bold'>We have the Best Solution for your Business</h6>
                <GridSection />
            </section>
            <section className='grid mx-auto grid-cols-2 my-20  max-w-7xl gap-12'>
                <div className='col-span-1 flex justify-between flex-col mx-10'>

                    <h3 className='text-xl'>Why should you work with us?</h3>
                    <h2 className='text-3xl font-bold'>To upscale your business to the next level</h2>
                    <h1 className='text-sm'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.</h1>
                </div>
                <div className='col-span-1 flex justify-between flex-col'>
                    <div className='block'>
                        <img src={ArrowIcon} alt='arrow-icon' className='inline mr-3' />
                        <span >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</span>
                    </div>
                    <div className='block'>
                        <img src={ArrowIcon} alt='arrow-icon' className='inline mr-3' />
                        <span >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</span>
                    </div>
                    <div className='block'>
                        <img src={ArrowIcon} alt='arrow-icon' className='inline mr-3' />
                        <span >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</span>
                    </div>

                </div>
            </section>
            <section className='grid grid-cols-12 gap-10 my-20 bg-[#ecf1fb] px-20 py-10 mx-[-3rem]'>
                <div className='col-span-7 my-auto'>
                    <h2 className='text-3xl font-bold'>More impressions, more conversions</h2>
                    <span className='block'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.</span>
                    <button className='bg-[#121212] mr-2 my-1 rounded-xl border text-white text-sm px-4 h-10'>Get free trial</button>

                </div>
                <div className='col-span-5'>
                    <img src={dbImage} alt='finace' />
                </div>
            </section>
            <section className='flex justify-between gap-10 w-full  max-w-7xl mx-auto flex-wrap'>{[12, 3, 45, 34].map((e) => (<img key={e} src={testLogo} alt='text-image' />))}</section>

            <section className='grid grid-cols-2 my-20 gap-x-10 mx-auto w-full max-w-7xl'>
                <div className='col-span-1 flex  flex-col gap-6'>

                    <h3 className='text-xl'>Why should you work with us?</h3>
                    <h2 className='text-3xl font-bold'>To upscale your business to the next level</h2>
                    <h1 className='text-sm'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.</h1>
                </div>
                <div className='col-span-1 flex flex-col gap-5 justify-between'>
                    <div className='flex gap-2 justify-end'>
                        <img src={featureIcon} alt='feature icon'></img>
                        <div className='block'>
                            <span className='text-xl font-bold block'>
                                Sales Tracking
                            </span>
                            <span className='block'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr. </span>
                        </div>
                    </div>
                    <div className='flex gap-2  justify-end'>
                        <img src={featureIcon} alt='feature icon'></img>
                        <div className='block'>
                            <span className='text-xl font-bold block'>
                                Sales Tracking
                            </span>
                            <span className='block'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr. </span>
                        </div>
                    </div>
                    <div className='flex gap-2  justify-end'>
                        <img src={featureIcon} alt='feature icon'></img>
                        <div className='block'>
                            <span className='text-xl font-bold block'>
                                Sales Tracking
                            </span>
                            <span className='block'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr. </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className='block mx-auto  max-w-7xl w-full my-20'>
                <h1 className='text-3xl font-bold text-center mb-10'>Feature</h1>
                <GridSection />
            </section>
            <section className='block w-full  max-w-7xl mx-auto my-20'>
                <h1 className='text-3xl font-bold text-center my-10'>The stunning results our customers have experienced</h1>
                <div className='grid grid-cols-3 gap-x-5'>
                    <div className='col-span-1 border rounded-xl p-10 flex justify-evenly flex-col aspect-square m-auto'>
                        <span className='block max-w-[283px] mx-auto text-center'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</span>
                        <div className='rounded-full h-10 bg-red-200 w-10 mx-auto py-5'></div>
                        <span className='block text-xl font-semibold mx-auto text-center'>Ron wood</span>
                        <span className='block text-sm mx-auto text-center'>CEO</span>
                    </div>
                    <div className='col-span-1 border rounded-xl p-10 flex justify-evenly flex-col aspect-square  m-auto'>
                        <span className='block max-w-[283px] mx-auto text-center'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</span>
                        <div className='rounded-full h-10 bg-red-200 w-10 mx-auto py-5'></div>
                        <span className='block text-xl font-semibold mx-auto text-center'>Ron wood</span>
                        <span className='block text-sm mx-auto text-center'>CEO</span>
                    </div>
                    <div className='col-span-1 border rounded-xl p-10 flex justify-evenly flex-col aspect-square m-auto'>
                        <span className='block max-w-[283px] mx-auto text-center'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</span>
                        <div className='rounded-full h-10 bg-red-200 w-10 mx-auto py-5'></div>
                        <span className='block text-xl font-semibold mx-auto text-center'>Ron wood</span>
                        <span className='block text-sm mx-auto text-center'>CEO</span>
                    </div>
                </div>
            </section>
            <section className='flex flex-col max-w-2xl w-full mx-auto justify-center content-center flex-wrap my-20'>
                <h1 className='text-5xl font-semibold text-center'>Are you ready to grow your business with us?</h1>
                <p className='text-center my-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
                </p>
                <button className='mx-auto bg-[#121212] rounded-xl border text-white text-sm px-6 h-12 w-fit'>View Pricing</button>
            </section>
        </div>

    )
}
