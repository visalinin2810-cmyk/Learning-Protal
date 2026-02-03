const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const submitStatus = document.getElementById("submitStatus");

function validateForm(event) {
  event.preventDefault(); // Prevent default form submission behavior
  resetErrors();
  let isValid = true;

  const usernameValue = usernameInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  // Username validation
  if (usernameValue === "") {
    submitStatus.style.color = "red";
    displayError("usernameError", "Enter your user name.");
    isValid = false;
  } else if (usernameValue.length < 4) {
    displayError("usernameError", "Username must be at least 4 characters.");
    isValid = false;
  }

  // Password validation
  if (passwordValue === "") {
    displayError("passwordError", "Enter your password.");
    isValid = false;
  } else if (passwordValue.length < 6) {
    displayError("passwordError", "Password must be at least 6 characters.");
    isValid = false;
  }

  // Final result
  if (isValid) {
    submitStatus.style.color = "green";
    submitStatus.textContent = "Login successful!!";
  
    window.location.href = "../pages/coursemain.html";
  } else {
    submitStatus.style.color = "red";
    submitStatus.textContent = "Login failed!";
  }
}

function resetErrors() {
  document.querySelectorAll(".error-message")
    .forEach(span => span.textContent = "");
}

function displayError(id, message) {
  document.getElementById(id).textContent = message;
}

