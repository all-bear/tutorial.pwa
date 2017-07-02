var express = require('express');
var router = express.Router();
var HillItem = require('../models/hill-item');

router.get('/top', function(req, res, next) {
  res.json(HillItem.getTop() || {});
});

router.post('/top', function(req, res, next) {
  var hillItem = req.body.item;

  HillItem.setTop(hillItem);

  res.json(hillItem);
});

module.exports = router;
