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

const p3 = [];

router.post('/combine', function (req, res, next) {
  const p1 = req.body.lines;
  const p2 = req.body.suffix;

  for(var i = 0; i < p1.length; i++){
    p3.push(p1[i] + p2);
 }
  let text = p3.join('\n');
  res.send(text);

});

var cookiecounter =0;
var val= 1;

router.get('/cookie', function (req, res, next) {

  if(cookiecounter ==0){
    res.cookie('task3_1',  1);
    cookiecounter++;
  }else{
    val++;
    res.cookie('task3_1', val);
  }

  res.end();


});



module.exports = router;
