function checkEmpty(){

	var fname = document.getElementById("fname").value;
	var fpass = document.getElementById("fpass").value;

	if(fname == null || fname == ""){
		alert("Fill the user name Field!");
	}
	else if(fpass == null || fpass == ""){
		alert("Fill the password Field!");
	}
	else{
		Swal.fire({
			icon: "success",
			title: "Logging Successfully!",
			text: "Thank you!",
			showConfirmButton: false,
			footer:
			  '<button type="button"><a href="./index.html">Home</a></button>',
		  });
	}
	

}


    function popUp(){
    

    
             

    }
  

    function myFunction(){
        var x = document.getElementById("myInput") ; 
        var y = document.getElementById("hide1") ; 
        var z = document.getElementById("hide2") ; 

        if(x.type === 'password'){
            x.type = "text";
            y.style.display = "block";
            z.style.display = "none";
        }
        else{
            x.type = "password";
            y.style.display = "none";
            z.style.display = "block";
        }
    }


    
