window.onload = () => {
    let menu = $("nav-icon4");
    let mobileMenu = $("mobileNav");

    menu.addEventListener('click', function(){
        if(menu.classList.contains("open")){
            menu.classList.remove("open");
            mobileMenu.style.display = "none";
        }else{
            menu.classList.add("open");
            mobileMenu.style.display = "block";
        }
    });
}

function $(id){
    return document.getElementById(id);
}

function $$(className){
    return document.getElementsByClassName(className);
}

function mobileMenu(){
    let mobileMenu = $("mobileNav");
    if(mobileMenu.style.display === "none"){
        mobileMenu.style.display = "block";
    }else{
        mobileMenu.style.display = "none";
    }
}