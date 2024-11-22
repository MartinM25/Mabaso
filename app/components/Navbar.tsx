import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MobileNav from './MobileNav';

import GradientButton from './GradientButton';
import { navItems } from '../constants';

const Navbar = () => {
  return (
    <header className='bg-black flex'>
      <div className='flex flex-col w-full items-center justify-center px-10 py-2 md:flex-row md:px-28 md:py-4 md:justify-between'>

        {/* need to wrap this in a chakra plain button */}
        <Image
          src="/logo.png"
          alt="Your Logo"
          width={280}
          height={300}
          className="align-top cursor-pointer"
        />

        <div className='flex space-x-8 h-full items-center '>
          {/* Nav links */}
          <nav className='hidden lg:block'>
            <ul className='flex h-full items-center gap-x-8'>
              {navItems.map((link, id) => (
                <li key={id} className='text-white font-normal font-sans hover:text-blue hover:font-normal duration-300'>
                  <Link href={link.href}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Book button */}
          <div className='hidden lg:block'>
            <GradientButton text="Book Ayanda" href='/book-ayanda' />
          </div>

        </div>

        {/* mobile nav */}
        <div className='lg:hidden justify-center flex-end'>
          <MobileNav />
        </div>

      </div>
    </header>
  )
}

export default Navbar