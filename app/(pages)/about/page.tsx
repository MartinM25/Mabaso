import React from 'react';
import PageHeading from '@/app/components/PageHeading';
import GradientButton from '@/app/components/GradientButton';

import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "About - Ayanda Mabaso",
  // description: "Discover the story of Ayanda Mabaso and his journey as a content creator and public speaker.",
  // openGraph: {
  //   title: "About Ayanda",
  //   description: "Learn about Ayanda Mabaso's work and impact.",
  //   images: [
  //     {
  //       url: "/about.jpg",
  //       width: 1200,
  //       height: 630,
  //     },
  //   ],
  // },
};

const images = [
  '/image1.jpg',
  '/image2.jpg',
  '/image3.jpg',
  '/image4.jpg',
  '/image5.jpg',
  '/image6.jpg',
];

const page = () => {
  return (
    <div className='font-sans'>
      <PageHeading text='About Ayanda' imageUrl='/about.jpg' />

      <div className='flex w-full bg-black py-6 text-white justify-between'>
        <div className='w-full text-center'>
          <p className='text-5xl md:text-7xl font-bold'>5+</p>
          <p className='text-3xl md:text-4xl font-semibold'>Years Experience</p>
        </div>
        <div className='w-full text-center'>
          <p className='text-5xl md:text-7xl font-bold'>10K+</p>
          <p className='text-3xl md:text-4xl font-semibold'>Followers</p>
        </div>
      </div>

      <div className='w-full py-10 px-10 lg:px-24'>
        <div className='flex flex-col lg:flex-row lg:space-x-6 '>
          <video width="600" height="500" controls preload="auto">
            <source src="./video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className='py-6 lg:py-0'>
            <h2 className='text-3xl font-bold'>Who is Ayanda Mabaso?</h2>

            <div className="font-normal text-base space-y-4 pt-6">
              <p>
                Ayanda Mabaso is an emerging voice in the digital space: a passionate public speaker, a creative content creator, and a dedicated social media manager.
              </p>

              <p>
                Though he&apos;s still early in his journey, Ayanda&apos;s already making an impact by helping others refine their strategies and grow their brands. He&apos;s not just talking about success; he&apos;s actively shaping it with his insights and unique approach.
              </p>

              <p>
                As he continues to build his platform, Ayanda is proving that fresh ideas and practical strategies can spark real change. His work is just getting started, and the potential is clear.
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className='bg-black py-6 text-center text-white'>
        <p className='text-4xl'>Gallery</p>
        <p className='font-normal text-lg pt-4'>See Ayanda in his element.</p>
      </div>

      <div className=" px-24 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
        {images.map((image, index) => (
          <div key={index} className="w-full h-full cursor-pointer hover:brightness-75 transition-all duration-300 ease-in-out">
            <Image
              src={image}
              width={2000}
              height={1500}
              priority
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className='w-full flex justify-center pb-10'>
        <GradientButton text="Book Ayanda" />
      </div>
    </div>
  )
}

export default page;