/* let miForm = document.getElementById("form");
miForm.addEventListener("submit", validateForm); */

let nameForm = document.getElementById("name");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password"); 

nameForm.onchange = () => {
    let nameForm = document.getElementById("name").value;

    if(nameForm.length == 0 || nameForm.length < 3 ){
        let content = `<p class="text-white bg-danger p-3">Name can not be null or have less than 3 characters</p>`
        document.getElementById("result").innerHTML = content;
    } else {
        document.getElementById("result").innerHTML = "";
    }
}
lastName.onchange = () => {
    let lastName = document.getElementById("lastName").value;

    if(lastName.length == 0 || lastName.length < 3 ){
        let content = `<p class="text-white bg-danger p-3">Last name can not be null or have less than 3 characters</p>`
        document.getElementById("result").innerHTML = content;
    } else {
        document.getElementById("result").innerHTML = "";
    }
}
email.onchange = () => {
    let email = document.getElementById("email").value;

    if(email.length == 0 || email.length < 3 ){
        let content = `<p class="text-white bg-danger p-3">Email can not be null or have less than 3 characters</p>`
        document.getElementById("result").innerHTML = content;
    } else {
        document.getElementById("result").innerHTML = "";
    }
}
password.onchange = () => {
    let password = document.getElementById("password").value;

    if(password.length == 0 || password.length < 3 ){
        let content = `<p class="text-white bg-danger p-3">Password can not be null or have less than 3 characters</p>`
        document.getElementById("result").innerHTML = content;
    } else {
        document.getElementById("result").innerHTML = "";
    }
}


/* function validateForm(e){
    e.preventDefault();
    console.log("Formulario Enviado");
} */