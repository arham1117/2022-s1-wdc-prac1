var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/brew', function (req, res, next) {
  var q = req.query.drink;
  if (q== 'tea'){
    res.send('A delicious cup of tea!');
  }else if (q=='coffee'){
    res.send(418);
  }else{
    res.send(400);
  }

});


const mssg = [];
mssg[0] = 'first';
var counter = 0;

router.post('/pass-it-on', function (req, res, next) {
  var p1 = req.body.message;
  var p2 = req.body.submit;

  if(p1==''){
    res.send(400);
  }else{
    counter++;
    mssg[counter]= p1;
    res.send(mssg[counter-1]);

  }

});


module.exports = router;
