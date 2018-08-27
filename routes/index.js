var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./index.html', { title: 'Express' });
 
});
router.post('/', function(req, res, next) {
  res.render('./index.html', { title: 'Express' });
});

router.get('/productList', function(req, res, next) {
  res.render('./productList.html', { title: 'Express' });
});

// router.post('/productList', function(req, res, next) {
//   res.render('./productList.html', { title: 'Express' });
// });
// fs.readFile('productDetails.txt', function(err, data) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(data);
//   res.end();
// });

// router.use('/writeData',function(req,res,next){
//   console.log(req.body);
// })
// exports.index('/index',function(req,res){
//   res.render('./')
// })
module.exports = router;
