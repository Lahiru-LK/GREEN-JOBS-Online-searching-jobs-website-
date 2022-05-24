Array.prototype.forEach.call(
    document.querySelectorAll(".file-upload__button"),
    function(button) {
      const hiddenInput = button.parentElement.querySelector(
        ".file-upload__input"
      );
      const label = button.parentElement.querySelector(".file-upload__label");
      const defaultLabelText = "No file(s) selected";
  
      // Set default text for label
      label.textContent = defaultLabelText;
      label.title = defaultLabelText;
  
      button.addEventListener("click", function() {
        hiddenInput.click();
      });
  
      hiddenInput.addEventListener("change", function() {
        const filenameList = Array.prototype.map.call(hiddenInput.files, function(
          file
        ) {
          return file.name;
        });
  
        label.textContent = filenameList.join(", ") || defaultLabelText;
        label.title = label.textContent;
      });
    }
  );



  function checkEmpty(){

    var fname = document.getElementById("fname").value;
    var name = document.getElementById("name").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var genlist = document.getElementById("genlist").value;
    var num = document.getElementById("num").value;
    
    var idt = document.getElementById("idt").value;
    var idn = document.getElementById("idn").value;
    var ida = document.getElementById("ida").value;
    var ids = document.getElementById("ids").value;
    var issd = document.getElementById("issd").value;
    var expd = document.getElementById("expd").value;
    
    var addressl1 = document.getElementById("addressl1").value;
    var addressl2 = document.getElementById("addressl2").value;
    var state = document.getElementById("state").value;
    var cotry = document.getElementById("cotry").value;
    var dis = document.getElementById("dis").value;
    var zip = document.getElementById("zip").value;

  
    if(fname == null || fname == ""){
      alert("Fill the full name Field!");
    }
    else if(name == null || name == ""){
      alert("Fill the first name Field!");
    }
    else if(lname == null || lname == ""){
      alert("Fill the last name Field!");
    }
    else if(email == null || email == ""){
      alert("Fill the email name Field!");
    }
    else if(dob == null || dob == ""){
      alert("Fill the date of birth Field!");
    }
    else if(genlist == null || genlist == ""){
      alert("Fill the  Gender Field!");
    }
    else if(num == null || num == ""){
      alert("Fill the mobile number Field!");
    }
  
 
    else if(idt == null || idt == ""){
      alert("Fill the id type Field!");
    }
    else if(idn == null || idn == ""){
      alert("Fill the id number Field!");
    }
    else if(ida == null || ida == ""){
      alert("Fill the issued authority Field!");
    }
    else if(ids == null || ids == ""){
      alert("Fill the issued state Field!");
    }
    else if(issd == null || issd == ""){
      alert("Fill the issued date Field!");
    }
    else if(expd == null || expd == ""){
      alert("Fill the expiry date Field!");
    }
    else if(addressl1 == null || addressl1 == ""){
      alert("Fill the street address line 1 Field!");
    }
    else if(addressl2 == null || addressl2 == ""){
      alert("Fill the street address line 2 Field!");
    }
    else if(state == null || state == ""){
      alert("Fill the state/provice Field!");
    }
    else if(cotry == null || cotry == ""){
      alert("Fill the country Field!");
    }
    else if(dis == null || dis == ""){
      alert("Fill the distriic Field!");
    }
    else if(zip == null || zip == ""){
      alert("Fill the postal/zip code Field!");
    }
    else {
      Swal.fire({
        icon: "success",
        title: "Successfully!",
        text: "Thank you!",
        showConfirmButton: false,
        footer:
          '<button type="button"><a href="./index.html">Home</a></button>',
        });
    }
    
  
  }
  