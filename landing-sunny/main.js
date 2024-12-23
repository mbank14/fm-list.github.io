const menuBurger = document.getElementById("menuBurger");
const navWrapper = document.getElementsByClassName("navigation-wrapper")[0];

menuBurger.addEventListener("click", ()=>{
    const listMenu = document.getElementById("listMenu");
    navWrapper.classList.toggle("active");
});

function koko(){
    // console.log(navWrapper);
    if(window.scrollY > 150){
        navWrapper.classList.add("is-scroll");
    }else{
        navWrapper.classList.remove("is-scroll");
    }
};
if(window.scrollX > 0){
    console.log("koko");
}else{
    // window.scroll(0, 0)
}

window.addEventListener('scroll', koko);