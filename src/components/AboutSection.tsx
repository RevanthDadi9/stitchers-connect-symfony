
import React from 'react';
import { Scissors, Thread, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="section-title">About StitchSync</h2>
          <p className="section-subtitle">
            StitchSync is a platform that connects talented women stitchers with customers looking for quality custom tailoring. 
            We provide a seamless ordering experience while empowering skilled women to earn and grow their business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="feature-card text-center">
            <div className="mx-auto bg-stitch-pink w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Thread size={30} className="text-stitch-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-stitch-blue">Quality Craftsmanship</h3>
            <p className="text-gray-600">
              Connect with skilled stitchers who provide exceptional quality and attention to detail.
            </p>
          </div>
          
          <div className="feature-card text-center">
            <div className="mx-auto bg-stitch-pink w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Users size={30} className="text-stitch-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-stitch-blue">Women Empowerment</h3>
            <p className="text-gray-600">
              Supporting women stitchers by providing them with a platform to showcase their skills and grow their business.
            </p>
          </div>
          
          <div className="feature-card text-center">
            <div className="mx-auto bg-stitch-pink w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Scissors size={30} className="text-stitch-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-stitch-blue">Custom Solutions</h3>
            <p className="text-gray-600">
              Get personalized tailoring solutions that fit your style, preferences, and measurements perfectly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
