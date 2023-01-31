
let nav=document.querySelector("nav")

import {navbar2} from '/cosmic-toy-4083/monis_day-04/groupspage/components/navbar.js'
// nav.innerHTML=navbar2()

// console.log('nav:', nav)







let findbtn=document.getElementById("findgp").addEventListener("click",findpage)

function findpage(){
    console.log("yes")
    window.location.href="http://127.0.0.1:5500/cosmic-toy-4083/monis_day-04/groupspage/findGroups/html/find.html"
    return;
}



let groups=JSON.parse(localStorage.getItem("groups"))||[];
display(groups)

function display(arr){
    let left=document.getElementById("left")
           left.innerHTML=null;
    arr.forEach((ele,index)=>{
        let box=document.createElement("div")
        box.style.border="1px solid grey"
        box.style.display="flex"
        box.style.padding="10px"
        box.style.marginTop="30px"
        box.style.background="white"
       
        
        let box1=document.createElement("div")
box1.style.marginRight="5px"
        let image=document.createElement("img")
        image.src=ele.image
        image.style.height="70px"
        image.style.width="70px"

        image.style.borderRadius="50%"
        
        box1.append(image)

        let box2=document.createElement("div")
        // box2.style.display="flex"
        
        let h3=document.createElement("h2")
        h3.style.color="#3bc6db"
        h3.innerText=ele.name
        

        let desc=document.createElement("p")
        desc.innerText=ele.descrip
       
        
        desc.style.marginTop="-13px"
        let btn=document.createElement("button")
        btn.style.backgroundColor="#a41164"
        btn.style.fontSize="11px"
        btn.style.fontWeight="bold"
        btn.style.borderRadius="5px"
        btn.style.color="white"
        btn.style.border="none"
        btn.innerText="Delete"
        btn.style.width="55px"
        btn.style.padding="5px 5px"
btn.addEventListener("click",function(){
    removefun(index)
})
   
        box2.append(h3,desc ,btn)

       
        box.append(box1,box2)

        left.append(box)
    })


}



function removefun(index){

let groups=JSON.parse(localStorage.getItem("groups"))||[];
    

let new_groups=groups.filter(function(ele,i){
    return index!=i
});


localStorage.setItem("groups",JSON.stringify(new_groups))
display(new_groups)

}
