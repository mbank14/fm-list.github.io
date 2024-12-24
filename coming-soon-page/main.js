import {validateEmail} from '../utilz/validation.js'

const email = document.getElementById("email");
const btnNotifMe = document.getElementById("notifMe");
const comSoon = document.getElementsByClassName("coming-soon")[0];

btnNotifMe.addEventListener("click", function(){

    if(validateEmail(email.value)){
        comSoon.classList.remove("isError");

        alert("Correct !!!");
        email.value = ""
    }else{
        comSoon.classList.add("isError");
    }
    
})

