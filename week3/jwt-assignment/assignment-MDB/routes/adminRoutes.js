const { Router } = require('express');
const adminMiddleware = require('../middleware/admin');
const { Admin, Course } = require('../db');
const jwt = require('jsonwebtoken');

const router = Router();

router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;

        const existingAdmin = await Admin.findOne({ username });

        if (existingAdmin) {
            throw new Error('Admin with this username already exists');
        }

        await Admin.create({
            username,
            password
        });

        res.json({
            message: 'Admin created successfully'
        });
    } catch (error) {
        res.status(400).json({
            msg: error.message || 'Error creating admin'
        });
    }
});

router.post('/signin', async (req, res) => {
    try {
        const { username, password } = req.body;

        const admin = await Admin.findOne({ username, password });

        if (!admin) {
            throw new Error('Incorrect username or password');
        }

        const token = jwt.sign({ username }, JWT_SECRET);

        res.json({
            token
        });
    } catch (error) {
        res.status(401).json({
            msg: error.message || 'Authentication failed'
        });
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    try {
        const { title, description, imageLink, price } = req.body;

        const newCourse = await Course.create({
            title,
            description,
            imageLink,
            price
        });

        res.json({
            message: 'Course created successfully',
            courseId: newCourse._id
        });
    } catch (error) {
        res.status(400).json({
            msg: error.message || 'Error creating course'
        });
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    try {
        const response = await Course.find({});
        res.json({
            courses: response
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message || 'Error fetching courses'
        });
    }
});

module.exports = router;
