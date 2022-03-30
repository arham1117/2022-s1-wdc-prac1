var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


const datearray=[];
datearray[0]= '';
var counter = 0;
router.get('/last.txt', function (req, res, next) {
  //let d = Date.now();
  res.send(String(datearray[counter]));
  const date = new Date();
  datearray[counter+1]= date;
  counter++;

});

module.exports = router;
