var app = angular.module("custDirApp", []);

app.controller("custDirCntrl", function($scope){
	$scope.details1 = {
		name: 'Prasad',
		gender: 'Male',
		location: 'Hyderabad',
		age: 40,
		sal: 30000
	};
	$scope.details2 = {
		name: 'Raj',
		gender: 'Male',
		location: 'Delhi',
		age: 20,
		sal: 2222
	};
	$scope.details3 = {
		name: 'Tena',
		gender: 'Female',
		location: 'Delhi',
		age: 20,
		sal: 2222
	};
});

app.directive("myView", function(){
	return {
		restrict: 'AE',
		template: function(ele, attr){
			console.log(ele);
			console.log(attr);
			var content = '<div class="block" style="background:' + attr.color + ';">' +
				'<ul>' +
					'<li>User Name: {{data.name}}</li>' +
					'<li>User Age: {{data.age}}</li>' +
					'<li>User Gender: {{data.gender}}</li>' +
					'<li>User Location: {{data.location}}</li>';
			if (attr.showsal == 'true') {
				content += '<li>User Sal: {{data.sal}}</li>';
			}
			content += '</ul></div>';
			return content;
		},
		scope: {
			data: '=userdata'
		}
	}
});
