let miForm = document.getElementById("form");
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
          showMessageSubmit();
    }
    /* miForm.submit(); */
    

    

}
function showMessageSubmit(){
    Swal.fire({
      icon: 'success',
      title: '¡You are now Registered!',
      showConfirmButton: false,
      timer: 15000,
      footer: '<button class="btn btn-warning"><a href="index.html">Go back to shop!</a></button>'
    })
  }



