
function regisTration(){
	
	var userRegister = {};
	userRegister.FirstName = document.querySelector('#Fname').value;
	userRegister.LastName = document.querySelector('#Lname').value;
	userRegister.Password = document.querySelector('#password').value;
	userRegister.ConfirmPassword = document.querySelector('#confirmpassword').value;
	//userRegister.age = document.querySelector('#Age').value;
	if(userRegister.FirstName =='' || userRegister.Passw0ord =='' || userRegister.ConfirmPassword =='' || userRegister.LastName =='' || userRegister.age =='' || userRegister.age <21)
	{
		if(userRegister.FirstName=='')
		{
			document.querySelector(".Ferror").innerHTML = 'Name Manditory';
		}else if(userRegister.LastName =='')
		{
			document.querySelector('.Lerror').innerHTML = '* Name is manditory';
		}else if(userRegister.Password =='')	
		{
			document.querySelector('.password').innerHTML = '*Password not empty';
		}else if(userRegister.ConfirmPassword != userRegister.Password)
		{
			document.querySelector('.confirmpassword').innerHTML = '*Oh..! Password was not conformed';
		}
		
	}else 
		{
			document.querySelector('#ShowDetails').style.display = 'block';
		}
}