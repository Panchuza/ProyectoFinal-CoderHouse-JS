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
    
    let nameForm = document.getElementById("name");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let password = document.getElementById("password"); 

    if(nameForm.value == ""){
        let content = `<p class="text-white bg-danger p-3">Name can not be null</p>`
        document.getElementById("showError").innerHTML = content;
        return false;
    }
    if(lastName.value == ""){
        let content = `<p class="text-white bg-danger p-3">Last name can not be null</p>`
        document.getElementById("showError").innerHTML = content;
        return false;
    }
    if(email.value == ""){
        let content = `<p class="text-white bg-danger p-3">Email can not be null</p>`
        document.getElementById("showError").innerHTML = content;
        return false;
    }
    if(password.value == ""){
        let content = `<p class="text-white bg-danger p-3">Password can not be null</p>`
        document.getElementById("showError").innerHTML = content;
        return false;
    }

    miForm.submit();
}

//TEST 

/* <div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <img src="..." class="rounded me-2" alt="...">
      <strong class="me-auto">¡Congratulations!</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
    You're now part of E-Movables
    </div>
  </div>
</div> */


/* `<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <strong class="me-auto">¡Congratulations!</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
        You're now part of E-Movables
        </div>
      </div>` */


