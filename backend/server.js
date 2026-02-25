const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow all origins for dev
// app.use(cors({
//     origin: 'http://localhost:3001',
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     credentials: true
// }));
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Routes
const contactRoutes = require('./routes/contact');
app.use('/api/contact', contactRoutes);

const adminRoutes = require('./routes/admin');
app.use('/api', adminRoutes); // Mounts at /api/admin/login, /api/admin/dashboard, etc. AND /api/members/add if we split, but here I put valid paths in admin.js
// Actually let's check pathing in admin.js. 
// It has router.post('/login') -> /api/admin/login if mounted at /api/admin
// It has router.post('/add') -> /api/admin/add which is weird for public.
// Let's refactor admin.js to handle paths better or mount broadly.
// I'll mount at /api and ensure admin.js has full paths or sub-routers.
// Wait, better to split or careful mounting. 
// Let's look at admin.js content again.


// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/anjuman')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
