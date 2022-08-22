var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/index.ejs', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about.ejs', function(req, res, next) {
  res.render('about.ejs', { title: 'Express' });
});
router.get('/services.ejs', function(req, res, next) {
  res.render('services.ejs', { title: 'Express' });
});
router.get('/packages.ejs', function(req, res, next) {
  res.render('packages.ejs', { title: 'Express' });
});
router.get('/contact.ejs', function(req, res, next) {
  res.render('contact.ejs', { title: 'Express' });
});
router.get('/booking.ejs', function(req, res, next) {
  res.render('booking.ejs', { title: 'Express' });
});
module.exports = router;
