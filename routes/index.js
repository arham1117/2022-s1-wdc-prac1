var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

const datearray = [];
datearray[0] = '';
var counter = 0;
router.get('/last.txt', function (req, res, next) {
  //let d = Date.now();
  res.send(String(datearray[counter]));
  const date = new Date();
  datearray[counter + 1] = date;
  counter++;

});

const colorarray = [];
colorarray[0] = 'red';
colorarray[1] = 'yellow';
colorarray[2] = 'green';
colorarray[3] = 'blue';
var colorcounter = 0;

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
  if (colorcounter == 4) {
    colorcounter = 0;
  }


});


const logarray = [];
var logcounter = 0;

router.get('/log.html', function (req, res, next) {
  const d = new Date();
  logarray.length = logcounter + 1;

  for (let i = logcounter; i < logarray.length; i++) {
    logarray[i] = '<li>' + d + '</li>';
  }

  let logstring = logarray.join(" ");
  let finallogstring = '<ul>' + logstring + '</ul>';

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

const newcolorarray = [];
newcolorarray[0] = 'red';
newcolorarray[1] = 'yellow';
newcolorarray[2] = 'green';
newcolorarray[3] = 'blue';
var newcolorcounter = 0;

router.get('/color.txt', function (req, res, next) {

  res.send(String(newcolorarray[newcolorcounter]));
  newcolorcounter++;
  if (newcolorcounter == 4) {
    newcolorcounter = 0;
  }

});


const newlogarray = [];
var newlogcounter = 0;

router.get('/log.json', function (req, res, next) {
  const date = new Date();
  newlogarray.length = newlogcounter + 1;

  for (let i = newlogcounter; i < newlogarray.length; i++) {
    newlogarray[i] = date;

  }

  let newlogstring = newlogarray.toString();

  let newfinallogstring = [
    newlogstring
  ];
  res.json(newfinallogstring);

  newlogcounter++;

});

//href= "https://www.nyan.cat/"
router.get('/contact.ajax', function (req, res, next) {
  const email = `<a>email</a>`;
  res.send(email);
});

router.get('/search.ajax', function (req, res, next) {
  const search = `<input></input><button>search</button>`;
  res.send(search);
});


module.exports = router;

