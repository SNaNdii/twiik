let data=JSON.parse(localStorage.getItem("signupdataTwink"))||[];
console.log(data)
class User{
  constructor(){

  }
  login(loginemail,loginpassword){
    console.log(data)
    data.forEach(function(el){
      if(el.email==loginemail&&el.password==loginpassword){
        alert("sucessfull login");
        console.log(el)
        localStorage.setItem("logindata",JSON.stringify(el))
        window.location.href='calender.html'
      }
    })
  }
}


let login1=()=>{
  let loginemail=document.getElementById("loginUsername").value;
  let loginpassword=document.getElementById("loginPassword").value;
  let user=new User();
  user.login(loginemail,loginpassword) 
}