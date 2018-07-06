var app = angular.module("servicesApp", []);

app.config(function(APPNAME, utilityProvider){
	utilityProvider.setAppName("online app");
	utilityProvider.getAppname();
});

app.controller("servicesCntrl", function($scope, APPNAME, utilMethods, utility){
	utility.getAplicationName();
	$scope.getTotalTaxVal = function() {
		$scope.totalTax = utilMethods.getTax($scope.uBsal);
		$scope.totalSal = utilMethods.totalSalary($scope.uBsal);
		
	}
});

// app.value("APPNAME", "online shoppping application");

app.constant("APPNAME", "online shoppping application");

/*
app.factory("utilMethods", function(){
	var totalSal = 0;
	function getHRA(bsal) {
		var hra = (25*bsal)/100;
		return hra;
	}
	function getpf(bsal) {
		var pf = (12*bsal)/100;
		return pf;
	}
	function getTotalSal(bsal) {
		 totalSal = 0;
		totalSal = getHRA(bsal) + getpf(bsal) + bsal;
		return totalSal;
	}

	return {
		getTax: function(bsal) {
			var tsal = getTotalSal(bsal);
			var taxValue = 0;
			if (tsal > 20000) {
				taxValue = (10*tsal)/100;
			} else {
				taxValue = (15*tsal)/100;
			}
			return taxValue;
		},
		totalSalary: function(bsal){
			var result =  getTotalSal(bsal);
			return result;
		}
	}
}); */

app.service("utilMethods", function(){
	var totalSal = 0;
	function getHRA(bsal) {
		var hra = (25*bsal)/100;
		return hra;
	}
	function getpf(bsal) {
		var pf = (12*bsal)/100;
		return pf;
	}
	function getTotalSal(bsal) {
		 totalSal = 0;
		totalSal = getHRA(bsal) + getpf(bsal) + bsal;
		return totalSal;
	}


	this.getTax = function(bsal) {
			var tsal = getTotalSal(bsal);
			var taxValue = 0;
			if (tsal > 20000) {
				taxValue = (10*tsal)/100;
			} else {
				taxValue = (15*tsal)/100;
			}
			return taxValue;
		}
	this.totalSalary = function(bsal){
			var result =  getTotalSal(bsal);
			return result;
		}

});

app.provider("utility", function(){
	this.appname= '';

	this.setAppName = function(name){
		this.appname = name;
	}
	this.getAppname = function(){
		alert(this.appname);
	}
	this.$get = function(){
		var self = this;
		return {
			getAplicationName: function() {
				alert(self.appname);
			}
		}
	}
});