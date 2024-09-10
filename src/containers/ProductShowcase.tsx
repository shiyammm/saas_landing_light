'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import productImage from '@/assets/product-image.png';
import pyramid from '@/assets/pyramid.png';
import tube from '@/assets/tube.png';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProductShowcase = () => {
  const productRef = useRef(null);

  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: productRef,
    offset: ['start end', 'end end'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      className="py-24 bg-gradient-to-b from-[#FFFF] to-[#D2DCFF] overflow-hidden"
      ref={productRef}
    >
      <div className="container ">
        <div className="relative">
          <div className="space-y-5 items-center flex flex-col justify-center">
            <div className="flex items-center justify-center">
              <div className="border-gray-500/30 font-medium text-tighter text-black border px-3 py-1 rounded-lg text-sm">
                Boost your productivity
              </div>
            </div>
            <h2 className="text-center text-3xl md:text-5xl xl:text-7xl font-bold tracking-tighter gradient-text">
              A more effective way <br className="hidden md:block" /> to track
              progress
            </h2>
            <p className="text-center text-lg md:text-xl xl:text-2xl tracking-tight font-medium md:max-w-md xl:max-w-xl text-[#010D3E]">
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </p>
            <motion.div
              ref={imageRef}
              style={{
                opacity: opacity,
                transformPerspective: '800px',
                rotateX: rotateX,
              }}
            >
              <Image src={productImage} alt="product-img" />
            </motion.div>
          </div>
          <motion.img
            src={pyramid.src}
            alt="pyramid"
            className="md:absolute hidden md:block -right-[7rem] top-[15rem] xl:top-[18.5rem]"
            width={262}
            height={262}
            drag
            draggable="false"
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={tube.src}
            alt="tube-img"
            className="md:absolute hidden md:block -left-[9rem] bottom-[2rem] xl:bottom-[0rem]"
            width={248}
            height={248}
            drag
            draggable="false"
            style={{
              translateY: translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
