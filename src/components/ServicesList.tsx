
import React from 'react';
import { Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useQuery } from '@tanstack/react-query';
import { fetchServices, type Service } from '../api/services';

const ServicesList = () => {
  const { data: services, isLoading, error } = useQuery({
    queryKey: ['services'],
    queryFn: fetchServices,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-stitch-blue" />
      </div>
    );
  }

  if (error) {
    toast({
      title: "Error",
      description: "Failed to load services. Please try again later.",
      variant: "destructive",
    });
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {services && services.map((service) => (
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
