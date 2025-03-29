
const express = require('express');
const cors = require('cors');
const servicesRoutes = require('./routes/services');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/services', servicesRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('StitchSync API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
