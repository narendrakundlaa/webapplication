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

function showDetails() {
	for (var i = 0 ; i < details.length; i++) {
		createContent(details[i]);
	}
}

function createContent(prodDetails) {
	$('#maincntainer').html('');
	document.querySelector('.load').style.display = 'block';
	setTimeout(function(){
		document.querySelector('.load').style.display = 'none';
		$("#maincntainer").loadTemplate($('.productTmplt'), prodDetails, {append: true});
	},5000);
	
}
	/* // sir Data
		function createContent(prodDetails) {
		$("#maincntainer").loadTemplate($('.productTmplt'), prodDetails, {append: true});
		}
	*/

