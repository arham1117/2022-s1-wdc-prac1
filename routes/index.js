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


module.exports = router;
