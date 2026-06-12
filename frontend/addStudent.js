let rno = document.getElementById("rollNumber");
let name = document.getElementById("name");
let branch = document.getElementById("branch");
let cgpa = document.getElementById("cgpa");
let error = document.getElementsByTagName("p")[0];

async function add(event){
    event.preventDefault();
    // let details = JSON.parse(localStorage.getItem("details")) || [];

    if(!rno.value.match(/^[0-9A-Z]{10}$/i)){
        error.innerHTML = "Roll Number should be of length 10.";
        return;
    }
    if(!name.value.match(/^[a-zA-Z]+([a-zA-Z\s]*[a-zA-Z]+)?$/)){
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

    try{
        await fetch("http://localhost:3000/students", {
            method: "POST",
            body: JSON.stringify(student)
        })
    } catch(error){
        console.error(error);
        return
    }
    window.location.href = './viewStudents.html';
}