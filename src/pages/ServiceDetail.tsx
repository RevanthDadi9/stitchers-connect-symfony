
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getServiceById } from '../api/services';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Loader2, ArrowLeft } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const serviceId = parseInt(id || '0');

  const { data: service, isLoading } = useQuery({
    queryKey: ['service', serviceId],
    queryFn: () => getServiceById(serviceId),
    enabled: !!serviceId,
  });

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <div className="py-20 bg-stitch-beige">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="mb-6">
            <Link to="/services">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Back to Services
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="h-8 w-8 animate-spin text-stitch-blue" />
            </div>
          ) : service ? (
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-stitch-blue">
                {service.name}
              </h1>
              <div className="mb-8">
                <p className="text-gray-700 text-lg mb-6">{service.description}</p>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-gray-500 text-sm">Estimated Time</p>
                    <p className="font-medium text-lg">{service.estimatedTime}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Price</p>
                    <p className="font-bold text-2xl text-stitch-blue">${service.price}</p>
                  </div>
                  <Button className="bg-stitch-blue hover:bg-stitch-lightblue text-white">
                    Book This Service
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Service not found</p>
              <Link to="/services" className="text-stitch-blue hover:underline mt-4 inline-block">
                Browse all services
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
