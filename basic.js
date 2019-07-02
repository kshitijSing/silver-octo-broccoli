 function check() {
 	
 	var user=document.getElementById('username');
 	var pass=document.getElementById('password');
     var cuser="username";
     var cpass="password";
     if(user.value==cuser)
     {
     	if(pass.value==cpass)
     	{
     	
            window.location.href = "file:///C:/Users/Harsha%20surisetty/Desktop/project/menu.html";
 
     	}
     	


     }
     else
     	     		window.alert("password or username you entered wrong")

     	
 }




 function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
