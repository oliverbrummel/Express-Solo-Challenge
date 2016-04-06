var randomNum = require('./module1');

var moneyReadable = function(num){
  return num.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
}

module.exports = moneyReadable;
