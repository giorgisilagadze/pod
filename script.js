let email = document.querySelector(".input-1");
const error = document.querySelector(".error");
const access = document.querySelector(".butt-1");
const regex = /([a-zA-Z0-9_-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,10})+$/
const secondEmail = document.querySelector(".input-2");
const secondError = document.querySelector(".error-2");
const secondAccess = document.querySelector(".butt-2");

access.addEventListener("click", () => {
    if(regex.test(email.value) == true) {
        email.classList.add("valid");
        error.innerHTML = "";
    }else if(email.value == "") {
        error.innerHTML = "Oops! Please add your email";
        email.classList.remove("valid");
    }else {
        error.innerHTML = "Oops! Please check your email";
        email.classList.remove("valid");
    }
})

secondAccess.addEventListener("click", () => {
    if(regex.test(secondEmail.value) == true) {
        secondEmail.style.border = "solid 2px green";
        secondError.innerHTML = "";
    }else if(secondEmail.value == "") {
        secondError.innerHTML = "Oops! Please add your email";
        secondEmail.style.border = "";
    }else {
        secondError.innerHTML = "Oops! Please check your email";
        secondEmail.style.border = "";
    }
})