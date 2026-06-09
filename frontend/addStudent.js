let rno = document.getElementById("rollNumber");
let name = document.getElementById("name");
let branch = document.getElementById("branch");
let cgpa = document.getElementById("cgpa");
let error = document.getElementsByTagName("p")[0];

function add(event){
    event.preventDefault();
    let details = JSON.parse(localStorage.getItem("details")) || [];
    
    if(!rno.value.match(/^[0-9A-Z]{10}$/i)){
        error.innerHTML = "Roll Number should be of length 10.";
        return;
    }
    if(!name.value.match(/^[A-Z]+$/i)){
        error.innerHTML = "Name should contain only alphabets.";
        return;
    }
    if(!branch.value.match(/(IT|CS|CSE|CSD|CSM|CSC|AIML|AIDS|ECE|Civil|MECH)/i)){
        error.innerHTML = "Branch Unknown."
        return;
    }
    if(!cgpa.value.match(/^([0-9](\.[0-9]{0,2})?|(10(\.[0]{0,2})?))$/)){
        error.innerHTML = "Invalid CGPA."
        return;
    }
    let student = {
        rollNumber: rno.value,
        name: name.value,
        branch: branch.value,
        cgpa: cgpa.value
    }
    details.push(student);
    localStorage.setItem("details", JSON.stringify(details));
    window.location.href = './viewStudents.html';
}