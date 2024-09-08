import Image from 'next/image';
import React from 'react';
import { images } from '@/constants/data';

const Marque = () => {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] flex">
          <div className="flex gap-14 flex-none">
            {images.map(({ src, alt }) => (
              <Image src={src} key={alt} alt={alt} className="w-auto h-8" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marque;
