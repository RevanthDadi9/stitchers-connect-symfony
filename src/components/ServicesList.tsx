
import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  estimatedTime: string;
}

const ServicesList = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        // This would be replaced with a real API call once backend is set up
        // For now, we'll use mock data
        const mockServices = [
          {
            id: 1,
            name: "Custom Dress Stitching",
            description: "Get your dress custom-made according to your measurements and design preferences.",
            price: 75,
            estimatedTime: "7-10 days"
          },
          {
            id: 2,
            name: "Alterations & Repairs",
            description: "Quick and precise alterations to make your clothes fit perfectly or repair damaged items.",
            price: 35,
            estimatedTime: "2-3 days"
          },
          {
            id: 3,
            name: "Embroidery",
            description: "Beautiful custom embroidery to personalize your clothing and accessories.",
            price: 45,
            estimatedTime: "3-5 days"
          },
          {
            id: 4,
            name: "Wedding Dress Tailoring",
            description: "Expert tailoring for wedding dresses to ensure the perfect fit for your special day.",
            price: 120,
            estimatedTime: "14-21 days"
          }
        ];

        // Simulate API delay
        setTimeout(() => {
          setServices(mockServices);
          setLoading(false);
        }, 1000);

        // When real API is ready, use this:
        // const response = await fetch('http://localhost:5000/api/services');
        // const data = await response.json();
        // setServices(data);
        // setLoading(false);
      } catch (error) {
        console.error('Error fetching services:', error);
        toast({
          title: "Error",
          description: "Failed to load services. Please try again later.",
          variant: "destructive",
        });
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-stitch-blue" />
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {services.map((service) => (
        <div key={service.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-stitch-blue">{service.name}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
          <div className="flex justify-between items-center">
            <span className="font-medium text-lg">${service.price}</span>
            <span className="text-sm text-gray-500">Est. Time: {service.estimatedTime}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;
