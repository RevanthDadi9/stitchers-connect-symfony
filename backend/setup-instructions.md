
# StitchSync Backend Setup Instructions

Follow these steps to set up the Express backend for StitchSync:

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB or PostgreSQL (optional)

## Setup Steps

1. Create a new directory for the backend outside your React project:
```bash
mkdir stitchsync-backend
cd stitchsync-backend
```

2. Initialize a new Node.js project:
```bash
npm init -y
```

3. Install required dependencies:
```bash
npm install express cors mongoose dotenv bcryptjs jsonwebtoken
npm install -D nodemon
```

4. Create a server.js file:
```javascript
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Define routes
app.use('/api/services', require('./routes/services'));

// Basic route
app.get('/', (req, res) => {
  res.send('StitchSync API is running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

5. Create folder structure:
```bash
mkdir routes controllers models middleware config
```

6. Create routes/services.js:
```javascript
const express = require('express');
const router = express.Router();
const { 
  getServices,
  getServiceById,
  createService,
  updateService,
  deleteService
} = require('../controllers/services');

router.route('/').get(getServices).post(createService);
router.route('/:id').get(getServiceById).put(updateService).delete(deleteService);

module.exports = router;
```

7. Create controllers/services.js:
```javascript
// @desc    Get all services
// @route   GET /api/services
// @access  Public
exports.getServices = (req, res) => {
  // For now, return mock data
  const services = [
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
  
  res.status(200).json(services);
};

// @desc    Get service by ID
// @route   GET /api/services/:id
// @access  Public
exports.getServiceById = (req, res) => {
  // Mock data retrieval
  const services = [
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
    }
  ];
  
  const service = services.find(s => s.id === parseInt(req.params.id));
  
  if (!service) {
    return res.status(404).json({ message: 'Service not found' });
  }
  
  res.status(200).json(service);
};

// @desc    Create new service
// @route   POST /api/services
// @access  Private/Admin
exports.createService = (req, res) => {
  // Mock service creation
  const { name, description, price, estimatedTime } = req.body;
  
  if (!name || !description || !price) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }
  
  const newService = {
    id: 5, // In a real app, this would be created by the database
    name,
    description,
    price,
    estimatedTime
  };
  
  res.status(201).json(newService);
};

// @desc    Update service
// @route   PUT /api/services/:id
// @access  Private/Admin
exports.updateService = (req, res) => {
  // Mock update
  res.status(200).json({ id: req.params.id, ...req.body });
};

// @desc    Delete service
// @route   DELETE /api/services/:id
// @access  Private/Admin
exports.deleteService = (req, res) => {
  // Mock deletion
  res.status(200).json({ success: true, message: 'Service deleted' });
};
```

8. Update package.json:
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

9. Create a .env file:
```
PORT=5000
```

10. Start the server:
```bash
npm run dev
```

## Connecting to the Frontend

In the React frontend, update the ServicesList component to use the real API:

```typescript
// In the useEffect of ServicesList.tsx
const fetchServices = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/services');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    setServices(data);
    setLoading(false);
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
```

## Next Steps
1. Implement database connection
2. Add user authentication
3. Create other routes (stitchers, orders)
4. Add validation middleware
5. Implement error handling
