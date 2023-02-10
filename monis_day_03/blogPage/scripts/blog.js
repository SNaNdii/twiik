// https://www.googleapis.com/blogger/v3/blogs/blogId























let key=`AIzaSyBK4hJiQK8kJngSSgSYcwvWDjLPkFPmAVU`


let btn=document.getElementById("checkbox").addEventListener("click", checkfunc)
function checkfunc(){
    let value=document.getElementById("checkbox").checked
    console.log(value)
    if(value==true){
        blogs()
        async function blogs(){
            try{
                let res=await fetch(`https://www.googleapis.com/blogger/v3/blogs/2399953/posts?key=${key}`)
            
            
                let data=await res.json()
                
                
                let { items }=data
                console.log('items:', items)
                display(items)
            } catch(err){
                console.log('err:', err)
            }
            
            // for getting pages
            //https://www.googleapis.com/blogger/v3/blogs/4967929378133675647/pages?key=YOUR-API-KEY
            }

            
       
    }else{
let container=document.getElementById("blog_container")
container.innerHTML=null
      
        
    }
    
}



let display=(arr)=>{
let container=document.getElementById("blog_container")

arr.forEach(ele=>{

    let box=document.createElement("div")
    box.setAttribute("id","blogsmallbox")
    box.style.padding="20px"
    box.style.color="black"

    let boxchild=document.createElement("div")
    let image=document.createElement("img")
    image.src=ele.author.image.url
    boxchild.append(image)

    let boxchild2=document.createElement("div")
     let title=document.createElement("h3")
     title.innerText=ele.title
     title.style.color="#3BC6DB"

     let name=document.createElement("h5")
     name.innerText=ele.author.displayName

     let url1=document.createElement("a")
    url1.href=ele.url
     url1.innerText=` URL :- ${ele.url}`
     url1.style.color="black"
     
     let publishedOn=document.createElement("p")
     publishedOn.innerText=`Published on :- ${ele.published}`
     let updated=document.createElement("p")
     updated.innerText=` last Updated on :- ${ele.updated}`
    boxchild2.append(title,name,url1,publishedOn,updated)
     
     
box.append( boxchild,boxchild2)
    container.append(box)


})



}

// import {navbar} from "/cosmic-toy-4083/monis_day_03/blogPage/components/navbar.js"
// let nav=document.querySelector("mnav")
// // nav.innerHTML=navbar();