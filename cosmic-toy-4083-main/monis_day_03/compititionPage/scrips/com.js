
// import {navbar} from "/cosmic-toy-4083/monis_day_03/blogPage/components/navbar.js"
// let nav=document.querySelector("mnav")
// nav.innerHTML=navbar();

let creatnewcom=document.getElementById("compet").addEventListener("click",compet)
function compet(){
    console.log("yes")
    window.location.href="/monis_day_03/compititionPage/html/newcom.html"
    return;
}




let arr=JSON.parse(localStorage.getItem("compdata"))||[];
console.log('arr:', arr)
display(arr)
function display(arr){
let tbody=document.querySelector("#tbody")
tbody.innerHTML=null
arr.forEach((ele,ind)=>{
    let row=document.createElement("tr")
    tbody.append(row)

    let c1=document.createElement("td")
    

    let image=document.createElement("img")
    image.src="https://kcdn.twiikapp.com/images/badges/contest_running.png"
image.style.height="35px"
    c1.append(image)


    let c2=document.createElement("td")
    
    let p1=document.createElement("p")
    p1.innerText=ele.name
    
    let p2=document.createElement("p")

    p2.innerText=ele.date
let br=document.createElement("br")

    let flag=document.createElement("img")
    flag.src="https://kcdn.twiikapp.com/images/flags/in.png"
    let p3=document.createElement("p")
    p3.innerText=ele.country  
c2.append(p1,p2,br,flag,p3)

    let c3=document.createElement("td")
    c3.innerText=ele.type

    let c4=document.createElement("td")
    c4.innerText="X"
    c4.style.color="red"
    c4.style.cursor="pointer"
    c4.addEventListener("click" ,function(){
        removfunc(ind)
    })
    row.append(c1,c2,c3,c4)


})



}


function removfunc(ind){
    let arr=JSON.parse(localStorage.getItem("compdata"))||[];

    let new_arr=arr.filter(function(ele,i){
        return ind!=i
    });
    localStorage.setItem("compdata",JSON.stringify(new_arr))
    display(new_arr)
    




    
}