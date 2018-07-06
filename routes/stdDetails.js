var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var data = { 
		name: 'Narendra',
		age: 29,
		phone: 9494931945
	};
	data = JSON.stringify(data);
	res.send(data);
	
});

module.exports = router;
