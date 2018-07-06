var app = angular.module('productInfo',[]);
app.controller('productCntrl',function($scope)
	{
		
		$scope.colors = ['green','blue','pink','lightblue'];
		$scope.productDetails = [
		{
			name : 'Samsung',
			price : '9999',
			color : 'Silver'
		},
		{
			name : 'Iphone',
			price : '19800',
			color : 'black'
		},
		{
			name : 'Nokia',
			price : '8888',
			color : 'Red'
		},
		{
			name : 'Vivo',
			price : '11111',
			color : 'Blue'
		}
		]
	});