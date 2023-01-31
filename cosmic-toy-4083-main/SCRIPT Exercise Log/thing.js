let url1 = "https://cdn.pixabay.com/photo/2012/04/26/12/44/skiing-42369__340.png"
let url2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjXDov2jjbxqTa7eW0h8L8oNlmH5pv4QFBDsVcgIPMa0Z5SbpXz_kSBwcg5ySn-_9RyCY&usqp=CAU"
let url3 =  "https://simg.nicepng.com/png/small/334-3348448_google-received-delete-icon-png-transparent.png"

function ncardio(){
    document.querySelector("#nAdd").innerHTML = ""
    document.querySelector("tbody").innerHTML = ""

    document.getElementById("nchange").innerText = "Cardio"
    document.getElementById("nline").innerText = "Add the activities and tracks for Cardio workout which you want to use in your calendar. Use the forms below to add tracks and activites. To edit a track, click the track name."
// .......................BUTTON.................................
let box = document.createElement("div")
let btn = document.createElement("button");
    btn.innerText = "CREATE NEW ACTIVITY"
    btn.id = "ncreate"
    box.append(btn)
    document.querySelector("#nAdd").append(box)
// .......................BUTTON.................................

let heading = document.createElement("div")
let header = document.createElement("button");
    header.innerText = "Your Activity"
    header.id = "nheading"
    heading.append(header)
    document.querySelector("#nAdd").append(heading)
// .......................LIST...................................
//   <---Row(1)--->
let row1 = document.createElement("tr");
let col1 = document.createElement("td");
    col1.classList.add("nImgcolumn")
let row1img1 = document.createElement("img")
    row1img1.src = url1

    col1.append(row1img1)

let col2 = document.createElement("td");
    col2.classList.add("ncolumn")
    col2.innerText = "Backcountry Nordic";

let col3 = document.createElement("td");
    col3.classList.add("nImgcolumn")
let row1img2 = document.createElement("img")
    row1img2.src = url2
    col3.append(row1img2)

let col4 = document.createElement("td");
    col4.classList.add("nImgcolumn")
let row1img3 = document.createElement("img")
    row1img3.src = url3
    col4.append(row1img3)
row1.append(col1, col2, col3, col4);
//   <---Row(1)--->

//   <---Row(2)--->
let row2 = document.createElement("tr");

let row2c1 = document.createElement("td");
    row2c1.classList.add("nImgcolumn")
let row2img1 = document.createElement("img")
    row2img1.src = url1
    row2c1.append(row2img1)

let row2c2 = document.createElement("td");
    row2c2.innerText = "Cross-country skiing - Classic";
    row2c2.classList.add("ncolumn")

let row2c3 = document.createElement("td");
    row2c3.classList.add("nImgcolumn")
let row2img2 = document.createElement("img")
    row2img2.src = url2
    row2c3.append(row2img2)

let row2c4 = document.createElement("td");
    row2c4.classList.add("nImgcolumn")
let row2img3 = document.createElement("img")
    row2img3.src = url3
    row2c4.append(row2img3)
row2.append(row2c1, row2c2, row2c3, row2c4);
//   <---Row(2)--->

//   <---Row(3)--->
let row3 = document.createElement("tr");

let row3c1 = document.createElement("td");
    row3c1.classList.add("nImgcolumn")
let row3img1 = document.createElement("img")
    row3img1.src = url1
    row3c1.append(row3img1)

let row3c2 = document.createElement("td");
    row3c2.innerText = "Cross-country skiing - Skate";
    row3c2.classList.add("ncolumn")

let row3c3 = document.createElement("td");
    row3c3.classList.add("nImgcolumn")
let row3img2 = document.createElement("img")
    row3img2.src = url2
    row3c3.append(row3img2)

let row3c4 = document.createElement("td");
    row3c4.classList.add("nImgcolumn")
let row3img3 = document.createElement("img")
    row3img3.src = url3
    row3c4.append(row3img3)
row3.append(row3c1, row3c2, row3c3, row3c4);
//   <---Row(3)--->

//   <---Row(4)--->
let row4 = document.createElement("tr");

let row4c1 = document.createElement("td");
    row4c1.classList.add("nImgcolumn")
let row4img1 = document.createElement("img")
    row4img1.src = url1
    row4c1.append(row4img1)

let row4c2 = document.createElement("td");
    row4c2.innerText = "Cycling";
    row4c2.classList.add("ncolumn")

let row4c3 = document.createElement("td");
    row4c3.classList.add("nImgcolumn")
let row4img2 = document.createElement("img")
    row4img2.src = url2
    row4c3.append(row4img2)

let row4c4 = document.createElement("td");
    row4c4.classList.add("nImgcolumn")
let row4img3 = document.createElement("img")
    row4img3.src = url3
    row4c4.append(row4img3)
row4.append(row4c1, row4c2, row4c3, row4c4);
//   <---Row(4)--->

//   <---Row(5)--->
let row5 = document.createElement("tr");

let row5c1 = document.createElement("td");
    row5c1.classList.add("nImgcolumn")
let row5img1 = document.createElement("img")
    row5img1.src = url1
    row5c1.append(row5img1)

let row5c2 = document.createElement("td");
    row5c2.innerText = "Backcountry Nordic";
    row5c2.classList.add("ncolumn")

let row5c3 = document.createElement("td");
    row5c3.classList.add("nImgcolumn")
let row5img2 = document.createElement("img")
    row5img2.src = url2
    row5c3.append(row5img2)

let row5c4 = document.createElement("td");
    row5c4.classList.add("nImgcolumn")
let row5img3 = document.createElement("img")
    row5img3.src = url3
    row5c4.append(row5img3)
row5.append(row5c1, row5c2, row5c3, row5c4);
//   <---Row(5)--->
document.querySelector("tbody").append(row1, row2, row3, row4, row5);
}

// CARDIO  GYM  FUNCTION  ------------------------------------------------------------------------------------->

function ncardioGym(){
    document.querySelector("#nAdd").innerHTML = ""
    document.querySelector("tbody").innerHTML = ""

    document.getElementById("nchange").innerText = "Exercise Database Cardio - Gym"
    document.getElementById("nline").innerText = "Here you add your exercises for Cardio - Gym. Use the fields below to add your exercise. Click on an exercise to edit. Click the trash can icon to delete an exercise."
// .......................BUTTON.................................
let box = document.createElement("div")
let btn = document.createElement("button");
    btn.innerText = "CREATE NEW ACTIVITY"
    btn.id = "ncreate"
    box.append(btn)
    document.querySelector("#nAdd").append(box)
// .......................BUTTON.................................

let heading = document.createElement("div")
let header = document.createElement("button");
    header.innerText = "Your Activity"
    header.id = "nheading"
    heading.append(header)
    document.querySelector("#nAdd").append(heading)
// .......................LIST...................................
//   <---Row(1)--->
let row1 = document.createElement("tr");

let col2 = document.createElement("td");
    col2.classList.add("ncolumn")
    col2.innerText = "Cross Trainer";

let col3 = document.createElement("td");
    col3.classList.add("nImgcolumn")
let row1img2 = document.createElement("img")
    row1img2.src = url2
    col3.append(row1img2)

let col4 = document.createElement("td");
    col4.classList.add("nImgcolumn")
let row1img3 = document.createElement("img")
    row1img3.src = url3
    col4.append(row1img3)
row1.append(col2, col3, col4);
//   <---Row(1)--->

//   <---Row(2)--->
let row2 = document.createElement("tr");

let row2c2 = document.createElement("td");
    row2c2.innerText = "Elliptical Trainer";
    row2c2.classList.add("ncolumn")

let row2c3 = document.createElement("td");
    row2c3.classList.add("nImgcolumn")
let row2img2 = document.createElement("img")
    row2img2.src = url2
    row2c3.append(row2img2)

let row2c4 = document.createElement("td");
    row2c4.classList.add("nImgcolumn")
let row2img3 = document.createElement("img")
    row2img3.src = url3
    row2c4.append(row2img3)
row2.append(row2c2, row2c3, row2c4);
//   <---Row(2)--->

//   <---Row(3)--->
let row3 = document.createElement("tr");

let row3c2 = document.createElement("td");
    row3c2.innerText = "Jump rope";
    row3c2.classList.add("ncolumn")

let row3c3 = document.createElement("td");
    row3c3.classList.add("nImgcolumn")
let row3img2 = document.createElement("img")
    row3img2.src = url2
    row3c3.append(row3img2)

let row3c4 = document.createElement("td");
    row3c4.classList.add("nImgcolumn")
let row3img3 = document.createElement("img")
    row3img3.src = url3
    row3c4.append(row3img3)
row3.append(row3c2, row3c3, row3c4);
//   <---Row(3)--->

//   <---Row(4)--->
let row4 = document.createElement("tr");

let row4c2 = document.createElement("td");
    row4c2.innerText = "Nordic track machine";
    row4c2.classList.add("ncolumn")

let row4c3 = document.createElement("td");
    row4c3.classList.add("nImgcolumn")
let row4img2 = document.createElement("img")
    row4img2.src = url2
    row4c3.append(row4img2)

let row4c4 = document.createElement("td");
    row4c4.classList.add("nImgcolumn")
let row4img3 = document.createElement("img")
    row4img3.src = url3
    row4c4.append(row4img3)
row4.append(row4c2, row4c3, row4c4);
//   <---Row(4)--->

//   <---Row(5)--->
let row5 = document.createElement("tr");

let row5c2 = document.createElement("td");
    row5c2.innerText = "Orbitrek";
    row5c2.classList.add("ncolumn")

let row5c3 = document.createElement("td");
    row5c3.classList.add("nImgcolumn")
let row5img2 = document.createElement("img")
    row5img2.src = url2
    row5c3.append(row5img2)

let row5c4 = document.createElement("td");
    row5c4.classList.add("nImgcolumn")
let row5img3 = document.createElement("img")
    row5img3.src = url3
    row5c4.append(row5img3)
row5.append(row5c2, row5c3, row5c4);
//   <---Row(5)--->

document.querySelector("tbody").append(row1, row2, row3, row4, row5);
// .......................LIST...................................
}

// --Gym Class ------------------------------------------------------------------------>
let url4 = "https://www.nordicwalking.net.nz/content/images/logos/Gym%20Class%20Logo.jpg"
function nGymClass(){
    document.querySelector("#nAdd").innerHTML = ""
    document.querySelector("tbody").innerHTML = ""

    document.getElementById("nchange").innerText = "Add and Change classes for Gym Class"
    document.getElementById("nline").innerText = "Here you can add the classes you want to use in your diary under the category GYM CLASS . Use the form below to add to your exercise database. Click on your classes to change them. Click on the trashcan do delete your class."
// .......................BUTTON.................................
let box = document.createElement("div")
let btn = document.createElement("button");
    btn.innerText = "CREATE NEW ACTIVITY"
    btn.id = "ncreate"
    box.append(btn)
    document.querySelector("#nAdd").append(box)
// .......................BUTTON.................................

let heading = document.createElement("div")
let header = document.createElement("button");
    header.innerText = "Your Activity"
    header.id = "nheading"
    heading.append(header)
    document.querySelector("#nAdd").append(heading)
// .......................LIST...................................
//   <---Row(1)--->
let row1 = document.createElement("tr");
let col1 = document.createElement("td");
    col1.classList.add("nImgcolumn")
let row1img1 = document.createElement("img")
    row1img1.src = url4

    col1.append(row1img1)

let col2 = document.createElement("td");
    col2.classList.add("ncolumn")
    col2.innerText = "Aerobics";

let col3 = document.createElement("td");
    col3.classList.add("nImgcolumn")
let row1img2 = document.createElement("img")
    row1img2.src = url2
    col3.append(row1img2)

let col4 = document.createElement("td");
    col4.classList.add("nImgcolumn")
let row1img3 = document.createElement("img")
    row1img3.src = url3
    col4.append(row1img3)
row1.append(col1, col2, col3, col4);
//   <---Row(1)--->

//   <---Row(2)--->
let row2 = document.createElement("tr");

let row2c1 = document.createElement("td");
    row2c1.classList.add("nImgcolumn")
let row2img1 = document.createElement("img")
    row2img1.src = url4
    row2c1.append(row2img1)

let row2c2 = document.createElement("td");
    row2c2.innerText = "Aerobics - Average";
    row2c2.classList.add("ncolumn")

let row2c3 = document.createElement("td");
    row2c3.classList.add("nImgcolumn")
let row2img2 = document.createElement("img")
    row2img2.src = url2
    row2c3.append(row2img2)

let row2c4 = document.createElement("td");
    row2c4.classList.add("nImgcolumn")
let row2img3 = document.createElement("img")
    row2img3.src = url3
    row2c4.append(row2img3)
row2.append(row2c1, row2c2, row2c3, row2c4);
//   <---Row(2)--->

//   <---Row(3)--->
let row3 = document.createElement("tr");

let row3c1 = document.createElement("td");
    row3c1.classList.add("nImgcolumn")
let row3img1 = document.createElement("img")
    row3img1.src = url4
    row3c1.append(row3img1)

let row3c2 = document.createElement("td");
    row3c2.innerText = "Aerobics - High Impact";
    row3c2.classList.add("ncolumn")

let row3c3 = document.createElement("td");
    row3c3.classList.add("nImgcolumn")
let row3img2 = document.createElement("img")
    row3img2.src = url2
    row3c3.append(row3img2)

let row3c4 = document.createElement("td");
    row3c4.classList.add("nImgcolumn")
let row3img3 = document.createElement("img")
    row3img3.src = url3
    row3c4.append(row3img3)
row3.append(row3c1, row3c2, row3c3, row3c4);
//   <---Row(3)--->

//   <---Row(4)--->
let row4 = document.createElement("tr");

let row4c1 = document.createElement("td");
    row4c1.classList.add("nImgcolumn")
let row4img1 = document.createElement("img")
    row4img1.src = url4
    row4c1.append(row4img1)

let row4c2 = document.createElement("td");
    row4c2.innerText = "Aerobics - Low Impact";
    row4c2.classList.add("ncolumn")

let row4c3 = document.createElement("td");
    row4c3.classList.add("nImgcolumn")
let row4img2 = document.createElement("img")
    row4img2.src = url2
    row4c3.append(row4img2)

let row4c4 = document.createElement("td");
    row4c4.classList.add("nImgcolumn")
let row4img3 = document.createElement("img")
    row4img3.src = url3
    row4c4.append(row4img3)
row4.append(row4c1, row4c2, row4c3, row4c4);
//   <---Row(4)--->

//   <---Row(5)--->
let row5 = document.createElement("tr");

let row5c1 = document.createElement("td");
    row5c1.classList.add("nImgcolumn")
let row5img1 = document.createElement("img")
    row5img1.src = url4
    row5c1.append(row5img1)

let row5c2 = document.createElement("td");
    row5c2.innerText = "Barre";
    row5c2.classList.add("ncolumn")

let row5c3 = document.createElement("td");
    row5c3.classList.add("nImgcolumn")
let row5img2 = document.createElement("img")
    row5img2.src = url2
    row5c3.append(row5img2)

let row5c4 = document.createElement("td");
    row5c4.classList.add("nImgcolumn")
let row5img3 = document.createElement("img")
    row5img3.src = url3
    row5c4.append(row5img3)
row5.append(row5c1, row5c2, row5c3, row5c4);
//   <---Row(5)--->
document.querySelector("tbody").append(row1, row2, row3, row4, row5);
}

// ---Sports ------------------------------------------------------------------------------------------>

function nsports(){
    let url5 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXVe_nkltEr9smPyZT7n5-QId-T12pWFR6vA&usqp=CAU"

    document.querySelector("#nAdd").innerHTML = ""
    document.querySelector("tbody").innerHTML = ""

    document.getElementById("nchange").innerText = "Edit and add sports"
    document.getElementById("nline").innerText = "Here you add sports. Use the fields below to add your sport. Click on a sport to edit. Click the trash can icon to delete the sport."

// ...............BUTTON................
let box = document.createElement("div")
let btn = document.createElement("button");
    btn.innerText = "CREATE NEW ACTIVITY"
    btn.id = "ncreate"
    box.append(btn)
    document.querySelector("#nAdd").append(box)
// ...............BUTTON...............

let heading = document.createElement("div")
let header = document.createElement("button");
    header.innerText = "Your Activity"
    header.id = "nheading"
    heading.append(header)
    document.querySelector("#nAdd").append(heading)

// .......................LIST...................................
//   <---Row(1)--->
let row1 = document.createElement("tr");
let col1 = document.createElement("td");
    col1.classList.add("nImgcolumn")
let row1img1 = document.createElement("img")
    row1img1.src = url5

    col1.append(row1img1)

let col2 = document.createElement("td");
    col2.classList.add("ncolumn")
    col2.innerText = "Aerobics";

let col3 = document.createElement("td");
    col3.classList.add("nImgcolumn")
let row1img2 = document.createElement("img")
    row1img2.src = url2
    col3.append(row1img2)

let col4 = document.createElement("td");
    col4.classList.add("nImgcolumn")
let row1img3 = document.createElement("img")
    row1img3.src = url3
    col4.append(row1img3)
row1.append(col1, col2, col3, col4);
//   <---Row(1)--->

//   <---Row(2)--->
let row2 = document.createElement("tr");

let row2c1 = document.createElement("td");
    row2c1.classList.add("nImgcolumn")
let row2img1 = document.createElement("img")
    row2img1.src = url5
    row2c1.append(row2img1)

let row2c2 = document.createElement("td");
    row2c2.innerText = "Aerobics - Average";
    row2c2.classList.add("ncolumn")

let row2c3 = document.createElement("td");
    row2c3.classList.add("nImgcolumn")
let row2img2 = document.createElement("img")
    row2img2.src = url2
    row2c3.append(row2img2)

let row2c4 = document.createElement("td");
    row2c4.classList.add("nImgcolumn")
let row2img3 = document.createElement("img")
    row2img3.src = url3
    row2c4.append(row2img3)
row2.append(row2c1, row2c2, row2c3, row2c4);
//   <---Row(2)--->

//   <---Row(3)--->
let row3 = document.createElement("tr");

let row3c1 = document.createElement("td");
    row3c1.classList.add("nImgcolumn")
let row3img1 = document.createElement("img")
    row3img1.src = url5
    row3c1.append(row3img1)

let row3c2 = document.createElement("td");
    row3c2.innerText = "Aerobics - High Impact";
    row3c2.classList.add("ncolumn")

let row3c3 = document.createElement("td");
    row3c3.classList.add("nImgcolumn")
let row3img2 = document.createElement("img")
    row3img2.src = url2
    row3c3.append(row3img2)

let row3c4 = document.createElement("td");
    row3c4.classList.add("nImgcolumn")
let row3img3 = document.createElement("img")
    row3img3.src = url3
    row3c4.append(row3img3)
row3.append(row3c1, row3c2, row3c3, row3c4);
//   <---Row(3)--->

//   <---Row(4)--->
let row4 = document.createElement("tr");

let row4c1 = document.createElement("td");
    row4c1.classList.add("nImgcolumn")
let row4img1 = document.createElement("img")
    row4img1.src = url5
    row4c1.append(row4img1)

let row4c2 = document.createElement("td");
    row4c2.innerText = "Aerobics - Low Impact";
    row4c2.classList.add("ncolumn")

let row4c3 = document.createElement("td");
    row4c3.classList.add("nImgcolumn")
let row4img2 = document.createElement("img")
    row4img2.src = url2
    row4c3.append(row4img2)

let row4c4 = document.createElement("td");
    row4c4.classList.add("nImgcolumn")
let row4img3 = document.createElement("img")
    row4img3.src = url3
    row4c4.append(row4img3)
row4.append(row4c1, row4c2, row4c3, row4c4);
//   <---Row(4)--->

//   <---Row(5)--->
let row5 = document.createElement("tr");

let row5c1 = document.createElement("td");
    row5c1.classList.add("nImgcolumn")
let row5img1 = document.createElement("img")
    row5img1.src = url5
    row5c1.append(row5img1)

let row5c2 = document.createElement("td");
    row5c2.innerText = "Barre";
    row5c2.classList.add("ncolumn")

let row5c3 = document.createElement("td");
    row5c3.classList.add("nImgcolumn")
let row5img2 = document.createElement("img")
    row5img2.src = url2
    row5c3.append(row5img2)

let row5c4 = document.createElement("td");
    row5c4.classList.add("nImgcolumn")
let row5img3 = document.createElement("img")
    row5img3.src = url3
    row5c4.append(row5img3)
row5.append(row5c1, row5c2, row5c3, row5c4);
//   <---Row(5)--->
document.querySelector("tbody").append(row1, row2, row3, row4, row5);

}
function nlift(){
    document.querySelector("#nAdd").innerHTML = ""
    document.querySelector("tbody").innerHTML = ""

    document.getElementById("nchange").innerText = "Exercise Database Weight Lifting"
    document.getElementById("nline").innerText = "Here you can add and edit your weight lifting exercises that you can use in your workouts."
}

// <----Weight lifting--------------------------------------------------------------->


// function deleteRow() {
// event.target.parentNode.remove();
// }


