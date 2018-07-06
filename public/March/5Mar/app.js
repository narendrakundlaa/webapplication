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
	$scope.details4 = {
		name: 'Narendra',
		gender: 'Male',
		location: 'EGRP',
		age: 29,
		sal: 58000
	};
});

app.directive("myView", function(){
	return {
		restrict: 'AE', //AE means arrtibute and element which we are adding directive
		template: function(ele, attr){
			console.log(ele);
			console.log(attr);
			/* //only for template
			var content = '<div class="block" style="color:' + attr.color + ';">' +
				'<ul>' +
					'<li>User Name: <strong>{{data.name}}</strong></li>' +
					'<li>User Age: <strong>{{data.age}}</strong></li>' +
					'<li>User Gender: <strong>{{data.gender}}</strong></li>' +
					'<li>User Location: <strong>{{data.location}}</strong></li>'+
					'<li>User Salary: <strong>{{data.sal}}</strong></li>'+
					'</ul></div>';
			return content;
		}
			*/
			// dynamicaly insert Salary
			var content = '<a href="http://www.google.com" title="Hyper LInk Activated"><div class="block" style="background:' + attr.color + '">' +
				'<ul>' +
					'<li>User Name: {{data.name}}</li>' +
					'<li>User Age: {{data.age}}</li>' +
					'<li>User Gender: {{data.gender}}</li>' +
					'<li>User Location: {{data.location}}</li>';
			if (attr.showsal == 'Nare') {
				content += '<li>User Sal: {{data.sal}}</li></a>';
			}
			content += '</ul></div>';
			return content;
		},
		scope: {
			data: '=userdata'
		}
	}
});
