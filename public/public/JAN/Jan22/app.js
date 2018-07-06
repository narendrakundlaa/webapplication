function doSum() {
	console.log("test");
	var fval = document.getElementById('fval').value;
	fval = parseInt(fval);

	if (!fval) {
		document.getElementById('fvalErr').style.display = 'block';
		return;
	}

	var sval = document.getElementById('sval').value;
	sval = parseInt(sval);

	var sum = fval + sval;
	
	document.getElementById('resultBlck').innerHTML = '<b>' + sum + '</b>';
	document.getElementById('resultCntnr').style.visibility = 'visible';
	document.getElementById('resultCntnr').style.color = 'green';
}

function validateData(event) {
	console.log(event);

	if ((event.charCode >= 97 && event.charCode <= 122) || (event.charCode >= 65 && event.charCode <=90) ) {
		return false;
	}
	return true;
}