var details = [
{
	name : 'nokia',
	price : '6000',
	color : 'black'
},

{
	name : 'nokia',
	price : '6000',
	color : 'black'
},

{
	name : 'nokia',
	price : '6000',
	color : 'black'
},

{
	name : 'nokia',
	price : '6000',
	color : 'black'
}
];
function createContent(prodDetails){
	var mainBlock = $('<div></div>').addClass('block');
	var ultag = $('<ul></ul>');
	var li1 = $('<li></li>').html('Product Name : '+prodDetails.name);
	ultag.append(li1);
	var li2 = $('<li></li>').html('product price : ' + prodDetails.price);
	ultag.append(li2);
	var li3 = $('<li></li>').html('color ' + prodDetails.color);
	ultag.append(li3);
	mainBlock.append(ultag);
	$('mainContainer').append(mainBlock);
}
function showDetails()
{
	for(var i=0; i<details.length;i++){
		createContent(details[i]);
	}
}