var app = angular.module("custDir", []);

app.controller("custDirCntrl", function($scope){
	$scope.name = "TEST!";
	$scope.dialgobody = "Hello alll this is the body....";

});

app.controller("custDirCntrl2", function($scope){
	$scope.name = "TEST1123";
	$scope.dialgobody = "This body is from 2nd cntrl.";

});
app.controller("custDirCntrl3", function($scope){
	$scope.name = "Narendra";
	$scope.dialgobody = "This body is from 3rd cntrl and created by Narendra";


});
//in HTML we written like show-dialog but in js we written like showDialog
app.directive("showDialog", function(){
	return {
		restrict: 'E',
		template: "<input type='button' value='Show Dialog'> {{name}}",
		//here scope is userdefined
		link: function(scope, ele, attr){
			/*
			angular.element this is using jqlite & 
			angular.element(ele) means in HTML we created as element(<show-dialog dlgtitle="Update details?"></show-dialog>)
			*/
			angular.element(ele).on("click", function(){
				var divElement = document.createElement('div');
				angular.element(divElement).addClass("dialogContainer");
				

				var title = document.createElement('div');
				angular.element(title).html(attr.dlgtitle	);
				angular.element(title).addClass("title");
				angular.element(divElement).append(title);

				var dlgBdy = document.createElement('div');
				angular.element(dlgBdy).html(scope.dialgobody);//scope.dialgobody this is controller message
				angular.element(dlgBdy).addClass("dlgBdy");
				angular.element(divElement).append(dlgBdy);

				var btnCntainr = document.createElement('div');
				
				angular.element(btnCntainr).addClass("btnCntainr");

				var cancelBtn = document.createElement("input");
				angular.element(cancelBtn).attr("type", "button");
				angular.element(cancelBtn).attr("value", "Cancel");

				var save = document.createElement("input");
				angular.element(save).attr("type", "button");
				angular.element(save).attr("value", "Save");

				angular.element(btnCntainr).append(cancelBtn);
				angular.element(btnCntainr).append(save);

				angular.element(divElement).append(btnCntainr);


				angular.element(document.querySelector('body')).append(divElement);

				angular.element(cancelBtn).on("click", function(){
					angular.element(document.querySelector('.dialogContainer')).remove();
				})
			});
		}
	}
});