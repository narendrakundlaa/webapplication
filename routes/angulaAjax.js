var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var data = { 
		"Durgaprasad" : [
		{
			"name": "laptop",
			"price": "$300",
			"manu": "SAMSUNG",
			"seller": "Indian Electronics",
			"image": "images/laptop.png",
			"bgClr": "red",
			"locationsAvailable": ["Hyd", "Delhi", "Pune", "India"]
		},
		{
			"name": "Tablet",
			"price": "$300",
			"manu": "SAMSUNG",
			"seller": "Indian Electronics",
			"image": "images/laptop.png",
			"bgClr": "green",
			"locationsAvailable": ["Hyd", "Delhi", "Pune", "India"]
		},
		{
			"name": "mobile",
			"price": "$300",
			"manu": "SAMSUNG",
			"seller": "Indian Electronics",
			"image": "images/laptop.png",
			"locationsAvailable": ["Hyd", "Delhi", "Pune", "India"]
		},
		{
			"name": "laptop",
			"price": "$300",
			"manu": "SAMSUNG",
			"seller": "Indian Electronics",
			"image": "images/laptop.png",
			"locationsAvailable": ["Hyd", "Delhi", "Pune", "India"]
		}
	]

};
	data = JSON.stringify(data);
	setTimeout(function(){
		res.send(data);	
	}, 3000); // after 3seconds results dispaly on main page if we need extend time or reduce
	
});

module.exports = router;
