var details = [
{
	"name" : "Nokia",
	"price": "5600",
	"location":"Hyderabad"
},
{
	"name" : "Nokia",
	"price": "5600",
	"location":"Hyderabad"
}
];
function showProducts(){
	for(var i=0; i < details.length; i++){
		createContent(details[i]);
	}
}


function createContent(prodDetails) {
		$('.container').html('');
		document.querySelector('.loader').style.display = 'block';
		setTimeout(function(){
			$("#mainCntr").loadTemplate($('#tempalteId'), details, {append: true});
			document.querySelector('.loader').style.display = 'none';
		},5000);
		
	}