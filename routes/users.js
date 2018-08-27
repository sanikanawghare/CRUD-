var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
//  });

router.post('/', function(req, res, next) {
  //console.log('calling inside function');
  console.log(req.body);
  var fs = require('fs');
const productDetails = JSON.stringify(req.body);
console.log(productDetails);

fs.appendFile("/home/sanikanawghare/DayUser/Project/testproject/public/list.json", productDetails+"\n", function (err) {
  if (err) {
      return console.log(err);
  }

  console.log("The file was saved!");
});
fs.readFile('/home/sanikanawghare/DayUser/Project/testproject/public/list.json','utf8',function read(err, data) {
  if (err) {
      throw err;
  }
  // const productDetails1 = data;
  res.json(data);
  console.log( "Product Details" +data);
  
});

});

module.exports = router;
