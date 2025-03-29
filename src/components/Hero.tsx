
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-stitch-pink to-stitch-beige py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stitch-blue leading-tight mb-6">
              Empowering Women, One Stitch at a Time!
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Find expert tailors near you for custom stitching with ease. Seamlessly connect, customize, and get high-quality outfits stitched just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-stitch-blue hover:bg-stitch-lightblue text-white font-medium py-6 px-8 rounded-full text-lg shadow-md">
                Get Started
              </Button>
              <Button variant="outline" className="border-stitch-blue text-stitch-blue hover:bg-stitch-blue hover:text-white font-medium py-6 px-8 rounded-full text-lg">
                Join as a Stitcher
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-stitch-darkpink rounded-full opacity-20 blur-3xl"></div>
            <div className="relative bg-white p-4 rounded-2xl shadow-xl transform rotate-3 z-10">
              <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
                <p className="text-gray-500 text-center px-4">Woman sewing image placeholder</p>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-stitch-lightblue rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative wave shape at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,42.7C840,32,960,32,1080,42.7C1200,53,1320,75,1380,85.3L1440,96L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z">
          </path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
