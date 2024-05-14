import React, { useEffect, useState } from 'react'
import dbImage from '../assets/img-dashboard.png'
import testLogo from '../assets/test-logo.svg'
import Secure from '../assets/secure.svg'
import second from '../assets/db-second.svg'
export default function ProductPage() {
    /* 
        var [products, setProduct] = useState([]);
        var [isFetching, setIsFetching] = useState(false);
        var [page, setPage] = useState(8);
        var [apiCalled, setapiCalled] = useState(0);
    
        useEffect(() => {
            getProducts();
    
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);
    
        function handleScroll() {
    
            if (window.innerHeight + document.documentElement.scrollTop > document.documentElement.offsetHeight) {
                setIsFetching(true);
            }
    
        }
    
        useEffect(() => {
            console.log("fetched called", isFetching);
            if (!isFetching) return;
            getProducts();
        }, [isFetching]);
    
    
        async function getProducts() {
            try {
    
                var response = await fetch(`https://fakestoreapi.com/products?limit=${page}`);
                var list = await response.json();
                setProduct([...products, ...list],);
                setPage(page + 8);
                
            } catch (error) {
            } finally {
                setIsFetching(false);
            }
            console.log('Api called this times ', apiCalled);
    
        } */
    return (
        <>
            <div className='container-center'>
                <section className='grid  lg:grid-cols-5 mx-auto max-w-screen-xl gap-x-7 my-20 gap-y-10 spacing-responsive'>
                    <div className='lg:col-span-3 flex flex-col justify-evenly gap-y-4'>
                        <h5 className='lg:text-4xl text-3xl font-bold '>Grow your Sales and Services</h5>
                        <p className='lg:text-base text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className='flex gap-2'>
                            <button className='button-fill'>Get started</button>
                            <button className='button-outline'>Contact us</button></div>
                    </div>
                    <div className='lg:col-span-2 mx-auto'>
                        <img className='h-96' src={dbImage} alt='image' />
                    </div>
                </section>
                <section className= 'mx-auto w-fit grid lg:grid-cols-4 sm:grid-cols-2 justify-center gap-y-5 gap-x-10 my-10'>{[12, 3, 45, 34].map((e) => (<img className='inline w-52' key={e} src={testLogo} alt='text-image' />))}</section>

                <section className='flex flex-col pt-16 bg-gradient-to-l from-[#def7ed] to-[#eaeffb] w-100  mx-[-2rem]'>
                    <h4 className='text-black font-semibold text-3xl text-center max-w-2xl mx-auto my-10'> Get the best out of your company with our service</h4>
                    <div className='bg-[#ffffff81] grid lg:grid-cols-3 gap-10 lg:mr-52 mr-10 rounded-tr-3xl p-20'>
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
                    </div>
                </section>
                <section className=' grid lg:grid-cols-2 mx-[4rem] bg-white px-15 py-10 gap-8'>
                    <div className='flex m-auto flex-col gap-y-5 lg:order-1 order-2'>
                        <p className='block'>Marketing insights</p>
                        <p className='block text-4xl font-semibold'>Data-driven client feedback</p>
                        <p className='block'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
                    </div>
                    <div>
                        <img src={second} alt='img tag' className='lg:order-2 order-1'></img>
                    </div>
                </section>
            </div>
        </>

    )
}
/* 
{products.map((item, index) => (
    <div key={index} className='flex gap-5 my-3'>
        <div className='min-w-24 min-h-24'>
            <img src={item.image} alt={item.image} className='size-24'></img>

        </div>
        <div className='flex flex-col'>
            <p className='text-black font-bold'>{item.title}</p>
            <p className='text-black text-sm'>{item.description}</p>
        </div>
    </div>
))}
<div>
    {isFetching ?<p className='text-center font-bold text-xl text-black '> Fetching list please wait...</p>: null}
</div> */