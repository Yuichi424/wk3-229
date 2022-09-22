var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });//render is to rendering to show user the readable form
});
  router.get('/home', function(req, res, next) {
    res.render('index', { title: 'Home' });
});
  router.get('/about', function(req, res, next) {
    res.render('index', { title: 'About' });
});
  router.get('/Products', function(req, res, next) {
    res.render('index', { title: 'Products' });
});
  router.get('/Services', function(req, res, next) {
    res.render('index', { title: 'Servicies' });
});
  router.get('/Contacts', function(req, res, next) {
    res.render('index', { title: 'Contacts' });
  
});

module.exports = router;
