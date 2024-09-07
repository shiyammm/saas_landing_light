import Image from 'next/image';
import React from 'react';
import acme from '@/assets/logo-acme.png';
import apex from '@/assets/logo-apex.png';
import celestial from '@/assets/logo-celestial.png';
import pulse from '@/assets/logo-pulse.png';
import quantum from '@/assets/logo-quantum.png';
import echo from '@/assets/logo-echo.png';

const Marque = () => {
  const images = [
    { src: acme, alt: 'acme' },
    { src: apex, alt: 'apex' },
    { src: celestial, alt: 'celestial' },
    { src: pulse, alt: 'pulse' },
    { src: quantum, alt: 'quantum' },
    { src: echo, alt: 'echo' },
  ];

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
