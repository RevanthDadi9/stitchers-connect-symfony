
// Mock database for services
const services = [
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

// @desc    Get all services
// @route   GET /api/services
// @access  Public
exports.getServices = (req, res) => {
  res.status(200).json(services);
};

// @desc    Get service by ID
// @route   GET /api/services/:id
// @access  Public
exports.getServiceById = (req, res) => {
  const id = parseInt(req.params.id);
  const service = services.find(s => s.id === id);
  
  if (!service) {
    return res.status(404).json({ message: 'Service not found' });
  }
  
  res.status(200).json(service);
};

// @desc    Create new service
// @route   POST /api/services
// @access  Private/Admin
exports.createService = (req, res) => {
  const { name, description, price, estimatedTime } = req.body;
  
  if (!name || !description || !price) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }
  
  const newId = services.length > 0 ? Math.max(...services.map(s => s.id)) + 1 : 1;
  
  const newService = {
    id: newId,
    name,
    description,
    price,
    estimatedTime
  };
  
  services.push(newService);
  
  res.status(201).json(newService);
};

// @desc    Update service
// @route   PUT /api/services/:id
// @access  Private/Admin
exports.updateService = (req, res) => {
  const id = parseInt(req.params.id);
  const serviceIndex = services.findIndex(s => s.id === id);
  
  if (serviceIndex === -1) {
    return res.status(404).json({ message: 'Service not found' });
  }
  
  const updatedService = {
    ...services[serviceIndex],
    ...req.body,
    id // Ensure ID remains the same
  };
  
  services[serviceIndex] = updatedService;
  
  res.status(200).json(updatedService);
};

// @desc    Delete service
// @route   DELETE /api/services/:id
// @access  Private/Admin
exports.deleteService = (req, res) => {
  const id = parseInt(req.params.id);
  const serviceIndex = services.findIndex(s => s.id === id);
  
  if (serviceIndex === -1) {
    return res.status(404).json({ message: 'Service not found' });
  }
  
  services.splice(serviceIndex, 1);
  
  res.status(200).json({ message: 'Service deleted successfully' });
};
