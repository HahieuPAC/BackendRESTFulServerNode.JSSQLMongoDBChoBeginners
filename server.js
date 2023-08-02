const express = require('express'); //commonjs
// import express from 'express'; //es modules
const app = express(); // app express
const port = 8080; // port

// Khao báo route
app.get('/', (req, res) => {
    res.send('this is home page');
})

app.get('/abc', (req, res) => {
    res.send('this is abc page');
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})