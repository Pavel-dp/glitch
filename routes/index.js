var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Главная' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'О нас' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Контакты' });
});


module.exports = router;
