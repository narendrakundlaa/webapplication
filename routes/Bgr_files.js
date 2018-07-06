var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var data = {
		"userFiles": [
		{
			"name" : "Mr.Perfect",
			"ticket": "150",
			"time": "11AM",
			"image": "image/Mr._Perfect_poster.jpg"
		},
		{

			"name" : "kaidi",
			"ticket": "150",
			"time": "2PM",
			"image": "image/kaidi.jpg"
		}
		]
	};
	data = JSON.stringify(data);
	setTimeout(function(){
		 res.send(data);
		},5000);
 
});

module.exports = router;
