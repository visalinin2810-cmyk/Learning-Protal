const emailInput = document.getElementById("username"); 
const passwordInput = document.getElementById("password");
const submitStatus = document.getElementById("submitStatus");

function validateForm(event) {
  event.preventDefault();
  resetErrors();
  let isValid = true;

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (emailValue === "") {
    displayError("usernameError", "Enter your email.");
    isValid = false;
  }

  if (passwordValue === "") {
    displayError("passwordError", "Enter your password.");
    isValid = false;
  }

  if (isValid) {
    submitStatus.style.color = "blue";
    submitStatus.textContent = "Logging in...";

    auth.signInWithEmailAndPassword(emailValue, passwordValue)
      .then((userCredential) => {
        // Signed in 
        submitStatus.style.color = "green";
        submitStatus.textContent = "Login successful!! Redirecting...";
        setTimeout(() => {
          window.location.href = "../pages/coursemain.html";
        }, 2000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        submitStatus.style.color = "red";
        submitStatus.textContent = "Login failed: " + errorMessage;
      });
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
  const errorElement = document.getElementById(id);
  if (errorElement) {
    errorElement.textContent = message;
  }
}

