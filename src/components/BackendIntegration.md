
# Backend Integration Plan for StitchSync

This document outlines the plan for integrating a Node.js/Express backend with the StitchSync frontend React application.

## Backend Structure

```
backend/
├── controllers/    # Route handlers
│   ├── services.js
│   ├── stitchers.js
│   └── orders.js
├── models/         # Data models
│   ├── Service.js
│   ├── Stitcher.js
│   └── Order.js
├── routes/         # API routes
│   ├── services.js
│   ├── stitchers.js
│   └── orders.js
├── middleware/     # Custom middleware
│   ├── auth.js
│   └── error.js
├── config/         # Configuration files
│   └── db.js
├── server.js       # Main entry point
└── package.json    # Dependencies
```

## API Endpoints

### Services
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get service by ID
- `POST /api/services` - Create new service (admin only)
- `PUT /api/services/:id` - Update service (admin only)
- `DELETE /api/services/:id` - Delete service (admin only)

### Stitchers
- `GET /api/stitchers` - Get all stitchers
- `GET /api/stitchers/:id` - Get stitcher by ID
- `POST /api/stitchers` - Register new stitcher
- `PUT /api/stitchers/:id` - Update stitcher profile
- `DELETE /api/stitchers/:id` - Delete stitcher profile

### Orders
- `GET /api/orders` - Get all orders (admin or stitcher view)
- `GET /api/orders/user` - Get current user's orders
- `GET /api/orders/:id` - Get order by ID
- `POST /api/orders` - Create new order
- `PUT /api/orders/:id` - Update order status
- `DELETE /api/orders/:id` - Cancel order

## Implementation Steps

1. Set up Node.js/Express server
2. Configure MongoDB/PostgreSQL database
3. Create data models
4. Implement API routes and controllers
5. Add authentication middleware
6. Connect frontend to backend API
7. Deploy backend to a hosting service

## Frontend Integration

The frontend will use React Query to fetch data from the backend. API calls will be organized in a separate folder:

```
src/
├── api/
│   ├── services.ts
│   ├── stitchers.ts
│   └── orders.ts
```

## Next Steps

1. Create the backend folder outside the React project
2. Install necessary dependencies
3. Set up the Express server
4. Implement the first API endpoint (services)
5. Connect the frontend to fetch real data
