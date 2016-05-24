var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/trucks', function(req, res){

  var url = 'http://offthegrid.com/wp-admin/admin-ajax.php?action=otg_market&delta=0&market=2&event=0';
  
  request(url, function(error, response, html){

    if (!error){      
      var $ = cheerio.load(html);
      var trucksArr = [];  
      var $trucks = $('.otg-market-data-vendors-names').first().children();

      $trucks.each(function(index) {
        trucksArr.push($(this).text());
      });
    }

    res.send(trucksArr);
  
  });
});

app.listen(process.env.PORT || 3000, function() {
  console.log('Listening on port 8081...'); 
});
