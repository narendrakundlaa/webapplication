var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var data = { 
		"bikes" : [
	
	{
		"name" : "FZ",
		"price" : "99500",
		"color" : "red",
		"image" : "bikes/fz.png"
	},
	{
		"name" : "Pulsar",
		"price" : "86500",
		"color" : "red",
		"image" : "bikes/scooty.jpg"
	},
	{
		"name" : "royal",
		"price" : "105500",
		"color" : "red",
		"image" : "bikes/pulsar.png"
	},
	{
		"name" : "Pulsar",
		"price" : "86500",
		"color" : "red",
		"image" : "bikes/sujiki2.jpg"
	},
	{
		"name" : "scooty",
		"price" : "86500",
		"color" : "red",
		"image" : "bikes/sujiki4.jpg"
	},
	{
		"name" : "Royal",
		"price" : "86500",
		"color" : "red",
		"image" : "bikes/scooty2.jpg"
	},
	{
		"name" : "scooty",
		"price" : "86500",
		"color" : "red",
		"image" : "bikes/bullet.jpg"
	},
	{
		"name" : "Pulsar",	
		"price" : "86500",
		"color" : "red",
		"image" : "bikes/scooty.jpg"
	},
	{
		"name" : "royal",
		"price" : "105500",
		"color" : "red",
		"image" : "bikes/pulsar.png"
	}
	]
};
	data = JSON.stringify(data);
	setTimeout(function(){
		res.send(data);	
	}, 2000); // after 3seconds results dispaly on main page if we need extend time or reduce
	
});

module.exports = router;
