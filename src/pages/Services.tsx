
import React from 'react';
import NavBar from '../components/NavBar';
import ServicesList from '../components/ServicesList';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <div className="py-20 bg-stitch-beige">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-stitch-blue">
            Our Services
          </h1>
          <ServicesList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
