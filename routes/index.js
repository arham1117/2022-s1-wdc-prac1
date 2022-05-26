var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;



router.get('/result', function(req, res, next) {
  req.pool.getConnection(function(err,connection){
    if(err){
      res.sendStatus(500);
      return;
    }
    let query = "SELECT first_name,last_name FROM actor;";
    connection.query(query,function(err,rows,fields){
      connection.release();
      if(err){
        res.sendStatus(500);
        return;
      }
      res.json(rows);
    });
  });
});

router.post('/addactor', function(req, res, next) {
  req.pool.getConnection(function(err,connection){
    if(err){
      res.sendStatus(500);
      return;
    }
    let query = "INSERT INTO actor (first_name, last_name) VALUES(?,?);";
    connection.query(query,[req.body.first_name,req.body.last_name], function(err,rows,fields){
      connection.release();
      if(err){
        res.sendStatus(500);
        return;
      }
      res.end();
    });
  });
});