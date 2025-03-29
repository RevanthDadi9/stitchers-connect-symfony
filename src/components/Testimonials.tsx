
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Customer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "I needed my wedding lehenga altered with a tight deadline. StitchSync connected me with an amazing tailor who did a perfect job and delivered on time!",
      rating: 5
    },
    {
      name: "Anita Desai",
      role: "Stitcher",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: "As a professional tailor for 15 years, StitchSync has transformed my business. I now have a steady flow of clients and have increased my income by 40%.",
      rating: 5
    },
    {
      name: "Nisha Patel",
      role: "Customer",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      quote: "Finding a reliable tailor used to be so difficult. With StitchSync, I not only found a skilled stitcher nearby, but also loved the transparent pricing and progress tracking.",
      rating: 4
    }
  ];

  const renderStars = (count: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={18} 
        className={i < count ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="section-title">What People Say</h2>
          <p className="section-subtitle">
            Read what our users have to say about their experience with StitchSync.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
        
        {/* Testimonial Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "5,000+", label: "Happy Customers" },
            { value: "1,200+", label: "Skilled Stitchers" },
            { value: "50+", label: "Cities Covered" },
            { value: "10,000+", label: "Orders Completed" }
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-3xl md:text-4xl font-bold text-stitch-blue mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
