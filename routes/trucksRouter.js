var express = require('express');
var trucksRouter = express.Router();

trucksRouter.route('/')
  .get(function() {
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