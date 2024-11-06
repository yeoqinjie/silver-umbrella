

function sayHello() {
    alert('Hello, World!');
}


function validateForm() {
    // Select form elements
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;
    let errorElement = document.getElementById("error");
    let errorMessage = "";
  
    // Name field validation
    if (name === "") {
        errorMessage += "Name is required. ";
    }

    if (contact === "") {
        errorMessage += "Contact number is required. "
    }
    if (contact.length !== 8) {
        errorMessage += "Contact number must be 8 numbers. "
    }
  
    // Email format validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errorMessage += "Please enter a valid email address.";
    }
  
    // Display error messages if any
    if (errorMessage) {
        errorElement.innerHTML = errorMessage; // <p id="error">[innerHTML]</p>
        return false; // Prevent form submission
    } else {
        errorElement.innerHTML = 'Form Submitted'
        return false
    }
  
    //return true; // Allow form submission
}
  

