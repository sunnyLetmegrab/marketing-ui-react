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

        <div className='container-center'>
            <section className='block mx-auto w-full max-w-4xl my-20 p-10'>
                <h1 className='  font-semibold text-center lg:text-5xl text-4xl'>The Best Software to Grow your Sales and Services</h1>

                <h6 className='text-base text-center py-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</h6>
                <div className='bg-white flex mx-auto max-w-lg w-full border rounded-xl'>
                    <input className='mx-auto bg-transparent h-14 w-full outline-none pl-3' placeholder='' />
                    <button className='bg-[#121212] mr-2 my-1 rounded-xl border max-w-fit whitespace-nowrap text-white text-sm px-4'>Get free trial</button>
                </div>
            </section>
            <img src='src/assets/img-dashboard.png' alt='dashboard image' className='aspect-[4000/2600] mx-auto px-5 lg:max-w-4xl' />

            <section className='block my-20 max-w-7xl spacing-responsive'>
                <h4 className='text-xl text-center font-extrabold '> High-quality</h4>
                <h6 className='text-3xl text-center py-5 font-bold'>We have the Best Solution for your Business</h6>
                <GridSection />
            </section>
            <section className='grid lg:grid-cols-2 my-20  max-w-7xl gap-12 spacing-responsive'>
                <div className='col-span-1 flex justify-between  flex-col m-auto space-y-3 '>

                    <h3 className='text-xl'>Why should you work with us?</h3>
                    <h2 className='text-3xl font-bold'>To upscale your business to the next level</h2>
                    <h1 className='text-sm'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.</h1>
                </div>
                <div className='col-span-1 flex justify-between flex-col lg:m-auto space-y-5'>
                    <div className='flex content-center align-middle'>
                        <img src={ArrowIcon} alt='arrow-icon' className='inline mr-3' />
                        <span className='self-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</span>
                    </div>
                    <div className='flex content-center align-middle'>
                        <img src={ArrowIcon} alt='arrow-icon' className='inline mr-3' />
                        <span className='self-center' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</span>
                    </div>

                    <div className='flex content-center align-middle'>
                        <img src={ArrowIcon} alt='arrow-icon' className='inline mr-3' />
                        <span className='self-center' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</span>

                    </div>

                </div>
            </section>
            <section className='grid lg:grid-cols-12 gap-10 my-20 bg-[#ecf1fb] px-20 py-10 lg:mx-[-3rem] mx-auto'>
                <div className='lg:col-span-7 my-auto lg:order-1 order-2  space-y-3'>
                    <h2 className='text-3xl font-bold'>More impressions, more conversions</h2>
                    <span className='block'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.</span>
                    <button className='bg-[#121212] mr-2 my-1 rounded-xl border text-white text-sm px-4 h-10'>Get free trial</button>

                </div>
                <div className='lg:col-span-5 lg:order-2 order-1'>
                    <img src={dbImage} alt='finace' className='lg:h-full h-80 mx-auto block' />
                </div>
            </section>
            <section className='grid lg:grid-cols-4 grid-cols-2  w-full  max-w-7xl flex-wrap spacing-responsive'>{[12, 3, 45, 34].map((e) => (<img className='inline' key={e} src={testLogo} alt='text-image' />))}</section>

            <section className='grid grid-cols-2 my-20 gap-x-10 mx-auto w-full max-w-7xl gap-y-5    '>
                <div className='lg:col-span-1 col-span-2 flex  flex-col gap-6  mx-10'>

                    <h3 className='text-xl'>Why should you work with us?</h3>
                    <h2 className='text-3xl font-bold'>To upscale your business to the next level</h2>
                    <h1 className='text-sm'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.</h1>
                </div>
                <div className='lg:col-span-1 col-span-2 flex flex-col gap-5 justify-between mx-10'>
                    <div className='flex gap-2 lg:justify-end'>
                        <img src={featureIcon} alt='feature icon'></img>
                        <div className='block'>
                            <span className='text-xl font-bold block'>
                                Sales Tracking
                            </span>
                            <span className='block'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr. </span>
                        </div>
                    </div>
                    <div className='flex gap-2  lg:justify-end'>
                        <img src={featureIcon} alt='feature icon'></img>
                        <div className='block'>
                            <span className='text-xl font-bold block'>
                                Sales Tracking
                            </span>
                            <span className='block'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr. </span>
                        </div>
                    </div>
                    <div className='flex gap-2  lg:justify-end'>
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
            <section className='block w-full max-w-7xl mx-auto my-20'>
                <h1 className='text-3xl font-bold text-center my-10 spacing-responsive'>The stunning results our customers have experienced</h1>
                <div className='grid grid-cols-3 gap-x-5 gap-y-5'>
                    <div className='lg:col-span-1 col-span-3 border rounded-xl p-10 flex justify-evenly flex-col aspect-square m-auto'>
                        <span className='block max-w-[283px] mx-auto text-center'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</span>
                        <div className='rounded-full h-10 bg-red-200 w-10 mx-auto py-5'></div>
                        <span className='block text-xl font-semibold mx-auto text-center'>Ron wood</span>
                        <span className='block text-sm mx-auto text-center'>CEO</span>
                    </div>
                    <div className='lg:col-span-1 col-span-3 border rounded-xl p-10 flex justify-evenly flex-col aspect-square  m-auto'>
                        <span className='block max-w-[283px] mx-auto text-center'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</span>
                        <div className='rounded-full h-10 bg-red-200 w-10 mx-auto py-5'></div>
                        <span className='block text-xl font-semibold mx-auto text-center'>Ron wood</span>
                        <span className='block text-sm mx-auto text-center'>CEO</span>
                    </div>
                    <div className='lg:col-span-1 col-span-3 border rounded-xl p-10 flex justify-evenly flex-col aspect-square m-auto'>
                        <span className='block max-w-[283px] mx-auto text-center'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</span>
                        <div className='rounded-full h-10 bg-red-200 w-10 mx-auto py-5'></div>
                        <span className='block text-xl font-semibold mx-auto text-center'>Ron wood</span>
                        <span className='block text-sm mx-auto text-center'>CEO</span>
                    </div>
                </div>
            </section>
            <section className='flex flex-col max-w-2xl w-full mx-auto justify-center content-center flex-wrap my-20'>
                <h1 className=' lg:text-5xl text-3xl font-semibold text-center'>Are you ready to grow your business with us?</h1>
                <p className='lg:text-base text-sm text-center my-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
                </p>
                <button className='mx-auto bg-[#121212] rounded-xl border text-white text-sm px-6 h-12 w-fit'>View Pricing</button>
            </section>
        </div>

    )
}
