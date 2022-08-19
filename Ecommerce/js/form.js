let miForm = document.getElementById("form");
/* let toastButton = document.getElementById("showToast"); */
miForm.addEventListener("submit", validateForm);


let nameForm = document.getElementById("name");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password"); 

nameForm.onchange = () => {
    let nameForm = document.getElementById("name").value;

    if(nameForm.length < 3 ){
        let content = `<p class="text-white bg-danger p-3">Name can not be null or have less than 3 characters</p>`
        document.getElementById("result").innerHTML = content;
    } else {
        document.getElementById("result").innerHTML = "";
    }
}
lastName.onchange = () => {
    let lastName = document.getElementById("lastName").value;

    if(lastName.length < 3 ){
        let content = `<p class="text-white bg-danger p-3">Last name can not be null or have less than 3 characters</p>`
        document.getElementById("result").innerHTML = content;
    } else {
        document.getElementById("result").innerHTML = "";
    }
}
email.onchange = () => {
    let email = document.getElementById("email").value;

    if(email.length < 3 ){
        let content = `<p class="text-white bg-danger p-3">Email can not be null or have less than 3 characters</p>`
        document.getElementById("result").innerHTML = content;
    } else {
        document.getElementById("result").innerHTML = "";
    }
}
password.onchange = () => {
    let password = document.getElementById("password").value;

    if(password.length < 3 ){
        let content = `<p class="text-white bg-danger p-3">Password can not be null or have less than 3 characters</p>`
        document.getElementById("result").innerHTML = content;
    } else {
        document.getElementById("result").innerHTML = "";
    }
}

function validateForm(e){
    
    e.preventDefault();
    
    let flag = true;
    let nameForm = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value; 

    if(nameForm.trim() == ""){
        let content = `<p class="text-white bg-danger p-3">Name can not be null</p>`
        document.getElementById("showError").innerHTML = content;
        flag = false;
        return false;
    }
    if(lastName.trim() == ""){
        let content = `<p class="text-white bg-danger p-3">Last name can not be null</p>`
        document.getElementById("showError").innerHTML = content;
        flag = false;
        return false;
    }
    if(email.trim() == ""){
        let content = `<p class="text-white bg-danger p-3">Email can not be null</p>`
        document.getElementById("showError").innerHTML = content;
        flag = false;
        return false;
    }
    if(password.trim() == ""){
        let content = `<p class="text-white bg-danger p-3">Password can not be null</p>`
        document.getElementById("showError").innerHTML = content;
        flag = false;
        return false;
    }

    if(flag = true){
          showAlert();
          miForm.submit();
    }
    
    

    

}
function showAlert(){
    
    content = Toastify({
        text: "This is a toast",
        duration: 30000,
        destination: "https://github.com/apvarun/toastify-js",
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();

}



