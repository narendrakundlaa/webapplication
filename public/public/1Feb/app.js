function createContainer() {
	var cntainr = document.createElement('div');
	cntainr.setAttribute('class', 'container');
	cntainr.setAttribute('id', 'mainCntr');
	document.querySelector('body').append(cntainr);
}

function showMsg() {
	var msg = "This app is related to demonstrate exception handling";
	try {
		document.querySelector("#mainCntr").innerHTML = '<b>' + msg + '</b>';
		console.log("Msg been added");

	}catch(err){
		console.log(err);
		console.log("container not got created...");
	} finally {
		// Showing thx message
		var thxdiv = document.createElement('div');
		thxdiv.setAttribute('class', 'wlcmmsg');
		document.querySelector('body').append(thxdiv);
		thxdiv.innerHTML = 'Thx for visiting our page...';
	}	
}