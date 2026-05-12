function handleClassSelection() {
    let classDropdown = document.getElementById("classSelect");
    let selectedValue = classDropdown.value;
    let displayArea = document.getElementById("selectedClassName");
    
    if (selectedValue === "custom") {
        let customClass = prompt("Enter your custom class name:");
        
        if (customClass) {
            displayArea.innerText = customClass;
            console.log("Custom class: " + customClass);
        } else {
            classDropdown.value = "";
        }
    } else if (selectedValue) {
        displayArea.innerText = selectedValue;
        console.log("Selected class: " + selectedValue);
    }
}

let classDropdown = document.getElementById("classSelect");
classDropdown.addEventListener("change", handleClassSelection);
