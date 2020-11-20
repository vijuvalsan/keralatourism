let mail = document.getElementById("email");
let pwd = document.getElementById("pass");
let lgin = document.getElementById("submit");
//let msg =document.getElementById("msg");


function ValidateEmailPhone(){
    var regexp = /^([a-zA-Z0-9\.\-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/; // email
    var a =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; //phone no xxx xxx xxx, xxx-xxx-xxx, xxx.xxx.xxx
    if (regexp.test(mail.value) )
     {
         return (true);      
     }
     else if( a.test(mail.value))
     {
        return(true);
     }
     else{

     document.getElementById("msg").innerHTML="You have entered an invalid Email/PhoneNo ";
    return (false);
     }
        
}


function ValidatePassword()
{
    var rgxp=/^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if(rgxp.test(pwd.value) )
    {
       
        return true;
       
        
    }

    else{
        document.getElementById("msg1").innerHTML="You have entered an invalid password ";
        return (false);
        
    }
    
}



