var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/trucks', function(req, res){

  var url = 'http://offthegrid.com/otg-api/passthrough/markets/2.json/';
  var trucks = [];
  request(url, function(err, data) {
    console.log(typeof data);
    data = JSON.parse(data.body);
    data.MarketDetail.Events[0].Vendors.forEach(function(value, index) {
      trucks.push(value.name);
    });
    res.send(trucks);
  });
  
});

app.listen(process.env.PORT || 3000, function() {
  console.log('Listening...'); 
});
