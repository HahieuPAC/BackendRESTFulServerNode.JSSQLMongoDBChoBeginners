const express = require('express'); //commonjs
const path = require('path'); //commonjs
// import express from 'express'; //es modules
const app = express(); // app express
require('dotenv').config() // import dotenv

const port = process.env.PORT || 8888; // port => hardcode
const hostname = process.env.HOSTNAME;


//config static files
app.use(express.static(path.join(__dirname, 'public')))

console.log('check path static',path.join(__dirname, 'public'));
//config template engine    
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// Khai báo route
app.get('/', (req, res) => {
    res.send('this is home page');
})

app.get('/sample', (req, res) => {
    res.render('sample');   
})


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
})