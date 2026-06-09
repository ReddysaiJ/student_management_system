let students = JSON.parse(localStorage.getItem("details"));
let tbl = document.getElementsByTagName("tbody")[0];
console.log(students);
for(let i = 0; i < students.length; i++){
    let student = students[i];
    tbl.innerHTML += `
        <tr>
            <td>${student.rollNumber}</td>
            <td>${student.name}</td>
            <td>${student.branch}</td>
            <td>${student.cgpa}</td>
            <td>
                <a href="./editStudent.html?rno=${student.rollNumber}">Edit</a>
            </td>
            <td>
                <button onclick="remove(${i})">Delete</button>
            </td>
        </tr>
    `
}

function remove(idx) {
    students.splice(idx, 1);
    localStorage.setItem("details", JSON.stringify(students));
    window.location.reload();
}