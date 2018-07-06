var details = [
	{
		name: 'Laptop',
		price: '$300',
		manu: 'Samsung',
		imageUrl: 'images/laptop.png'
	},
	{
		name: 'Laptop',
		price: '$300',
		manu: 'Samsung',
		imageUrl: 'images/laptop.png'
	},
	{
		name: 'Laptop',
		price: '$300',
		manu: 'Samsung',
		imageUrl: 'images/laptop.png'
	},
	{
		name: 'Laptop',
		price: '$300',
		manu: 'Samsung',
		imageUrl: 'images/laptop.png'
	}
]


function createContent(prodDetails) {
	var mainBlck = $('<div></div>').addClass('block');
	var ultag = $('<ul></ul>');

	var li1 = $('<li></li>').html('Product Name: ' + prodDetails.name);
	ultag.append(li1);

	var li2 = $('<li></li>').html('Product Price: ' + prodDetails.price);
	ultag.append(li2);

	var li3 = $('<li></li>').html('Product Manufacturer: ' + prodDetails.manu);
	ultag.append(li3);

	var li4 = $('<li></li>');
	var imgtag =$('<img/>').attr('src', prodDetails.imageUrl);
	li4.append(imgtag);
	ultag.append(li4);
	mainBlck.append(ultag);

	$('#maincntainer').append(mainBlck);
}

function showDetails() {
	$('#maincntainer').html('');
	for (var i = 0 ; i < details.length; i++) {
		createContent(details[i]);
	}
}
