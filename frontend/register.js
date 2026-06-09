let rno = document.getElementById("rollNumber");
let pass = document.getElementById("password");
let mail = document.getElementById("email");
let re_pass = document.getElementById("confirmPassword");
let error = document.getElementById("error");

function register(event){
    event.preventDefault();
    error.innerHTML = "";
    if(!rno.value.match(/^[0-9A-Z]{10}$/i)){
        error.innerHTML = "Roll Number should be of length 10.";
        return;
    }
    if(!mail.value.match(/^[A-Z0-9.!@#$%^&*]+@gmail.com$/i)){
        error.innerHTML = "Enter a valid gmail address";
        return;
    }
    if(!pass.value.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}/)){
        error.innerHTML = "Password must be atleast 8 characters and contain atleast one <br>uppercase <br>lowercase<br>digit<br>special character";
        return;
    }
    if(pass.value !== re_pass.value){
        error.innerHTML = "Passwords do not match.";
        return;
    }
    alert("Registration Successful!");
    const student = {
        rollNumber: rno.value,
        email: mail.value,
        password: pass.value
    };

    localStorage.setItem(`${student.rollNumber}`, JSON.stringify(student));
    window.location.href = "login.html"
}