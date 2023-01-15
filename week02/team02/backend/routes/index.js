const express = require('express');

const professionalController = require('../controllers/index');

const router = express.Router();

// Get /feed/posts
router.get('/', professionalController.getData);
// localhost: 8080/professional
module.exports = router;