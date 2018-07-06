function schlDetail(obj){
	this.schoolName = obj.name;
	this.schoolId = obj.id;
	this.schoolLoc = obj.loc;
	this.displaySchoolDetails = function() {
		document.querySelector('#schlName').innerHTML = this.schoolName;
		document.querySelector('#schlId').innerHTML = this.schoolId;
		document.querySelector('#schlLoc').innerHTML = this.schoolLoc;
	}
}

function stdDetails(obj){
	this.name = obj.name;
	this.age = obj.age;
	this.sport = obj.sport;
	this.displayStudentDetail = function() {
		this.displaySchoolDetails();
		document.querySelector('#stdname').innerHTML = this.name;
		document.querySelector('#stdage').innerHTML = this.age;
		document.querySelector('#stdSport').innerHTML = this.sport;
	}
}

function readDetails() {
	var schlObj = {};
	schlObj.name = document.querySelector('#sclName').value;
	schlObj.id = document.querySelector('#sclId').value;
	schlObj.loc = document.querySelector('#sclLoc').value;

	stdDetails.prototype = new schlDetail(schlObj);

	var sDetails = {};
	sDetails.name = document.querySelector('#sName').value;
	sDetails.age = document.querySelector('#sAge').value;
	sDetails.sport = document.querySelector('#sSport').value;

	var stdData = new stdDetails(sDetails);
	stdData.displayStudentDetail();

}