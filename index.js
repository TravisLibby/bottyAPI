var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

// routes
var trucksRouter = require('./routes/trucksRouter');

// middleware
app.use('/trucks', trucksRouter);

// run the app
app.listen(process.env.PORT || 3000, function() {
  console.log('Listening...'); 
});
