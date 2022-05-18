var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


var data =[];
var postcount =0;

router.post('/addpost', function (req, res, next) {
 // data[postcount] =  {"title":req.body.title, "content":req.body.content};
  //postcount++;
  res.end();


});


router.get('/getposts', function (req, res, next) {
  //data.reverse();
  res.send(data);

});

module.exports = router;
