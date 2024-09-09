import TestimonialCards from '../components/TestimonialCards';
import { firstColumn, secondColumn, thirdColumn } from '@/constants/data';

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="flex items-center justify-center text-center flex-col space-y-8">
          <span className="px-4 py-1 rounded-lg tracking-tighter border border-gray-400/50 text-center text-sm font-semibold">
            Testimonials{' '}
          </span>
          <h5 className="text-center text-3xl md:text-5xl xl:text-6xl tracking-tighter font-bold gradient-text">
            What our users say
          </h5>
          <p className="text-center text-[#010D3E] text-lg font-medium md:max-w-lg">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
          <div className="max-h-[730px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] flex items-center justify-center gap-5">
            <TestimonialCards testimonials={firstColumn} duration={15} />
            <TestimonialCards
              testimonials={secondColumn}
              className="hidden md:block"
              duration={19}
            />
            <TestimonialCards
              testimonials={thirdColumn}
              className="hidden lg:block"
              duration={17}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
