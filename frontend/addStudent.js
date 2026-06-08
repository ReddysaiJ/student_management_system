let rno = document.getElementById("rollNumber");
let name = document.getElementById("name");
let branch = document.getElementById("branch");
let cgpa = document.getElementById("cgpa");

function add(event){
    event.preventDefault();
    let details = JSON.parse(localStorage.getItem("details"));
    console.log(details);
    if(details === null)
        details = [];

    let student = {
        rollNumber: rno.value,
        name: name.value,
        branch: branch.value,
        cgpa: cgpa.value
    }
    console.log(student);
    details.push(student);
    localStorage.setItem("details", JSON.stringify(details));
    window.location.href = './viewStudents.html';
}