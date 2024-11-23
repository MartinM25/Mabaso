import React from 'react';
import { Metadata } from 'next';
import BookingForm from '@/app/components/BookingForm';
import PageHeading from '@/app/components/PageHeading';


export const metadata: Metadata = {
  title: "Book - Ayanda Mabaso",
  // description: "Discover the story of Ayanda Mabaso and his journey as a content creator and public speaker.",
  // openGraph: {
  //   title: "About Ayanda",
  //   description: "Learn about Ayanda Mabaso's work and impact.",
  //   images: [
  //     {
  //       url: "/book-ayanda.jpg",
  //       width: 1200,
  //       height: 630,
  //     },
  //   ],
  // },
};

const page = () => {
  return (
    <div>
      <PageHeading text='Book Ayanda' imageUrl='/contact.JPG' />
      <BookingForm />
    </div>
  )
}

export default page;