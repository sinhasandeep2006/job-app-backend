const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routers/userRouter');

dotenv.config();

const app = express();
app.use(cors({
    origin: 'https://job-app-forntend.vercel.app', // Replace with your frontend's URL
    methods: ['GET', 'POST'],
    credentials: true,
  }));
app.use(express.json());
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
});

// Routes
app.use('/', userRoutes);

// Static folder for uploads
app.use('/uploads', express.static('uploads'));

module.exports = app;
