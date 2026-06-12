const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
let rno = document.getElementById("rollNumber");
let name = document.getElementById("name");
let branch = document.getElementById("branch");
let cgpa = document.getElementById("cgpa");
let error = document.getElementsByTagName("p")[0];

let student = {}

async function get() {
    try{
        var student = await fetch(`http://localhost:3000/students/${id}`)
                            .then(response => response.json());
        console.log(student);

        if(!student){
            error.innerHTML = "Student Not found";
            return;
        }
    } catch(error){
        console.error(error);
        return;
    }
    
    rno.value = student.rollNumber;
    name.value = student.name;
    branch.value = student.branch;
    cgpa.value = student.cgpa;
}

async function edit(event){
    event.preventDefault();

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

    student.rollNumber = rno.value;
    student.name = name.value;
    student.branch = branch.value;
    student.cgpa = cgpa.value;

    try{
        let response = await fetch(`http://localhost:3000/students/${id}`, {
            method: "PUT",
            body: JSON.stringify(student)
        })
        if(response.ok)
            window.location.href = 'viewStudents.html';
        else
            error.innerHTML = 'Failed to update data';
    } catch(error){
        console.error(error);
    }
}

get();
