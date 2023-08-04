const {getHomePage, getSample, postCreateUser, getCreatePage} = require ('../controllers/homeController');
const express = require('express')
const router = express.Router()

// middleware that is specific to this router

router.get('/', getHomePage);

router.get('/sample', getSample);

router.get('/create', getCreatePage);

router.post('/create-user', postCreateUser);
module.exports = router;