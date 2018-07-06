var app = angular.module("filterApp", []);

app.controller("filterCntrl", function($scope){
	$scope.empData = [
		{
			name: 'PRasad',
			age: 40,
			gender: 'Male',
			sal: 10000,
			department: 'Software',
			doj: new Date()
		},
		{
			name: 'Shan',
			age: 20,
			gender: 'Female',
			sal: 20000,
			department: 'Accounts',
			doj: new Date()
		},
		{
			name: 'Teena',
			age: 20,
			gender: 'Female',
			sal: 12300,
			department: 'Software',
			doj: new Date()
		},
		{
			name: 'Raj',
			age: 25,
			gender: 'Male',
			sal: 60000,
			department: 'Software',
			doj: new Date()
		},
		{
			name: 'Krish',
			age: 22,
			gender: 'Male',
			sal: 3455,
			department: 'Software',
			doj: new Date()
		},
		{
			name: 'PRasad',
			age: 40,
			gender: 'Male',
			sal: 10000,
			department: 'Software',
			doj: new Date()
		},
		{
			name: 'Suresh',
			age: 22,
			gender: 'Male',
			sal: 10000,
			department: 'Software',
			doj: new Date()
		}
	];
});
// start custem filter here
app.filter("agevalidation", function(){
	return function(input) {
		//input holds the agevalidation what ever we applied in view conditions for age.. 
		console.log("input is " + input);
		if (input > 30) {
			return 'Near to Retirement';
		} else {
			return 'Still u can enjy';
		}
		
	}
});
/*
this is just my perpose only...
app.filter("saltshow", function(){
	return function(input) {
		//input holds the saltshow what ever we applied in view conditions for sal.. 
		console.log("input is " + input);
		if (input > 30000) {
			return 'Near to higher amount';
		} else {
			return 'Still u are same salary';
		}
		
	}
});
*/