import React, { useState } from 'react'
import icon from './../assets/feature-icon.svg'
import checkFill from './../assets/check-mark.svg'

export default function PricePage() {
    var [questions, setQuestions] = useState([
        {
            id: 1,
            question: 'How do I grow my business?',
            answer: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            expanded: false,
        },
        {
            id: 2,
            question: 'Can I cancel my subscription?',
            answer: '',
            expanded: false,
        },
        {
            id: 3,
            question: 'How do I contact the support?',
            answer: '',
            expanded: false,
        },
        {
            id: 4,
            question: 'Is a credit card required?',
            answer: '',
            expanded: false,
        },
    ]);




    return (
        <>
            <div className='container-center max-w-5xl mt-20'>
                <section className='block mx-auto'>
                    <div className='max-w-2xl mx-auto'>
                        <p className='text-3xl font-semibold text-center'>Pricing plans that suit you</p>
                        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div className='flex mx-auto w-min p-1 my-10 rounded-2xl'>
                        <button className='h-12 px-10 py-3 rounded-2xl bg-[var(--primary)] text-white'>monthly</button>
                        <button className='px-10 py-3 h-12 '>yearly</button>
                    </div>
                    <div className='grid grid-cols-3 max-w-7xl mx-auto gap-5'>
                        {[12, 3, 4].map((e) => (<div key={e} className='col-span-1 rounded-2xl bg-slate-300 px-10 py-8'>
                            <div className='flex gap-2 content-center'>
                                <img src={icon} atl='icon' className='size-12' />
                                <div>
                                    <p className='text-xl font-semibold'>Regular</p>
                                    <p>Starter Plan</p>
                                </div>
                            </div>
                            <hr className='h-1 my-2 bg-red'></hr>
                            <ul className='price-item'>
                                {['Limited Projects', 'Regular Support Business', '1 month Free Trial', '3GB storage', 'Ads Preview']
                                    .map((item) => (
                                        <div key={item} className='flex content-center gap-x-1 my-5'>
                                            <img src={checkFill}></img>
                                            <p>{item}</p>
                                        </div>
                                    ))
                                }
                            </ul>
                            <p className='text-sm text-center mx-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                            <p className='font-bold text-2xl text-center my-4'>Free</p>
                            <p className='text-xs text-[#d8d8d8]'>For Limited Period</p>
                            <button className='button-fill mx-auto flex font-semibold'>get started</button>
                        </div>)
                        )}
                    </div>
                </section>

                <section className='grid grid-cols-12 bg-[#F0F2FE] my-20 p-10 space-x-7'>
                    <div className='col-span-5'>
                        <h1 className='text-4xl text-black font-bold'>Frequestly Asked Questions</h1>
                        <p className='text-sm'>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
                        </p>
                    </div>
                    <div className='col-span-7 grid space-y-2'>
                        {questions.map((item, index) => (
                            <div className='flex flex-col p-5 bg-white rounded-xl space-y-2'
                                onClick={(e) => {
                                    questions[index].expanded=!questions[index].expanded;
                                    setQuestions([...questions])
                                }}
                            >
                                <div className='flex justify-between transition-all ease-in-out duration-700 '>
                                    <p className='font-semibold text-lg'>text</p>
                                    <p className='font-semibold text-lg'> {item.expanded ? "-" : "+"}</p>
                                </div>
                                <p className={`${item.expanded ? 'block' : 'hidden'} `}>content</p>
                            </div>
                        ))}

                    </div>
                </section>
            </div>
        </>
    )
}
