import React from 'react';
import AboutHero from '../components/AboutHero';
import AboutSection from '../components/AboutSection';
import AboutPopularProduct from '../components/AboutPopularProduct';

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <AboutHero />

      {/* About Section */}
      <AboutSection />

      {/* Popular Products Section */}
      <AboutPopularProduct />
    </div>
  );
};

export default Page;
