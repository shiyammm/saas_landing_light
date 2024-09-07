import React from 'react';
import Image from 'next/image';
import productImage from '@/assets/product-image.png';
import pyramid from '@/assets/pyramid.png';
import tube from '@/assets/tube.png';

const ProductShowcase = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFFF] to-[#D2DCFF] overflow-hidden">
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
            <p className="text-center text-lg md:text-xl xl:text-2xl tracking-tight font-medium md:max-w-md xl:max-w-xl">
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </p>
            <div>
              <Image src={productImage} alt="product-img" />
            </div>
          </div>
          <Image
            src={pyramid}
            alt="pyramid"
            className="absolute hidden md:block -right-[7rem] top-[9rem] xl:top-[13.5rem]"
            width={262}
            height={262}
          />
          <Image
            src={tube}
            alt="tube-img"
            className="absolute hidden md:block -left-[9rem] bottom-[1.5rem] xl:bottom-[5rem]"
            width={262}
            height={262}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
