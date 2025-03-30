
import { toast } from "@/hooks/use-toast";

export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  estimatedTime: string;
}

// Mock data that mirrors what the backend would return
const mockServices: Service[] = [
  {
    id: 1,
    name: "Custom Dress Stitching",
    description: "Get your dress custom-made according to your measurements and design preferences. We use high-quality fabrics and ensure precise fitting for maximum comfort and style. Our experienced stitchers take care of every detail to create the perfect dress for any occasion.",
    price: 75,
    estimatedTime: "7-10 days"
  },
  {
    id: 2,
    name: "Alterations & Repairs",
    description: "Quick and precise alterations to make your clothes fit perfectly or repair damaged items. Whether you need to adjust the size, fix a tear, or replace a zipper, our skilled stitchers can restore your garments to their original condition or better.",
    price: 35,
    estimatedTime: "2-3 days"
  },
  {
    id: 3,
    name: "Embroidery",
    description: "Beautiful custom embroidery to personalize your clothing and accessories. Add names, initials, or decorative patterns to make your items unique. Our stitchers are skilled in various embroidery techniques to create stunning results.",
    price: 45,
    estimatedTime: "3-5 days"
  },
  {
    id: 4,
    name: "Wedding Dress Tailoring",
    description: "Expert tailoring for wedding dresses to ensure the perfect fit for your special day. We understand the importance of your wedding dress and provide meticulous attention to detail for alterations and customizations that preserve the beauty of your gown.",
    price: 120,
    estimatedTime: "14-21 days"
  }
];

export const fetchServices = async (): Promise<Service[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return [...mockServices];
};

export const getServiceById = async (id: number): Promise<Service | null> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  const service = mockServices.find(s => s.id === id);
  return service || null;
};

export const createService = async (serviceData: Omit<Service, "id">): Promise<Service> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const newId = Math.max(...mockServices.map(s => s.id)) + 1;
  const newService = { ...serviceData, id: newId };
  
  // Add to mock database
  mockServices.push(newService);
  
  toast({
    title: "Success",
    description: "Service created successfully",
  });
  
  return newService;
};

export const updateService = async (id: number, serviceData: Partial<Service>): Promise<Service> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const index = mockServices.findIndex(s => s.id === id);
  if (index === -1) {
    toast({
      title: "Error",
      description: "Service not found",
      variant: "destructive",
    });
    throw new Error("Service not found");
  }
  
  const updatedService = { ...mockServices[index], ...serviceData };
  mockServices[index] = updatedService;
  
  toast({
    title: "Success",
    description: "Service updated successfully",
  });
  
  return updatedService;
};

export const deleteService = async (id: number): Promise<void> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const index = mockServices.findIndex(s => s.id === id);
  if (index === -1) {
    toast({
      title: "Error",
      description: "Service not found",
      variant: "destructive",
    });
    throw new Error("Service not found");
  }
  
  mockServices.splice(index, 1);
  
  toast({
    title: "Success",
    description: "Service deleted successfully",
  });
};
