var modules = require('./modules/module3');

var express = require('express');
var path = require('path');
var port = 3000;

var app = express();

app.use(express.static('public'));

app.get('/balance', function(req, res){
  console.log('responding to GET request');
  console.log(modules.accountBal());
  res.send(modules.accountBal() + modules.functionMath());
})



app.listen(port, function(){
  console.log('now listening on port', port);
})
