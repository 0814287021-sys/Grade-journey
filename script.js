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

function handleClassSelection() {
    let classDropdown = document.getElementById("classSelect");
    let selectedValue = classDropdown.value;
    
    if (selectedValue === "custom") {
        let customClass = prompt("Enter your custom class name:");
        
        if (customClass) {
            // Create a new option with the custom name
            let newOption = document.createElement("option");
            newOption.value = customClass;
            newOption.innerText = customClass;
            newOption.selected = true;
            
            // Add it before "Create Own"
            let createOwnOption = classDropdown.options[classDropdown.options.length - 1];
            classDropdown.insertBefore(newOption, createOwnOption);
            
            console.log("Custom class created: " + customClass);
        } else {
            // Reset to "Select Class" if they cancel
            classDropdown.value = "";
        }
    } else if (selectedValue) {
        console.log("Selected class: " + selectedValue);
    }
}

// Connect the dropdown to the function
let classDropdown = document.getElementById("classSelect");
classDropdown.addEventListener("change", handleClassSelection);



// Connect each box to its function
let box1 = document.getElementById("assignment1");
box1.addEventListener("click", renameAssignment1);

let box2 = document.getElementById("assignment2");
box2.addEventListener("click", renameAssignment2);

let box3 = document.getElementById("assignment3");
box3.addEventListener("click", renameAssignment3);
