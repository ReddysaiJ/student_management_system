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

function edit(event){
    event.preventDefault();

    student.rollNumber = rollno.value;
    student.name = name.value;
    student.branch = branch.value;
    student.cgpa = cgpa.value;

    students[idx] = student;
    localStorage.setItem("details", JSON.stringify(students));
    window.location.href = 'viewStudents.html';
}
