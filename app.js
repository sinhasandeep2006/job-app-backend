const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routers/userRouter');

dotenv.config();

const app = express();
app.use(cors({
    origin: 'https://job-ap-drab.vercel.app/', // Replace with your frontend's URL
    methods: ['GET', 'POST'],
    credentials: true,
  }));
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://job-ap-drab.vercel.app");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
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
app.use('/api/users', userRoutes);

// Static folder for uploads
app.use('/uploads', express.static('uploads'));

module.exports = app;
