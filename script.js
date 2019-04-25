  // For Password Validation

  var myInput = document.getElementById("psw");
  var letter = document.getElementById("letter");
  var capital = document.getElementById("capital");
  var number = document.getElementById("number");
  var length = document.getElementById("length");
  // When the user clicks on the password field, show the message box
  myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }
  
  // When the user clicks outside of the password field, hide the message box
  myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
    checkpassword.classList.remove("invalid");
    checkpassword.classList.add("valid");
  }
  
  // When the user starts to type something inside the password field
  myInput.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
  }
  
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }
  
    // Validate numbers
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
  
    // Validate length
    if(myInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  }
function checkPwd(){
if(document.getElementById("psw").value.length === 0){
  document.getElementById("pw").className = "error visible";
  }
  else{
    document.getElementById("pw").className = "error hidden";
  }
}
function Validation (pic) {
  checkForFirstName();
  checkForLastName();
  validateRadios();
  validateEmail();
  checkPwd();
  confirmPwd();
  validatePhone();
  cityValidation();
  validateZIP();
  var dp = document.getElementById(pic);
  validateCheckBox();
  if (document.getElementsByClassName("error").className == "error visible" || dp.src == "") {
    return false;
  }
  else {
    alert("Form Submitted Successfully!");
    return true;
  }
}

function checkForFirstName() {
  var fname = document.getElementById('firstName');
  if (fname.value.length === 0) { 
    fname.focus(); 
    document.getElementById("fe").className = "error visible";
    return false;
    }
    document.getElementById("fe").className = "error hidden";
}
  
  function checkForLastName() {
  var lname = document.getElementById('lastName');
  if (lname.value.length === 0) { 
  document.getElementById("le").className = "error visible";
  return false;
  }
  document.getElementById("le").className = "error hidden";
}
  
  function validatePhone() { 
    var valueEntered = document.getElementById("phone").value; 
    var numChars = valueEntered.length; 
    if (numChars == 0) {
      document.getElementById("pe").className = "error visible";
      document.getElementById("pe").innerText = "Enter Phone Number.";
    return false; 
    }
    else if (numChars < 11 || numChars > 11) {
      document.getElementById("pe").className = "error visible";
      document.getElementById("pe").innerText = "Phone Number should be 11 digit long.";
    return false; 
    }
    for (var i = 0; i <= 10; i++) { 
    var thisChar = parseInt(valueEntered[i]); 
    if (isNaN(thisChar)) { 
      document.getElementById("pe").className = "error visible";
      document.getElementById("pe").innerText = "Phone Number should be only numbers";
    return false; 
      } 
    }
    document.getElementById("pe").className = "error hidden";
    return true;
}
  
  function validateZIP() { 
  var valueEntered = document.getElementById("zip").value; 
  var numChars = valueEntered.length; 
  if (numChars == 0) {
    document.getElementById("ze").className = "error visible";
    document.getElementById("ze").innerText = "Enter Zip Code.";
  return false; 
  }
  else if (numChars < 5) { 
    document.getElementById("ze").className = "error visible";
    document.getElementById("ze").innerText = "Zip Code should be 5 digit long.";
    return false; 
  }
  for (var i = 0; i <= 4; i++) { 
  var thisChar = parseInt(valueEntered[i]); 
  if (isNaN(thisChar)) { 
  document.getElementById("ze").className = "error visible";
   document.getElementById("ze").innerText = "Phone Number should be only numbers";
  return false; 
      } 
    }
  document.getElementById("ze").className = "error hidden";
  }
  
  function validateEmail() {
  var eEntered = document.getElementById("email").value; 
  var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/; 
  if (eEntered.length == 0){
    document.getElementById("ee").innerText = "Enter Email Id";
    document.getElementById("ee").className = "error visible";
  }
  else if (!(eEntered.match(regex))) { 
    document.getElementById("ee").className = "error visible";
  return false; 
  }
  else
    {
  document.getElementById("ee").className = "error hidden";  
  return true;
    }
}
  function validateRadios() {
  var radios = document.getElementsByName("gender");    
  for (var i = 0; i < radios.length; i++) {      
  if (radios[i].checked) {       
    document.getElementById("re").className = "error hidden";  
  return true;       
  }
}    
document.getElementById("re").className = "error visible";
  return false;
}

function cityValidation(){
  var target = document.getElementById("city");   
  if (target.selectedIndex === 0) {     
    document.getElementById("ce").className = "error visible";  
    return false; 
  }
  document.getElementById("ce").className = "error hidden";  
  return true; 
}
function show(input) {
      var validExtensions = ['jpg','png','jpeg','bmp'];
      var fileName = input.files[0].name;
      var fileNameExt = fileName.substr(fileName.lastIndexOf('.') + 1);
      if ($.inArray(fileNameExt, validExtensions) == -1) {
          input.type = ''
          input.type = 'file'
          $('#user_img').attr('src',"");
          alert("Only these file types are accepted : " + validExtensions.join(', '));
      }
      else
      {
      if (input.files && input.files[0]) {
          var filerdr = new FileReader();
          filerdr.onload = function (e) {
              $('#user_img').attr('src', e.target.result);
          }
          filerdr.readAsDataURL(input.files[0]);
      }
      }
  }
  function validateCheckBox() {
    var check = document.getElementById("gridCheck");    
    if (check.checked) {       
      document.getElementById("cb").className = "error hidden";  
    return true;       
  }    
  document.getElementById("cb").className = "error visible";
    return false;
  }
function confirmPwd() {
  var cp = document.getElementById("cpwd").value;
  var p = document.getElementById("psw").value;
  if (p.length !== 0){
    if (cp !== p) {
      document.getElementById("cpe").className = "error visible";
      return false;
    }
    else{
      document.getElementById("cpe").className = "error hidden";
      return false;
    }
  }
}