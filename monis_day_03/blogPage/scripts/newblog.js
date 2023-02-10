
// import {navbar} from "/cosmic-toy-4083/monis_day_03/blogPage/components/navbar.js"
// let nav=document.querySelector("mnav")
// // nav.innerHTML=navbar()

let btn=document.getElementById("save").addEventListener("click",savefun)
function savefun(){

console.log("yes")
let subject=document.getElementById("subject").value
let content=document.getElementById("content").value

if (subject ===""&& content===""){
    let showerror=document.getElementById("showerror")
    showerror.innerText="The form contains some errors, please see the error messages below for more information or fill the inputs corrects"
showerror.style.color="red"

    let showbox=document.getElementById("errorbox")
showbox.style.border="1px solid red"
let img=document.getElementById("errorimg")
img.src="https://kcdn.twiikapp.com/images/icons/exclamation.png"
}


}
