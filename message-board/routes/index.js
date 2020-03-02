var express = require('express');
var router = express.Router();

const messages = [
  { text: 'Hi there. First post!', user: 'Jeffrey', posted: new Date() },
  { text: 'Second post!', user: 'Sally', posted: new Date() },
  { text: 'Third post!', user: 'Bianca', posted: new Date() },
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Mini Messageboard',
    messages,
    title2: 'jeff'
  });
});




module.exports = router;
