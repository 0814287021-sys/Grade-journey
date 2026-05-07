function renameAssignment1() {
    let newName = prompt("What do you want to name this assignment?");
    if (newName) {
        let nameDisplay = document.getElementById("assignmentName1");
        nameDisplay.innerText = newName;
    }
}

function renameAssignment2() {
    let newName = prompt("What do you want to name this assignment?");
    if (newName) {
        let nameDisplay = document.getElementById("assignmentName2");
        nameDisplay.innerText = newName;
    }
}

function renameAssignment3() {
    let newName = prompt("What do you want to name this assignment?");
    if (newName) {
        let nameDisplay = document.getElementById("assignmentName3");
        nameDisplay.innerText = newName;
    }
}

// Connect each box to its function
let box1 = document.getElementById("assignment1");
box1.addEventListener("click", renameAssignment1);

let box2 = document.getElementById("assignment2");
box2.addEventListener("click", renameAssignment2);

let box3 = document.getElementById("assignment3");
box3.addEventListener("click", renameAssignment3);
