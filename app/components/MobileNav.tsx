import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { navItems } from '../constants';
import { Sheet, SheetTitle, SheetContent, SheetTrigger, SheetClose, SheetDescription } from '@/components/ui/sheet';

const MobileNav = () => {
  return (
    <div>
      <Sheet >
        <SheetTrigger >
          <Menu className='h-4 w-4 text-white' />
        </SheetTrigger>
        <SheetContent side="top" className="bg-black w-full border-none text-center flex-col">
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
          <div className='w-full'>
            <Image
              src="/logo.png"
              alt="Your Logo"
              width={280}
              height={300}
              className="align-top cursor-pointer mx-auto"
            />
          </div>
          <ul className='h-full items-center space-y-4 pt-4'>
            {navItems.map((link, id) => (
              <li key={id} className='text-white font-normal font-sans hover:text-blue hover:font-normal duration-300'>
                <SheetClose asChild>
                  <Link href={link.href}>
                    {link.text}
                  </Link>
                </SheetClose>

              </li>
            ))}

          </ul>
          <div className='mt-6'>
            <SheetClose className='' asChild>
              <Link
                href="/book-ayanda"
                className='bg-gradient-to-r mt-6 from-blue to-teal text-white font-bold rounded-md px-6 py-3 hover:brightness-75 transition-all duration-300 ease-in-out'
              >
                Book Ayanda
              </Link>
            </SheetClose>
          </div>

        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav