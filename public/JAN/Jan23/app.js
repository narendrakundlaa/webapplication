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
	var mainBlck = document.createElement('div');
	mainBlck.setAttribute("class", 'block');
	var ultag = document.createElement('ul');

	var li1 = document.createElement('li');
	li1.innerHTML = 'Product Name: ' + prodDetails.name;
	ultag.appendChild(li1);

	var li2 = document.createElement('li');
	li2.innerHTML = 'Product Price: ' + prodDetails.price;
	ultag.appendChild(li2);

	var li3 = document.createElement('li');
	li3.innerHTML = 'Product Manufacturer: ' + prodDetails.manu;
	ultag.appendChild(li3);

	var li4 = document.createElement('li');	
	var imgtag = document.createElement('img');
	imgtag.setAttribute('src', prodDetails.imageUrl);
	li4.appendChild(imgtag);
	ultag.appendChild(li4);
	mainBlck.appendChild(ultag);

	document.querySelector('#maincntainer').appendChild(mainBlck);
}

function showDetails() {
	for (var i = 0 ; i < details.length; i++) {
		createContent(details[i]);
	}
}
