var utilmethods = (function(){

	var count = 1;
	function addVales(arguments) {
		var sum = 0;
		for (var i = 0 ; i < arguments.length; i++) {
			sum += arguments[i];
		}
		count++;
		return sum;		
	}
	function mulValues() {
		alert("mul got invoked")
		var mul = 1;
		for (var i = 0 ; i < arguments.length; i++) {
			mul *= arguments[i];
		}
		count++;
		return mul;		
	}
	function divValues() {
		var div = 1;
		for (var i = 0 ; i < arguments.length; i++) {
			div /= arguments[i];
		}
		count++;
		return div;
	}
	var obj = {
		test: 500,
		addValues: function(){
			var r = addVales(arguments);
			return r;
		},
		subValues: function() {
			var sub = arguments[0];
			for (var i = 1 ; i < arguments.length; i++) {
				sub -= arguments[i];
			}
			count++;
			return sub;
		},
		mulValues: mulValues
	}
	return obj;
})();

