import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { navItems, socialLinks } from '../constants';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-black text-white font-sans'>
      <div className="px-6 md:px-16 lg:px-28">
        {/* Wrapper container */}
        <div className="flex flex-col md:justify-between md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Logo */}
          <div className="py-4 text-center px-28 md:px-0 lg:text-left">
            <Image
              src="/logo.png"
              alt="Your Logo"
              width={280}
              height={300}
              className="align-top cursor-pointer"
            />
          </div>

          {/* Quick Links */}
          <div className="pt-4 md:py-4 text-center md:text-left">
            <p className="text-2xl font-medium">Quick Links</p>
            <ul className="space-y-2 pt-4">
              {navItems.map((link, id) => (
                <li
                  key={id}
                  className="flex flex-row gap-6 justify-center md:justify-start hover:underline decoration-blue delay-100 duration-300"
                >
                  <Link href={link.href}>
                    <p>{link.text}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Contact */}
          <div className="pt-4 md:py-4 text-center md:text-left">
            <p className="text-2xl font-medium">Get In Touch</p>
            <div className="py-2 space-y-2 pt-4">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail width={20} height={20} color="white" />
                <p>biz@mabasomedia.co.za</p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone width={20} height={20} color="white" />
                <p>+27 626 865 982</p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-6 pt-4">
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
      </div>

      <div className='flex justify-center text-xs font-extralight gap-6 items-center flex-wrap border-t border-teal px-6 py-10'>
        <p>©2024 Ayanda Mabaso. All Rights Reserved</p>
      </div>
      <div className='flex justify-center text-xs font-extralight gap-6 items-center flex-wrap border-t border-teal py-4'>
        <p>Designed & devloped by Martin Manjoro</p>
      </div>
    </footer>
  )
}

export default Footer