function studentDetails(obj) {
	this.name = obj.name;
	this.age = obj.age;
	this.cntry = obj.country;
	this.showDetails = function(){
		document.querySelector(".showBlock").style.display = 'block';
		document.querySelector("#uname").innerHTML = '<b>' + this.name + '</b>'
		document.querySelector("#uage").innerHTML = '<b>' + this.age + '</b>'
		document.querySelector("#ucntry").innerHTML = '<b>' + this.cntry + '</b>';
	}
}
var details = [];

function registerStdDetails() {
	var obj = {};
	obj.name = document.querySelector("#sname").value;
	obj.age = document.querySelector("#sAge").value;
	obj.country = document.querySelector("#scountry").value;
	var s1 = new studentDetails(obj);
	s1.showDetails();
	details.push(s1);
	console.log(details);	
}





