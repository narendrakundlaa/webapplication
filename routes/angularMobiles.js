var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var data = { 
		"Mobile" : [
	
	{
		"name" : "Samsung",
		"price" : "15900",
		"dual" : "Yes",
		"image" : "mobiles/mobile9.jpg"
		
	},
	{
		"name" : "Intex",
		"price" : "10000",
		"dual" : "Yes",
		"image" : "mobiles/mobile3.jpg"
	},
	{
		"name" : "Nokia",
		"price" : "8000",
		"dual" : "Yes",
		"image" : "mobiles/mobile5.jpg"
	},
	{
		"name" : "Intex",
		"price" : "9500",
		"dual" : "Yes",
		"image" : "mobiles/mobile8.jpg"
	},
	{
		"name" : "Micromax",
		"price" : "11600",
		"dual" : "Yes",
		"image" : "mobiles/mobile6.jpg"
	},
	{
		"name" : "Lava",
		"price" : "1299",
		"dual" : "Yes",
		"image" : "mobiles/mobile1.jpg"
	},
	{
		"name" : "Vivo",
		"price" : "11600",
		"dual" : "Yes",
		"image" : "mobiles/mobile7.jpg"
	},
	{
		"name" : "Micromax",
		"price" : "11600",
		"dual" : "Yes",
		"image" : "mobiles/mobile4.jpg"
	},
	{
		"name" : "Vivo",
		"price" : "11600",
		"dual" : "Yes",
		"image" : "mobiles/mobile2.jpg"
	}
	]
};
	data = JSON.stringify(data);
	setTimeout(function(){
		res.send(data);	
	}, 2000); // after 3seconds results dispaly on main page if we need extend time or reduce
	
});

module.exports = router;
