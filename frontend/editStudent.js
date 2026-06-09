let students = JSON.parse(localStorage.getItem("details"));

const urlParams = new URLSearchParams(window.location.search);
const rno = urlParams.get('rno');

let idx = students.findIndex(s => s.rollNumber == rno);
let student = students[idx];

let rollno = document.getElementById("rollNumber");
rollno.value = student.rollNumber;
let name = document.getElementById("name");
name.value = student.name;
let branch = document.getElementById("branch");
branch.value = student.branch;
let cgpa = document.getElementById("cgpa");
cgpa.value = student.cgpa;

let error = document.getElementsByTagName("p")[0];

function edit(event){
    event.preventDefault();

    if(!rollno.value.match(/^[0-9A-Z]{10}$/i)){
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

    student.rollNumber = rollno.value;
    student.name = name.value;
    student.branch = branch.value;
    student.cgpa = cgpa.value;

    students[idx] = student;
    localStorage.setItem("details", JSON.stringify(students));
    window.location.href = 'viewStudents.html';
}
