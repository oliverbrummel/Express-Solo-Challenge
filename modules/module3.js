var randomNum = require('./module1');
var toDollar = require('./module2');

var func1Infunc2 = function(){
  return toDollar(randomNum(100, 1000000));
}

var userMessage = function(){
  return 'Account Balance: \n'
}

exports.functionMath = func1Infunc2;
exports.accountBal = userMessage;

// console.log(func1Infunc2());
