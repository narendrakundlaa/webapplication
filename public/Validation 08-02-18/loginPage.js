function loginPage()
			{		
			var userDetails = {};				
				  userDetails.name = document.querySelector('#uName').value;
				 userDetails.pass = document.querySelector('#Upass').value;
				if(userDetails.name=='' || userDetails.pass==''){
					if(userDetails.name==''){
						document.querySelector("#Uerror").innerHTML = 'Name Manditory';
					}else if(userDetails.pass==''){
						document.querySelector("#Perror").innerHTML = 'Password Manditory';
						}
					
				}else{
									
						document.querySelector('.ShowDetails').style.display = 'block';
						document.querySelector('.mainCantainer').style.display = 'none';					

					}
			
			var timeleft = 10;
			var downloadTimer = setInterval(function(){
			timeleft--;
		document.getElementById("countdowntimer").innerHTML = timeleft;	
				if(timeleft <= 0)
			clearInterval(downloadTimer);
				},1000);
				}

function Register(){
	//window.open("Register.html");//this will open next page.
	location.href = 'Register.html';
}
function forgotPassword()
{
	alert('forgotPassword')
}
	
