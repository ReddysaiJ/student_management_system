async function get(){
    let tbl = document.getElementsByTagName("tbody")[0];
    try{
        var students = await fetch("http://localhost:3000/students")
                        .then(response => response.json());
    } catch(error){
        console.error(error);
        return;
    }

    for(let i = 0; i < students.length; i++){
        let student = students[i];
        tbl.innerHTML += `
            <tr>
                <td>${student.rollNumber}</td>
                <td>${student.name}</td>
                <td>${student.branch}</td>
                <td>${student.cgpa}</td>
                <td>
                    <a href="./editStudent.html?id=${student.id}">Edit</a>
                </td>
                <td>
                    <button onclick="remove('${student.id}')">Delete</button>
                </td>
            </tr>
        `
    }
}

async function remove(id) {
    if(!confirm("Are you sure you want to delete this student?")) 
        return;
    try{
        let response = await fetch(`http://localhost:3000/students/${id}`,{
            method: 'DELETE',
        });
        if(response.ok)
            get();
    } catch(error){
        console.error(error);
    }
}

get();