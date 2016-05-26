var express = require('express');
var trucksRouter = express.Router();
var request = require('request');

trucksRouter.route('/')
  .get(function(req, res) {
    var url = 'http://offthegrid.com/otg-api/passthrough/markets/2.json/';
    var trucks = [];
    request(url, function(err, data) {
      console.log(typeof data);
      data = JSON.parse(data.body);
      data.MarketDetail.Events[0].Vendors.forEach(function(value, index) {
        trucks.push('<a href="' + value.website + '">' + value.name + '</a><br>');
      });
      res.send(trucks.join(', '));
    });
  });

  module.exports = trucksRouter;