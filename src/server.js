const express = require('express'); //commonjs
const configViewEngine = require('./config/viewEngine');



// import express from 'express'; //es modules
const app = express(); // app express
require('dotenv').config() // import dotenv
const webRoutes = require('./routes/web');
//import connection from config/database
const connection = require('./config/database');

const port = process.env.PORT || 8888; // port => hardcode
const hostname = process.env.HOST_NAME;

//config template engine  
//config static files
configViewEngine(app);

//config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

// Khai báo route
app.use('/', webRoutes);


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
})