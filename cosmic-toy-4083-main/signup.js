var myInput = document.getElementById("S_Password");
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
let signuparr=JSON.parse(localStorage.getItem("signupdataTwink"))||[]; 
console.log(signuparr)
class signupUser{
    constructor(){
    }
    signup(username,password,email,image){
        this.username=username;
        this.password=password,
        this.email=email,
        this.image=image,
        data.push(this);
        if(username==""||email==""||image==""||password==""){
          return 
        }
        localStorage.setItem("signupdataTwink",JSON.stringify(data))
        alert("SUCESSFULL SIGN-UP")
    }
   
}
let emailSignup=()=>{
    console.log("ok")
    let username=document.getElementById("S_name").value;
    let email=document.getElementById("S_email").value;
    let image=document.getElementById("S_Image").value;
    let password=document.getElementById("S_Password").value;
    let con_password=document.getElementById("con_password").value;
    if(username==""||email==""||image==""||password==""){
        alert("Plz Fill All The Details")
    }
    if(password!==con_password){
        alert("Plz Fill The Same Password ")
    }
    let user=new signupUser();
    user.signup(username,password,email,image)

}
