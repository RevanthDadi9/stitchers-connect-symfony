
import React from 'react';
import { CheckCircle, MapPin, Shield, MessageSquare, CreditCard } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <CheckCircle className="text-stitch-blue" size={24} />,
      title: "Verified Stitchers",
      description: "Handpicked skilled tailors with verified credentials and experience."
    },
    {
      icon: <Shield className="text-stitch-blue" size={24} />,
      title: "Easy Order Management",
      description: "Track & manage all your tailoring requests in one place."
    },
    {
      icon: <CreditCard className="text-stitch-blue" size={24} />,
      title: "Secure Payments",
      description: "Fast & reliable transactions with multiple payment options."
    },
    {
      icon: <MapPin className="text-stitch-blue" size={24} />,
      title: "Location-Based Matching",
      description: "Connects you to the nearest tailor for faster service."
    },
    {
      icon: <MessageSquare className="text-stitch-blue" size={24} />,
      title: "Seamless Communication",
      description: "Chat & call within the app for clear requirements."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Key Features</h2>
          <p className="section-subtitle">
            Enjoy a range of features designed to make your tailoring experience seamless.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="flex items-start">
                <div className="mr-4 bg-stitch-pink bg-opacity-30 p-3 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-stitch-blue">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Feature Image Highlight */}
        <div className="mt-20 bg-stitch-beige rounded-2xl overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 flex items-center">
              <div>
                <h3 className="text-2xl font-bold text-stitch-blue mb-4">Personalized Stitching Experience</h3>
                <p className="text-gray-700 mb-6">
                  Get custom-tailored outfits that perfectly match your style and measurements. Our platform makes it easy to communicate your preferences and requirements.
                </p>
                <ul className="space-y-3">
                  {['Personal size measurements', 'Fabric selection assistance', 'Design customization', 'Regular progress updates'].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle size={18} className="text-stitch-blue mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-gray-200 min-h-[300px] flex items-center justify-center">
              <p className="text-gray-500 text-center px-4">App screenshot placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
