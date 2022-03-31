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

const colorarray=[];
colorarray[0]='red';
colorarray[1]='yellow';
colorarray[2]='green';
colorarray[3]='blue';
var colorcounter=0;

router.get('/color.html', function (req, res, next) {

    res.send(`<!DOCTYPE html>
        <html lang = "en">
        <head>
              <title>3-2</title>
        </head>
        <body>
            <h1 id= "heading" style="color:${colorarray[colorcounter]}" >${colorarray[colorcounter]}</h1>
        </body>

        </html>`);
        colorcounter++;
    if(colorcounter==4){
      colorcounter=0;
    }


});


const logarray = [];
var logcounter = 0;

router.get('/log.html', function (req, res, next) {
  const d = new Date();
  logarray.length = logcounter+1;

  for (let i = logcounter; i < logarray.length; i ++){
    logarray[i]= '<li>' + d +  '</li>' ;
  }

  let logstring = logarray.join(" ");
  let finallogstring = '<ul>' + logstring +  '</ul>' ;

  res.send(`<!DOCTYPE html>
  <html lang = "en">
  <head>
        <title>3-3</title>
  </head>
  <body>
    ${finallogstring}

  </body>

  </html>`);

  logcounter++;

});


module.exports = router;