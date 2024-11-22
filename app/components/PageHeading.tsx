import React from 'react';
import Image from 'next/image';

interface PageHeadingProps {
  text: string;
  imageUrl: string;
}

const PageHeading = ({ text, imageUrl }: PageHeadingProps) => {
  return (
    <div className="relative w-full" style={{ height: '500px' }}>
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt="Background"
          fill
          quality={90} 
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <div className="absolute inset-0 flex items-center justify-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold shadow-lg">{text}</h1>
      </div>
    </div>
  );
};

export default PageHeading;
