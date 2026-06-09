let rno = document.getElementById("rollNumber");
let pass = document.getElementById("password");
let error = document.getElementById("error");

function login(event){
    event.preventDefault();
    error.innerHTML = "";
    
    if(!rno.value.match(/^[0-9A-Z]{10}$/i)){
        error.innerHTML = "Roll Number should be of length 10.";
        return;
    }
    if(!pass.value.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}/)){
        error.innerHTML = "Wrong password"
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