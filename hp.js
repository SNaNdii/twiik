function changeBg(){
    var navbar = document.getElementById('snav')
    var scrollValue = window.scrollY;
    // console.log(scrollValue);

    if(scrollValue <150 ){
        navbar.classList.remove('bgColor')
    }else{
        navbar.classList.add('bgColor');
    }
}

window.addEventListener('scroll',changeBg)