var schlDetail = {
	schlName: 'ABC School',
	sLoction: 'Hyderabad',
	schoolRating: '4/5'
};


function registerStdDetails() {
	// var sDetails = {};
	var sDetails = Object.create(schlDetail);
	sDetails.name = document.querySelector("#sname").value;
	sDetails.age = document.querySelector("#sAge").value;
	sDetails.country = document.querySelector("#scountry").value;
	showDetails(sDetails);
}

function showDetails(details) {
	document.querySelector(".showBlock").style.display = 'block';

	document.querySelector("#uname").innerHTML = '<b>' + details.name + '</b>'
	document.querySelector("#uage").innerHTML = '<b>' + details.age + '</b>'
	document.querySelector("#ucntry").innerHTML = '<b>' + details.country + '</b>';
	document.querySelector("#schlName").innerHTML = '<b>' + details.schlName + '</b>';
	document.querySelector("#sloc").innerHTML = '<b>' + details.sLoction + '</b>';
	document.querySelector("#srating").innerHTML = '<b>' + details.schoolRating + '</b>';

	
}