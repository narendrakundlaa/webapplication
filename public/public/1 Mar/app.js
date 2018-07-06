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

app.filter("agevalidation", function(){
	return function(input) {
		console.log("input is " + input);
		if (input > 30) {
			return '<b>Near to Retirement</b>';
		} else {
			return 'Still u can enjy';
		}		
	}
});