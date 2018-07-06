var app = angular.module("httpLocal",[]);
app.controller("httpLocalCntrl",function($scope){
	alert("hello");
	$scope.color = ["white","lightblue","white","wheat","lightgreen"];
	$scope.NewBikes = [	
						{
							"name" : "ROyal Enfield",
							"price" : "106500",
							"speed" : "180",
							"ingine" : "350CC",
							"mileage" : "35-40",
							"images" : "bikes/royal.jpg"
						},
						{
							"name" : "FZ",
							"price" : "86500",
							"speed" : "120",
							"ingine" : "150CC",
							"mileage" : "40-50",
							"images" : "bikes/fz.png"
						},
						{
							"name" : "scooty",
							"price" : "65500",
							"speed" : "120",
							"ingine" : "100CC",
							"mileage" : "50-65",
							"images" : "bikes/scooty.jpg"
						},
						{
							"name" : "Pulsar",
							"price" : "66500",
							"speed" : "120",
							"ingine" : "100CC",
							"mileage" : "50-65",
							"images" : "bikes/pulsar.png"
						},
						{
							"name" : "sujiki2",
							"price" : "78500",
							"speed" : "120",
							"ingine" : "150CC",
							"mileage" : "50-65",
							"images" : "bikes/sujiki2.jpg"
						},
						{
							"name" : "sujiki3",
							"price" : "86500",
							"speed" : "120",
							"ingine" : "180CC",
							"mileage" : "50-65",
							"images" : "bikes/sujiki3.jpg"
						},
						{
							"name" : "Pulsar",
							"price" : "86500",
							"speed" : "120",
							"ingine" : "150CC",
							"mileage" : "50-65",
							"images" : "bikes/sujiki4.jpg"
						},
						{
							"name" : "Pulsar",
							"price" : "86500",
							"speed" : "120",
							"ingine" : "150CC",
							"mileage" : "50-65",
							"images" : "bikes/scooty2.jpg"
						},
						{
							"name" : "Pulsar",
							"price" : "86500",
							"speed" : "120",
							"ingine" : "150CC",
							"mileage" : "50-65",
							"images" : "bikes/bullet.jpg"
						}
						];
					});