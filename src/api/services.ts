
import { toast } from "@/hooks/use-toast";

export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  estimatedTime: string;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const fetchServices = async (): Promise<Service[]> => {
  try {
    const response = await fetch(`${API_URL}/services`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching services:', error);
    toast({
      title: "Error",
      description: "Failed to load services. Please try again later.",
      variant: "destructive",
    });
    return [];
  }
};

export const getServiceById = async (id: number): Promise<Service | null> => {
  try {
    const response = await fetch(`${API_URL}/services/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching service ${id}:`, error);
    toast({
      title: "Error",
      description: `Failed to load service details. Please try again later.`,
      variant: "destructive",
    });
    return null;
  }
};
