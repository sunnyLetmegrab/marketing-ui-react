import React from 'react'

export default function PageHeader({ title, content }) {
    return (
        <section className='block mx-auto max-w-4xl  mt-20'>
            <h1 className='text-4xl font-bold block mx-auto text-center'>{title}</h1>
            <p className='mx-auto text-center my-10'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        </section>
    )
}
