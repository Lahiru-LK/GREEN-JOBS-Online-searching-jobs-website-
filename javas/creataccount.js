


				const form = document.getElementById('form');
				const username = document.getElementById('username');
				const email = document.getElementById('email');
				const password = document.getElementById('password1');
				const password2 = document.getElementById('password2');
				backBtn = form.querySelector(".backBtn");
				allInput = form.querySelectorAll("form input");


				backBtn.addEventListener("click", () => {
					allInput.forEach((input) => {
					  if (input.value != "") {
						checkInputs();
						if (checkInputs() == true) {
							
							Swal.fire({
								icon: "success",
								title: "Account Created Successfully!",
								text: "Thank you!",
								showConfirmButton: false,
								footer:
								  '<button type="button"><a href="./loginform.html">Log in your account</a></button>',
							  });
						}
					  } else {
						checkInputs();
					  }
					});
				  });
				  


				function checkInputs() {
					// trim to remove the whitespaces
					const usernameValue = username.value.trim();
					const emailValue = email.value.trim();
					const passwordValue = password1.value.trim();
					const password2Value = password2.value.trim();

					var tr = 0;

					if(usernameValue === ""){
						setErrorFor(username, 'Username cannot be blank');
					} else {
						setSuccessFor(username);
						tr = tr + 1;
					}




					if(emailValue === "") {
						setErrorFor(email, 'Email cannot be blank');
					} else if (!isEmail(emailValue)) {
						setErrorFor(email, 'Not a valid email');
					} else {
						setSuccessFor(email);
						tr = tr + 1;

					}
				

					if(passwordValue === "") {
						setErrorFor(password1, 'Password cannot be blank');
					} else {
						setSuccessFor(password1);
						tr = tr + 1;
					}
					
					
					if(password2Value === "") {
						setErrorFor(password2, 'Password2 cannot be blank');
					} else if(passwordValue !== password2Value) {
						setErrorFor(password2, 'Passwords does not match');
					} else{
						setSuccessFor(password2);
						tr = tr + 1;
					}
				
					if (tr == 4) {
						return true;	
					}
				}

				function setErrorFor(input, message) {
					const formControl = input.parentElement;
					const small = formControl.querySelector('small');
					
					small.innerText = message;
					formControl.className = 'form-control error';
					
				}

				function setSuccessFor(input) {
					const formControl = input.parentElement;
					formControl.className = 'form-control success';
				}


				function isEmail(email) {
					return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
				
				}
			
				



				


function myFunction(){
	var x = document.getElementById("password1") ; 
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


function myFunction2(){
	var x = document.getElementById("password2") ; 
	var y = document.getElementById("hide1-1") ; 
	var z = document.getElementById("hide2-2") ; 

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


