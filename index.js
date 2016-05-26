var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/trucks', function(req, res){

  var url = 'http://offthegrid.com/event/2/';
  
  request(url, function(error, response, html){

    if (!error){      
      var $ = cheerio.load(html);
      var trucksArr = [];  
      var $trucks = $('.vendors-grid');

      // $trucks.each(function(index) {
      //   trucksArr.push($(this).text());
      // });
    }

    res.send(trucks);
  
  });
});

app.listen(process.env.PORT || 3000, function() {
  console.log('Listening...'); 
});
