let button = document.getElementById("send");
button.addEventListener("click", logInError);

function logInError(){
    let flag = true;
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let emailError = document.getElementById("emailError");
    emailError.innerHTML = "";

    if(email.value == ""){
        emailError.innerHTML = `<p class="text-white bg-danger">Email can not be empty </p>`
        flag = false;
    }
    
    let passwordError = document.getElementById("passwordError");
    passwordError.innerHTML = "";

    if(password.value == ""){
        passwordError.innerHTML = `<p class="text-white bg-danger">Password can not be empty </p>`
        flag = false;
    }
    let emailPassError= document.getElementById("emailPassError")
    emailPassError.innerHTML = "";

    if(flag){
        if(validateUser(email.value, password.value)){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: '¡ Welcome !',
                showConfirmButton : true,
            }).then((result) => {
                if(result.isConfirmed){
                    window.location.href = "index.html";
                }
            })
        }else{
            emailPassError.innerHTML = `<p class="text-white bg-danger">Email or Password doesnt exist</p>`
        }
    }
}

function validateUser(email, password){
    let flag = false;
    const users = getUserLS();

    for (const user of users) {
        if(user.email == email && user.password == password){
            flag = true;
            saveUserSS(user);
        }        
    }

    return flag;
}

