const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');
// const getData = require('./js/script.js');
// app.set('view engine', 'ejs');

const app = express();

const cors = require('cors');

app.get('/', function(req, res) {
    res.send('<h1>Hello World!</h1>');
});

app.use(cors());

app.listen(3000, function() {
    console.log('Port 3000');
});