import React from 'react';
import { MdArrowRightAlt } from 'react-icons/md';
import Image from 'next/image';
import AppLogo from '@/assets/logosaas.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import Link from 'next/link';
import { navLinks } from '@/constants/data';

function Header() {
  return (
    <header className="sticky top-0 text-white backdrop-blur-sm z-50">
      <div className="flex items-center justify-center py-3 bg-black gap-3">
        <p className="text-md hidden md:block text-white/60">
          Streamline your workflow and boost your productivity.
        </p>
        <div className="inline-flex items-center gap-1">
          <p className="flex gap-1 items-center">Get started for free</p>
          <MdArrowRightAlt size={20} className="text-white" />
        </div>
      </div>

      <div className="py-5 flex justify-between items-center">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="relative">
              <div className="absolute rainbow_gradient size-10 blur-md" />
              <Image
                src={AppLogo}
                alt="saas-logo"
                width={40}
                height={40}
                className="relative"
              />
            </div>
            <RxHamburgerMenu size={30} className="text-black md:hidden" />
            <nav className="md:flex items-center gap-6 hidden">
              {navLinks.map((link) => (
                <ul className="flex gap-4" key={link}>
                  <li>
                    <Link
                      href={link}
                      className="text-black/60 capitalize text-md font-medium hover:text-opacity-100 transition"
                    >
                      {link}
                    </Link>
                  </li>
                </ul>
              ))}
              <button className="btn btn-primary">Get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
