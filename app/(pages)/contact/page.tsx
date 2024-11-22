import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { socialLinks } from '@/app/constants';
import PageHeading from '@/app/components/PageHeading';
import ContactForm from '@/app/components/ContactForm';


export const metadata: Metadata = {
  title: "Contact - Ayanda Mabaso",
  // description: "Discover the story of Ayanda Mabaso and his journey as a content creator and public speaker.",
  // openGraph: {
  //   title: "About Ayanda",
  //   description: "Learn about Ayanda Mabaso's work and impact.",
  //   images: [
  //     {
  //       url: "/contact.jpg",
  //       width: 1200,
  //       height: 630,
  //     },
  //   ],
  // },
};

const page = () => {
  return (
    <div>
      <PageHeading text='Contact' imageUrl='/contact.jpg' />
      <div className='flex flex-col md:flex-row lg:px-28'>
        <div className='w-full md:w-[50%] px-12 pt-16 md:px-6'>
          <h2 className="text-4xl font-bold">Get In Touch</h2>
          <div className="flex flex-col py-12">
            <div className='py-2 items-center'>
              <h2 className='font-bold text-lg'>Email US:</h2>
              <p className=" text-sm md:text-base">biz@mabasomedia.co.za</p>
            </div>
            <div className='py-2 items-center'>
              <h2 className='font-bold text-lg'>Call Us:</h2>
              <p className="text-sm md:text-base">+27 626 865 982</p>
            </div>
            <div className='py-2 items-center'>
              <h2 className='font-bold text-lg'>Follow Us:</h2>
              <div className='flex gap-2'>
                {socialLinks.map((link) => (
                  <Link href={link.href} key={link.name}>
                    <Image
                      src={link.icon}
                      alt={link.name}
                      width={25}
                      height={25}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='w-full md:w-[50%] px-12 pb-12 md:py-16 md:px-6'>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default page;