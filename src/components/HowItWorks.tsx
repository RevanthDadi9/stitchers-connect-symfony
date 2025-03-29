
import React from 'react';
import { Search, Ruler, Clock, Package, UserPlus, ShoppingBag, CreditCard, TrendingUp } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const customerSteps = [
    {
      icon: <Search className="text-stitch-blue" />,
      title: "Find a Stitcher",
      description: "Browse profiles of expert tailors near you with ratings and reviews."
    },
    {
      icon: <Ruler className="text-stitch-blue" />,
      title: "Customize Your Order",
      description: "Select fabric, provide measurements & communicate your preferences."
    },
    {
      icon: <Clock className="text-stitch-blue" />,
      title: "Track Progress",
      description: "Get real-time updates and chat directly with your tailor."
    },
    {
      icon: <Package className="text-stitch-blue" />,
      title: "Receive Your Outfit",
      description: "Get your perfectly-fitted outfit delivered to your doorstep."
    }
  ];

  const stitcherSteps = [
    {
      icon: <UserPlus className="text-stitch-blue" />,
      title: "Create Your Profile",
      description: "Showcase your expertise, portfolio & availability to customers."
    },
    {
      icon: <ShoppingBag className="text-stitch-blue" />,
      title: "Receive Orders",
      description: "Get matched with nearby customers looking for your skills."
    },
    {
      icon: <CreditCard className="text-stitch-blue" />,
      title: "Earn Securely",
      description: "Receive secure payments directly to your account."
    },
    {
      icon: <TrendingUp className="text-stitch-blue" />,
      title: "Grow Your Business",
      description: "Expand your reach & build a loyal customer base over time."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            StitchSync makes connecting stitchers and customers simple and efficient.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-stitch-blue mb-8 text-center">For Customers</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customerSteps.map((step, index) => (
              <div key={`customer-${index}`} className="step-card relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-stitch-blue text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="mb-4 bg-stitch-pink bg-opacity-30 w-14 h-14 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2 text-stitch-blue">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-stitch-blue mb-8 text-center">For Stitchers</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stitcherSteps.map((step, index) => (
              <div key={`stitcher-${index}`} className="step-card relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-stitch-blue text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="mb-4 bg-stitch-pink bg-opacity-30 w-14 h-14 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2 text-stitch-blue">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
