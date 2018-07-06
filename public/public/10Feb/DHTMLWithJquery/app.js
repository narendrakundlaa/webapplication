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
		name: 'Laptop234',
		price: '$305',
		manu: 'Samsung',
		imageUrl: 'images/laptop.png'
	}
];


function createContent(prodDetails) {
	$("#maincntainer").loadTemplate($('#productTmplt'), prodDetails, {append: true});
}

function showDetails() {
	for (var i = 0 ; i < details.length; i++) {
		createContent(details[i]);
	}
}
