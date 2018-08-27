var express = require('express');
var router = express.Router();
const fs = require('fs');
router.get('/', function (req, res, next) {
    res.render('productList.html');

});
router.post('/', function (req, res, next) {
    res.render('productList.html');

});
// router.get('/productList',function (req, res, next) {

//     fs.readFile('./list.json','utf-8', function read(err, data) {
//         if (err) {
//             throw err;
//         }
//          res.json(JSON.parse(data));      
//       });

     
// });


module.exports = router;