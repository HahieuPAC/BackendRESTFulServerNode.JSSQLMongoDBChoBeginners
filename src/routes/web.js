const {getHomePage, getSample} = require ('../controllers/homeController');
const express = require('express')
const router = express.Router()

// middleware that is specific to this router

router.get('/', getHomePage);

router.get('/sample', getSample);

module.exports = router;