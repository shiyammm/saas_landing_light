'use client';

import React, { useRef } from 'react';
import cog from '@/assets/cog.png';
import cylinder from '@/assets/cylinder.png';
import noodle from '@/assets/noodle.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end end'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section className="pt-8 md:pt-5 md:pb-10 pb-20 radial_gradient overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="space-y-7 md:max-w-md">
            <span className="border border-black border-opacity-30 px-3 py-1 tracking-tight rounded-lg text-sm font-semibold">
              Version 2.0 is here
            </span>
            <h1 className="text-5xl md:text-7xl gradient-text font-bold tracking-tighter">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010D3E] font-medium tracking-tight">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="text-black flex gap-1 items-center tracking-tighter">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-3">
                <span>Learn More {'  '}</span>
                &rarr;
              </button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[650px] md:flex-1 relative">
            <motion.img
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }}
              src={cog.src}
              alt="cog"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 xl:left-0 2xl:left-[10rem]"
            />
            <motion.img
              src={cylinder.src}
              alt="cylinder"
              width={220}
              height={220}
              className="md:absolute hidden md:block -left-[8rem] 2xl:left-0 -top-[9rem]"
              drag
              draggable="false"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={noodle.src}
              alt="noodle"
              width={220}
              height={220}
              className="md:absolute rotate-[30deg] top-[27rem] hidden lg:block left-[30rem] 2xl:left-[40rem]"
              drag
              draggable="false"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
