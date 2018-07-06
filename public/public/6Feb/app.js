alert("js file loaded ");

$(document).ready(function(){
	alert("+ adding listener");
	document.querySelector('#container').addEventListener('click', function(){
		alert("Click happend");
	});
})

function showMsg() {
	alert("click on button");
}