import React from 'react';
import PriceCards from './PriceCards';
import { priceDetails } from '@/constants/data';

const Pricing = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container">
        <div className="flex justify-center flex-col space-y-6 items-center ">
          <h3 className="text-3xl md:text-5xl xl:text-6xl  tracking-tighter text-center gradient-text font-bold">
            Pricing
          </h3>
          <p className="text-xl font-medium text-center text-[#010D3E] md:max-w-lg">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
          <div className="space-y-6 xl:flex xl:space-y-0 lg:items-end gap-5">
            {priceDetails.map((price) => (
              <PriceCards price={price} key={price.version} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
