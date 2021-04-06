var container = document.querySelector(".container");
var menu = document.querySelector(".menu");
var hamberger = document.querySelector(".iconbar");

function responsive_menu(){
    if (container.classList!="container small"){
        
        container.classList.add("small");

    }
    else{
        container.classList.remove("small");
    }
    if (menu.classList=="menu"){
        menu.classList.replace("menu","small_menu");
    }
    else{
        menu.classList.replace("small_menu","menu");
    }
}