import React from 'react';
import AppLogo from '@/assets/logosaas.png';
import Image from 'next/image';
import { navLinks, socialLinks } from '@/constants/data';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-10 bg-black">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="relative">
            <div className="absolute rainbow_gradient size-10 blur-sm top-1" />
            <Image
              src={AppLogo}
              alt="saas-logo"
              width={40}
              height={40}
              className="relative"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {navLinks.map((link) => (
              <ul
                className="text-white/60 capitalize font-light text-md"
                key={link}
              >
                <li>
                  <Link href={link}>{link}</Link>
                </li>
              </ul>
            ))}
          </div>
          <div className="flex gap-6 items-center">
            {socialLinks.map((Icon, i) => (
              <div key={i}>{<Icon className="text-white/80" size={20} />}</div>
            ))}
          </div>
          <span className="text-white/60 font-light text-center text-md" >© 2024 Your Company, Inc. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
