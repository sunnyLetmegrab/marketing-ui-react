import React from 'react'
import PageHeader from '../component/page-header'
import sampleImage from '../assets/smaple-image.svg'
import BottomContent from '../component/bottom-content'
export default function BlogItemPage() {
    return (
        <div className='container-center overflow-hidden'>
            <section>
                <PageHeader title='New invoicing features to help you get paid faster' />
                <img src={sampleImage} className='aspect-[16/4] w-full object-cover mx-auto my-10 rounded-2xl max-w-7xl' />
            </section>

            <section className='flex my-20 gap-y-5 flex-col'>
                <h1 className='font-bold text-4xl'>
                    This is a blog post headline
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui auctor dictum eget a elit. Pellentesque varius diam risus, ut condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus, pretium interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi. Phasellus consectetur sapien accumsan lectus tincidunt placerat. Etiam ornare nibh vel dui egestas, eu posuere metus convallis.</p>
                <p>Ut non urna a odio condimentum dictum. Proin egestas erat a orci ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt justo. Vestibulum congue dictum libero finibus vehicula. Aliquam nisi velit, ultricies eget enim vel, venenatis mollis ante. Maecenas sodales tristique quam. Suspendisse fringilla massa vel dolor ornare rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui. Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque egestas, non condimentum mi bibendum. Sed est eros, molestie consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris at nisi sed elit gravida malesuada.</p>

                <h4 className='font-bold text-2xl'>This is a small blog post headline</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui auctor dictum eget a elit. Pellentesque varius diam risus, ut condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus, pretium interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi. Phasellus consectetur sapien accumsan lectus tincidunt placerat. Etiam ornare nibh vel dui egestas, eu posuere metus convallis.</p>
            </section>
            <BottomContent/>
        </div>
    )
}
