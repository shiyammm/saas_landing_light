import Image, { StaticImageData } from 'next/image';
import React from 'react';

type TestimonialType = {
  name: string;
  username: string;
  img: StaticImageData;
  statement: string;
};

type TestimonialCardsProps = {
  testimonials: TestimonialType[];
  className?: string;
};

const TestimonialCards = ({
  testimonials,
  className,
}: TestimonialCardsProps) => {
  return (
    <div className={`space-y-5 ${className} flex-col`}>
      {testimonials.map((testimonial) => (
        <div
          className={`p-10 rounded-2xl shadow-xl border border-gray-200/50 space-y-4 max-w-80`}
          key={testimonial.username}
        >
          <p className="text-start font-medium">{testimonial.statement}</p>
          <div className="flex items-center gap-4 text-md tracking-tighter font-semibold">
            <Image
              src={testimonial.img}
              alt="profile-picture"
              className="size-10"
            />
            <div className="text-start">
              <h4>{testimonial.name}</h4>
              <span className="">{testimonial.username}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCards;
