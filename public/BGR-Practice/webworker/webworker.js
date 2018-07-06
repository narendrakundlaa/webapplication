
var count =10;
var msg = setInterval(function(){
	count--;
	if(count == 0){
		clearInterval(msg);
	}
	postMessage(count);

},1000)

var obj = {
	'name':'Nare',
	'age': 28
}
var dataa = JSON.stringify(obj);
postMessage(dataa);