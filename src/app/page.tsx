import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marque from '@/components/Marque';
import ProductShowcase from '@/components/ProductShowcase';
import Pricing from '@/components/Pricing';
import React from 'react';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <Marque />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
};

export default page;
