alert("JS loaded");

let signin = document.getElementById("signin");
signin.addEventListener("click", function () {
    alert("Thanks for signin up");
});
 
// Step 1: Get the password fields
let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");

// Step 2: Add onchange event listeners
password1.onchange = checkPassword;
password2.onchange = checkPassword;

// Step 3: Write the checkPassword function
function checkPassword() {
    let form = document.getElementById("signup"); // get the form
    let pass1 = form.password1.value;
    let pass2 = form.password2.value;

    let message = "";

    if (pass1.length < 6) {
        message += "Password must be at least 6 characters long.\n";
    }
    if (!pass1.match(/[A-Z]/)) {
        message += "Password must contain at least one uppercase letter.\n";
    }
    if (!pass1.match(/[a-z]/)) {
        message += "Password must contain at least one lowercase letter.\n";
    }
    if (!pass1.match(/[0-9]/)) {
        message += "Password must contain at least one number.\n";
    }
    if (pass1 !== pass2) {
        message += "Passwords do not match.\n";
    }

    password2.setCustomValidity(message);
    password2.reportValidity();
}
