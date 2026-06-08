let rno = document.getElementById("rollNumber");
let pass = document.getElementById("password");
let error = document.getElementById("error");

function login(event){
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
    
    const student = JSON.parse(localStorage.getItem(`${rno.value}`));
    if(student == null){
        error.innerHTML = "student with this roll no does not exist.";
        return;
    }
    if(student.password !== pass.value){
        error.innerHTML = "password mismatch";
        return;
    }
    alert("Login Successful");
    window.location.href = 'dashboard.html';
    
}