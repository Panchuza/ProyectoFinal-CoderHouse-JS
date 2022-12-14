let miForm = document.getElementById("form");
miForm.addEventListener("submit", validateForm); 

function validateForm(e){
    e.preventDefault();

    let flag = true;
    let nameForm = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let error = ""; 
    console.log(flag)

    if(nameForm.trim() == ""){
          flag = false;
          error = "Warning the name can not be empty"
          messageError(error);
          return false;
    }
    if(lastName.trim() == ""){
          flag = false;
          error = "Warning the last name can not be empty"
          messageError(error);
          return false;
    }
    if(email.trim() == ""){
          flag = false;
          error = "Warning the email can not be empty"
          messageError(error);
          return false;
    }
    if(password.trim() == ""){
          flag = false;
          error = "Warning the password can not be empty"
          messageError(error);
          return false;
    }
    if(flag = true){
      createUser();
    }
    /* miForm.submit(); */
    
}

function createUser(){
  let nameForm = document.getElementById("name");
  let lastName = document.getElementById("lastName");
  let email = document.getElementById("email");
  let password = document.getElementById("password"); 
  let user = {nameUser: nameForm.value, lastName: lastName.value, email: email.value, password: password.value};
  let users = getUserLS();
  users.push(user);
  saveUserLS(users);
  Swal.fire({
    title: 'Congratulation you are Registered now!',
    icon: 'success',
    showCancelButton: false,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, lets shop!'
  }).then((result) => {
    if (result.isConfirmed) {  
      window.location.href = "index.html" 
    }
  })
  
}

function messageError(error){
  Toastify({
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    text: error,
    className: "info",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }
  }).showToast();
}







