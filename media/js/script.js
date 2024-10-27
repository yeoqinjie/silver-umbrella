

function sayHello() {
    alert('Hello, World!');
}


function validateForm() {
    // Select form elements
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let errorElement = document.getElementById("error");
    let errorMessage = "";
  
    // Name field validation
    if (name === "") {
        errorMessage += "Name is required. ";
    }
  
    // Email format validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errorMessage += "Please enter a valid email address.";
    }
  
    // Display error messages if any
    if (errorMessage) {
        errorElement.innerHTML = errorMessage;
        return false; // Prevent form submission
    }
  
    return true; // Allow form submission
}
  

