
// Get references to all necessary elements from the DOM
const password = document.getElementById('password');               // The main password input field
const confirmPassword = document.getElementById('confirmPassword'); // The confirm password input field
const strengthText = document.getElementById('strength-label');      // Text indicator that says "Weak", "Medium", or "Strong"
const strengthIndicator = document.getElementById('strength-indicator'); // Colored bar that visually shows password strength
const matchIndicator = document.getElementById('match-indicator');  // Icon (✅/❌) showing if passwords match

// Password Strength Checker
password.addEventListener('input', () => {
  const val = password.value; // Store the current value of the password input

  // Check if the password meets strong criteria
  if (val.length >= 8 && /[A-Z]/.test(val) && /\d/.test(val)) {
    strengthText.textContent = "Strong";                 // Update the strength label text
    strengthText.style.color = "green";                  // Color the text green
    strengthIndicator.style.width = "100%";              // Fill the bar fully
    strengthIndicator.style.background = "green";        // Set bar color to green

    //  val.length >=8 it means the password must be at least 8 characters long
    // /[A-Z]/.test(val) checks if there's at least ONE Uppercase letter in the password.
    // /\d/.test(val)    checks if there's at least ONE number in the password.

  // Check if password is medium strength (length but not complex)
  } else if (val.length >= 6) { //if the length of the password is six characters.
    strengthText.textContent = "Medium";                 // Update label
    strengthText.style.color = "orange";                 // Color orange
    strengthIndicator.style.width = "60%";               // Partial bar
    strengthIndicator.style.background = "orange";       // Bar color

  // If password is too short or very basic
  } else if (val.length >= 4) {//if the length of the password is less than six characters.
    strengthText.textContent = "Weak";                   // Show "Weak"
    strengthText.style.color = "red";                    // Red text
    strengthIndicator.style.width = "30%";               // Small bar
    strengthIndicator.style.background = "red";          // Red bar
  }
  // If password is empty 
  else {
    strengthText.textContent = "";
    strengthText.style.color = "";
    strengthIndicator.style.width = "0%";
    strengthIndicator.style.background = "";
  }
});

// Password Match Checker
confirmPassword.addEventListener('input', () => {
  // Compare the value of the confirm password field with the main password
  if (confirmPassword.value === password.value) {
    matchIndicator.textContent = "✅";    // Show checkmark
    matchIndicator.style.color = "green"; // Green if matches
  } else {
    matchIndicator.textContent = "❌";   // Show cross if not matching
    matchIndicator.style.color = "red";  // Red color if not matching
  }
});