'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import Star from '@/assets/star.png';
import Spring from '@/assets/spring.png';
import { motion, useScroll, useTransform } from 'framer-motion';

const CallToAction = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [170, -170]);

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white to-[#D2DCFF] overflow-x-clip">
      <div className="container">
        <div className="relative">
          <div className="flex items-center justify-center flex-col space-y-5 text-center">
            <h4 className="text-3xl md:text-5xl xl:text-6xl gradient-text font-bold tracking-tighter">
              Sign up for free today
            </h4>
            <p className="text-lg font-medium text-[#010D3E] tracking-tighter md:max-w-lg">
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </p>
            <div className="text-black flex gap-1 items-center tracking-tighter">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-3">
                <span>Learn More {'  '}</span>
                &rarr;
              </button>
            </div>
          </div>
          <motion.img
            src={Star.src}
            alt="star-img"
            className="md:block md:absolute -top-[1rem] -left-[14rem] xl:-left-[2rem] hidden"
            width={320}
            height={320}
            drag
            draggable="false"
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={Spring.src}
            alt="spring-img"
            className="md:block md:absolute -bottom-[14rem] -right-[13rem] xl:-right-[0rem]  hidden"
            width={320}
            height={320}
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

export default CallToAction;
