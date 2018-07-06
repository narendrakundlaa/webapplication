var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var data = { 
	"productData":	[
		{
			"name": "Laptop",
			"price": "$3550",
			"manu": "Samsung",
			"imageUrl": "images/laptop.png"
		},
		{
			"name": "Laptop",
			"price": "$300",
			"manu": "Samsung",
			"imageUrl": "images/laptop.png"
		},
		{
			"name": "Laptop",
			"price": "$300",
			"manu": "Samsung",
			"imageUrl": "images/laptop.png"
		},
		{
			"name": "Laptop",
			"price": "$300",
			"manu": "Samsung",
			"imageUrl": "images/laptop.png"
		}
	]
};
	data = JSON.stringify(data);
	setTimeout(function(){
		res.send(data);	
		
	},1000);
	
});

module.exports = router;
