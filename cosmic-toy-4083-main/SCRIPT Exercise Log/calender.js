let newDate = new Date()
let date = newDate.getDate()
let month = newDate.getMonth()
let year = newDate.getFullYear()
document.getElementById("ncMyDate").innerText = date + "/" + month + "/" + year;

let data=JSON.parse(localStorage.getItem("logindata"))
console.log(data);

document.getElementById("nc_username").innerHTML=data.username;
