let rno = document.getElementById("rollNumber");
let pass = document.getElementById("password");
let mail = document.getElementById("email");
let re_pass = document.getElementById("confirmPassword");
let error = document.getElementById("error");

function register(event){
    event.preventDefault();
    error.innerHTML = "";
    
    if (rno.value.length !== 10) {
        error.innerHTML = "Roll Number should be of length 10.";
        return;
    }
    if(pass.value.length < 6){
        error.innerHTML = "Password must be atleast of length 6.";
        return;
    }
    if (pass.value !== re_pass.value) {
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