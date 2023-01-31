let nav=document.querySelector("nav")

import {navbar2} from '/cosmic-toy-4083/monis_day-04/groupspage/components/navbar.js'
// nav.innerHTML=navbar2()


let groups=JSON.parse(localStorage.getItem("groups"))||[];

       
        let button=document.getElementById("savebtn").addEventListener("click",save)

        function save(){

            let name=document.getElementById("name").value
            let descrip=document.getElementById("Description").value
            let image=document.getElementById("image").value
            let category=document.getElementById("Category").value
        if(name===""|| descrip===""|| image===""|| category===""){
            alert("please fill input fields !")
            return
        } else{
            let obj={
                name,
                descrip,
                image,
                category,
             }
             groups.push(obj)
             localStorage.setItem("groups",JSON.stringify(groups))
             alert("GROUPS CREATED SUCCESFULLY  thank you !")
             window.location.href="http://127.0.0.1:5500/cosmic-toy-4083/monis_day-04/groupspage/mygroupsPage/html/mygroup.html"
             return
              

  

        }


            

        }
