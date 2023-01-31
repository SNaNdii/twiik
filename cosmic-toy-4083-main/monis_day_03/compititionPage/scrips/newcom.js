// import {navbar} from "/cosmic-toy-4083/monis_day_03/blogPage/components/navbar.js"
// let nav=document.querySelector("mnav")
// // nav.innerHTML=navbar();

let arr=JSON.parse(localStorage.getItem("compdata"))||[];

let saveme=document.getElementById("saveme").addEventListener("click",savebtn)
function savebtn(){
console.log("yes")
let name=document.getElementById("name").value
let date=document.getElementById("date").value
let desc=document.getElementById("description").value
let country=document.getElementById("country").value
let type=document.getElementById("type").value

let obj={
    name,
    date,
    desc, 
    country,
    type,
}
console.log('obj:', obj)
arr.push(obj)

localStorage.setItem("compdata",JSON.stringify(arr))

if(name=="" || date=="" || country==""){
    alert("please fill input fields first !")
    return
}else{
    window.location.href="compititions.html"
    return

}

}