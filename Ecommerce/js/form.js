let miForm = document.getElementById("form"); 
miForm.addEventListener("submit", validateForm); 


let nameForm = document.getElementById("name");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password"); 

nameForm.onchange = () => {
    let nameForm = document.getElementById("name").value;

    if(nameForm.length < 3 ){
        let content = `<p class="text-white bg-danger p-3">Name can not be have less than 3 characters</p>`
        document.getElementById("result").innerHTML = content;
    } else {
        document.getElementById("result").innerHTML = "";
    }
}
lastName.onchange = () => {
    let lastName = document.getElementById("lastName").value;

    if(lastName.length < 3 ){
        let content = `<p class="text-white bg-danger p-3">Last name can not have less than 3 characters</p>`
        document.getElementById("result").innerHTML = content;
    } else {
        document.getElementById("result").innerHTML = "";
    }
}
email.onchange = () => {
    let email = document.getElementById("email").value;

    if(email.length < 3 ){
        let content = `<p class="text-white bg-danger p-3">Email can not have less than 3 characters</p>`
        document.getElementById("result").innerHTML = content;
    } else {
        document.getElementById("result").innerHTML = "";
    }
}
password.onchange = () => {
    let password = document.getElementById("password").value;

    if(password.length < 3 ){
        let content = `<p class="text-white bg-danger p-3">Password can not have less than 3 characters</p>`
        document.getElementById("result").innerHTML = content;
    } else {
        document.getElementById("result").innerHTML = "";
    }
}

function validateForm(e){
    
    e.preventDefault();
    
    let nameForm = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value; 

    if(nameForm.trim() == ""){
        Toastify({
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            text: "Warning the name can not be empty",
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();
        return false;
    }
    if(lastName.trim() == ""){
        Toastify({
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            text: "Warning the last name can not be empty",
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();
        return false;
    }
    if(email.trim() == ""){
        Toastify({
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            text: "Warning the email can not be empty",
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();
        return false;
    }
    if(password.trim() == ""){
        Toastify({
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            text: "Warning the password can not be empty",
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();
        return false;
    }

    Swal.fire({
        title: 'Are you sure?',
        text: "You are almost registered",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, lets do it!'
      }).then((result) => {
        if (result.isConfirmed) {
        saveUser(nameForm, lastName, email, password),
          Swal.fire(
            '¡You are now Registered!',
            'Your user is saved.',
            'success'
          )       
        }
/*         miForm.submit();  */
      })

}

function saveUser(nameForm, lastName, email, password){
    
    localStorage.setItem("userForm", JSON.stringify({nameForm: nameForm, lastName: lastName, email: email, password: password}));
}




