function checkEmpty(){

	var fname = document.getElementById("fname").value;
	var femail = document.getElementById("femail").value;
	var fnum = document.getElementById("fnum").value;
	var fsub = document.getElementById("fsub").value;
	

	if(fname == null || fname == ""){
		alert("Fill the First Name Field!");
	}
	else if(femail == null || femail == ""){
		alert("Fill the email Field!");
	}
	else if(fnum == null || fnum == ""){
		alert("Fill the Number Field!");
	}
	else if(fsub == null || fsub == ""){
		alert("Fill the Subject Field!");
	}
	else{
		Swal.fire({
			icon: "success",
			title: "Your massage send Successfully!",
			text: "Thank you!",
			showConfirmButton: false,
			footer:
			  '<button type="button"><a href="./index.html">Home</a></button>',
		  });
	}
	

}

function checkLetterf(){
	var fname = document.getElementById("fname").value;
	var letters = /^[A-Za-z]+$/;
	
	if(fname.match(letters)){
		return true;
	}
	else{
		confirm("Please Enter Letters only!");
		return false;
	}
}

function checkLetterl(){
	var lname = document.getElementById("lname").value;
	var letters = /^[A-Za-z]+$/;
	
	if(lname.match(letters)){
		return true;
	}
	else{
		confirm("Please Enter Letters only!");
		return false;
	}
}