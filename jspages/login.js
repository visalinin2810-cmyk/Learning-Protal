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
    alert("Please fill in your email address.");
    isValid = false;
  } 
  if (emailValue.length < 3) {
    alert("Email must be at least 3 characters long.");
    isValid = false;
  }
  if (emailValue.length >20){
    alert ("Email must be less than 20 characters long.");
    isValid = false;
  }
  if (!emailValue.includes("@gmail.com")) {
    alert("Please enter a valid email address including '@gmail.com'.");
    isValid = false;
  }

  if (passwordValue === "") {
    alert("Please enter your password.");
    isValid = false;
  }
  if (passwordValue.length < 5) {
    alert("Password must be at least 8 characters long.");
    isValid = false;
  }
  if (!/[A-Z]/.test(passwordValue)) {
    alert("Password must contain at least one uppercase letter.");
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
  form.reset();
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

