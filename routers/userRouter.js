const express = require('express');
const multer = require('multer');
const User = require('../models/User');

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// Route to handle user signup
router.post('/signup', upload.single('resume'), async (req, res) => {
    const { name, email, phone } = req.body;
    const resume = req.file ? req.file.path : null; 

    try {
        const newUser = new User({ name, email, phone, resume });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully!' });
        alert("user is created")
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Error registering user', error });
        alert("Error registering user")
    }
});


module.exports = router;