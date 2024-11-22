import React from 'react';
import Image from 'next/image';
import PageHeading from '@/app/components/PageHeading';
import GradientButton from '@/app/components/GradientButton';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Services - Ayanda Mabaso",
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

const page = () => {
  return (
    <div className='font-sans'>
      <PageHeading text='Services' imageUrl='/services.jpg' />

      <div className='flex flex-col-reverse px-10 lg:flex-row w-full py-10 lg:px-28 bg-white'>
        <div className='w-full lg:w-[50%]'>

          <div className='flex w-full md:justify-center lg:justify-start'>
            <Image
              src="/creation.jpg"
              alt='creator-image'
              width={500}
              height={900}
              quality={80}
              className='rounded-lg'
            />
          </div>
        </div>
        <div className='w-full pb-6 lg:pb-0 lg:w-[50%] space-y-2'>
          <h2 className='pb-4 text-3xl font-bold'>Content Creator</h2>
          <p>
            Ayanda Mabaso is a content creator who helps individuals and businesses tell their stories through engaging, creative content. With a focus on detail and creativity, he delivers impactful visuals and messages that resonate with audiences.
          </p>
          <p>
            Believing in the power of storytelling, Ayanda tailors his content for each platform, whether it’s Instagram, LinkedIn, or TikTok, ensuring it aligns with his clients' goals and brand identity.
          </p>
          <p>
            His commitment to creating quality content goes beyond aesthetics—he focuses on building trust and fostering community, earning respect and growing his following across platforms.
          </p>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row w-full py-10 px-10 lg:px-28 bg-black text-white'>
        <div className='w-full pb-6 lg:pb-0 lg:w-[50%] space-y-2'>
          <h2 className='pb-4 text-3xl font-bold'>Public Speaker</h2>
          <p>
            Ayanda Mabaso is a budding public speaker with a talent for inspiring audiences through authentic and impactful messages. His talks focus on personal growth, building a digital presence, and empowering individuals to embrace their unique stories.
          </p>
          <p>
            Known for his relatable and engaging style, Ayanda blends humor, personal experiences, and actionable insights to leave audiences feeling motivated and equipped to take the next steps in their journey.
          </p>
        </div>
        <div className='w-full lg:w-[50%] lg:pl-4'>

          <div className='flex w-full md:justify-center lg:justify-start'>
            <Image
              src="/speaking.jpg"
              alt='public-speaker-image'
              width={500}
              height={900}
              quality={80}
              className='rounded-lg'
            />
          </div>
        </div>

      </div>

      <div className='flex flex-col-reverse lg:flex-row w-full py-10 px-10 lg:px-28 bg-white'>
        <div className='w-full lg:w-[50%]'>

          <div className='flex w-full md:justify-center lg:justify-start'>
            <Image
              src="/manager.jpg"
              alt='laptop-image'
              width={500}
              height={900}
              quality={80}
              className='rounded-lg'
            />
          </div>
        </div>
        <div className='w-full pb-6 lg:pb-0 lg:w-[50%] space-y-2'>
          <h2 className='pb-4 text-3xl font-bold'>Social Media Manager</h2>
          <p>
            Ayanda Mabaso is an emerging social media manager who helps brands amplify their presence online. With a keen understanding of digital trends, he crafts strategies that increase engagement and drive growth across various platforms.
          </p>
          <p>
            Focused on creating tailored content and building authentic connections, Ayanda ensures his clients’ voices are heard by the right audience. His ability to adapt and stay ahead of trends has made him a trusted partner for businesses looking to thrive in the digital space.
          </p>
        </div>
      </div>

      <div className='w-full flex justify-center pb-10 bg-white'>
        <GradientButton text="Book Ayanda" />
      </div>
    </div>
  )
}

export default page;