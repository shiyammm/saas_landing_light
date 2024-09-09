"use client"

import Image from 'next/image';
import React from 'react';
import { images } from '@/constants/data';
import { motion } from 'framer-motion';

const Marque = () => {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] flex">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translate: '-50%',
            }}
            transition={{
              ease: 'linear',
              duration: 10,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            {images.map(({ src, alt }) => (
              <Image src={src} key={alt} alt={alt} className="w-auto h-8" />
            ))}
            {images.map(({ src, alt }) => (
              <Image src={src} key={alt} alt={alt} className="w-auto h-8" />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Marque;
