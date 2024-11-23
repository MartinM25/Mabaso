import React from 'react';
import Image from 'next/image';
import { cardInfo } from "../constants";
import GradientButton from '../components/GradientButton';

const ServicesSection = () => {
  return (
    <section className='w-full py-10 lg:px-28 bg-white cursor-pointer'>
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">What Ayanda has to Offer</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 pt-10 md:gap-2">
        {cardInfo.map((card) => (
          <div key={card.id} className="relative group text-center">
            <Image
              src={card.image}
              alt="image"
              width={280}
              height={300}
              quality={100}
              className="w-full h-full object-cover transition-all group-hover:opacity-50"
            />
            {/* Text on top of image */}
            <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold">{card.details}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full flex py-10 items-center justify-center text-center'>
        <GradientButton text="More" />
      </div>
    </section>
  )
}

export default ServicesSection;