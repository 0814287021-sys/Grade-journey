function submitGrade() {
    let gradeValue = document.getElementById("gradeInput").value;
    
    if (gradeValue) {
        alert("Grade saved: " + gradeValue);
        // You can add more code here later
    } else {
        alert("Please enter a grade!");
    }
}

let submitButton = document.getElementById("submitGradeButton");
submitButton.addEventListener("click", submitGrade);
