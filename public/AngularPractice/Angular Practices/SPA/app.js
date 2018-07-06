var app = angular.module("spaPage",["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider.when("/newUserd",{
		templateUrl : "newUser.htm"
	}).when("/forGotPsw",{
		templateUrl:"forgotPassword.htm"
	}).when("/narendra",{
		templateUrl : "narendra.htm"
	}).when("/productsDetails",{
		templateUrl : "products.htm"
	}).otherwise({
		templateUrl : "loginPage.htm"
	})
});
app.controller("spaCntrl",function($location,$scope,$rootScope){
		
	$scope.openPage = function(type){
		switch(type){
			case 'newUser' :
			$location.url("/newUserd");
			break;
			case 'ForgotPsw' :
			$location.url("/forGotPsw");
			break;
		}
	}
$scope.submit = function(){
	//location.href = "newUser.htm"; // NOT RECOMMENDED FROM MY SELF IF I GO BACK VALIDATION NOT APPLY
	//$location.url("newUser.htm"); // this is not applicable.
	$location.url("productsDetails");
}
$scope.forGotPsw = function(){
	alert("Successfully Done");
	$location.url("loginPage.htm");
}
$scope.newUserDetails = function()
{
		document.querySelector("#new").innerHTML = "Details been registered...";
		document.querySelector("#new").style.color = "green";
			
		/*setTimeout(function(){
			$location.url("loginPage.htm");
		},5000);

		var timecounter = 5;
		setInterval(function(){
			timecounter--;
			document.querySelector("#new2").innerHTML = "Please wait" + timecounter;

			}
		})*/
}

});


