 import { navbar } from './components/navbar.js';

 let commom_navbar=document.getElementById("nav-bar")
// commom_navbar.innerHTML=navbar()



let like=document.getElementById("mlike").addEventListener("click",likefun)
let likecount=0
function likefun(){
    console.log("yes")
    likecount++
    let count=document.getElementById("likecount")
    
    count.innerText=likecount
    // let like=document.getElementById("mlike")
    // like.innerText="UnLike"
    // likecount=0
    // count.innerText=likecount

    // let div_color=document.getElementById("like_color")
    // div_color.style.backgroundColor="blue"
    
}

let comments=document.getElementById("mcomments").addEventListener("click",commentsfun)

let comments_counter=0
function commentsfun(){
    let comments_count=document.getElementById("commentscount")
    comments_counter++
    comments_count.innerText=comments_counter;
    let tbody=document.getElementById("comments_data")
    let row=document.createElement("tr")
    let input=document.createElement("input")
    input.setAttribute("id","comments")

    input.placeholder="write a comments"
    input.addEventListener("keyup",e=>{
        e.preventDefault()
        if (e.keyCode==13){
            let comments_value=document.getElementById("comments").value
        let row2=document.createElement("tr")
        let p=document.createElement("p")
        p.innerText=comments_value
        row2.append(p)
        tbody.append(row2)
    
        }
    })
    row.append(input)
    tbody.append(row)

}
