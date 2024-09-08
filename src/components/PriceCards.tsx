import React from 'react';
import { IoCheckmark } from 'react-icons/io5';

type priceDetailsType = {
  version: string;
  cost: string;
  isFree: boolean;
  isPopular: boolean;
  access: string[];
  isInverse: boolean;
};

const PriceCards = ({ price }: { price: priceDetailsType }) => {
  const { version, cost, isFree, isPopular, access, isInverse } = price;

  return (
    <div
      className={`w-[17rem] p-8 rounded-2xl shadow-xl border border-black/10 ${
        isInverse && 'bg-black text-white'
      }`}
    >
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h4
            className={`text-md font-bold text-black/50 ${
              isInverse && 'text-white/50'
            }`}
          >
            {version}
          </h4>
          {isPopular && (
            <div>
              <button className="text-sm px-2 py-1 rounded-xl border border-gray-200/50 gradient_tag font-semibold">
                Most popular
              </button>
            </div>
          )}
        </div>
        <div className="flex gap-1 items-center">
          <span className=" text-2xl font-bold tracking-tighter">${cost}</span>
          <span
            className={`font-semibold text-sm  text-black/50 ${
              isInverse && 'text-white/50'
            }`}
          >
            /month
          </span>
        </div>
        <button
          className={`p-2 rounded-lg text-sm w-full font-medium btn ${
            isInverse ? 'btn-secondary' : 'btn-primary'
          }`}
        >
          {isFree ? 'Get it for free' : 'Sign up now'}
        </button>
        <div className="space-y-4">
          {access.map((feat) => (
            <div key={feat} className="text-[0.8rem] flex gap-2 items-center ">
              <IoCheckmark size={20} />
              <p className="tracking-tight">{feat}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceCards;
