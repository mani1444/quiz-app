const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/student/signup', authController.studentSignup);
router.post('/student/login', authController.studentLogin);
router.post('/admin/signup', authController.adminSignup);
router.post('/admin/login', authController.adminLogin);

module.exports = router;
