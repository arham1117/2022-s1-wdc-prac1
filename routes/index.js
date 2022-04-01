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

router.get('/contact.ajax', function (req, res, next) {
  const email = `<a href="https://www.nyan.cat/">link</a>`;
  res.send(email);
});

router.get('/search.ajax', function (req, res, next) {
  const search = `<input type = "text"><button>search</button>`;
  res.send(search);
});

var flag = 0;
router.get('/accept', function (req, res, next) {
  flag = 1;
  res.status(200).end();
});

router.get('/content.ajax', function (req, res, next) {
  if(flag==0){
    res.status(403);
  }
  else{
    const paragraphs = `<p> Para 1 </p> <p> Para 2 </p>`;
    res.send(paragraphs);
  }

});

var images = [
  { uri:'photo-1539154444419-e31272d30a31.jpg', description:'medium-coated black-and-white dog near grass during daytime' },
  { uri:'photo-1553882809-a4f57e59501d.jpg',    description:'black and tan Belgian dog' },
  { uri:'photo-1554196721-b507d7e86ee9.jpg',    description:'gray dog standing on grass' },
  { uri:'photo-1555661059-7e755c1c3c1d.jpg',    description:'black dog behind plants' },
  { uri:'photo-1555991415-1b04a71f18c5.jpg',    description:'adult white Samoyed beside man and woman' },
  { uri:'photo-1558121591-b684092bb548.jpg',    description:'white and black dog lying on sofa' },
  { uri:'photo-1559440165-065646588e9a.jpg',    description:'person holding dog leash short-coat black and white dog' },
  { uri:'photo-1560160643-7c9c6cb07a8b.jpg',    description:'short-coated brown and white dog' },
  { uri:'photo-1562220058-1a0a019ab606.jpg',    description:'pet dog laying on sofa' },
  { uri:'photo-1565194481104-39d1ee1b8bcc.jpg', description:'short-coated gray dog' }
];

var imagecounter = 0;
router.get('/images.json', function (req, res, next) {
  res.json(images[imagecounter]);
  imagecounter++;
  if(imagecounter ==10){
    imagecounter = 0;
  }
});




module.exports = router;

