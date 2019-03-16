var express = require('express');
var axios = require('axios');
var router = express.Router();

router.get('/', function(req, res, next) {
  axios.get('https://deploy-test-20.herokuapp.com/').then(function(apiResponse){
	  res.json({ message: `WEB OK AND ${apiResponse.data.message}` });
  }).catch(function(err){
	  next(err);
  });
});

module.exports = router;
