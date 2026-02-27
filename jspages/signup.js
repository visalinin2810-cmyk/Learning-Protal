const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm');
const submitStatus = document.getElementById('submitStatus');

function validateForm(event) {
  event.preventDefault();
  resetErrors();
  let isValid = true;

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const confirmPasswordValue = confirmPasswordInput.value.trim();

  if (nameValue.length === 0) {
    alert('Full Name is required.');
    isValid = false;
  }
  if (nameValue.length < 3) {
    alert('Full Name must be at least 3 characters long.');
    isValid = false;
  }
  if (nameValue.length > 20) {
    alert('Full Name must be less than 20 characters long.');
    isValid = false;
  }

  if (emailValue.length === 0) {
    alert('Email is required.');
    isValid = false;
  }
  if (emailValue.length > 20){
      alert('Email must be less than 20 characters.');
      isValid = false;
  } 
  if (emailValue.length < 3) {
    alert('Email must be at least 3 characters long.');
    isValid = false;
  }
  if (!emailValue.includes('@gmail.com')) {
    alert('Enter a valid email including @.');
    isValid = false;
  }

  if (passwordValue.length < 6) {
    alert('Password must be at least 6 characters.');
    isValid = false;
  }

  if (confirmPasswordValue !== passwordValue) {
    alert('Passwords do not match.');
    isValid = false;
  }

  if (isValid) {
    submitStatus.style.color = 'blue';
    submitStatus.textContent = "Creating account...";

    auth.createUserWithEmailAndPassword(emailValue, passwordValue)
      .then((userCredential) => {
        const user = userCredential.user;

        // Save user data to Firestore
        return db.collection("users").doc(user.uid).set({
          fullName: nameValue,
          email: emailValue,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
      })
      .then(() => {
        submitStatus.style.color = 'green';
        submitStatus.textContent = "Registration successful! Data saved. Redirecting...";
        setTimeout(() => {
          window.location.href = "./coursemain.html";
        }, 2000);
      })
      .catch((error) => {
        submitStatus.style.color = 'red';
        submitStatus.textContent = error.message;
      });
  } else {
    submitStatus.style.color = 'red';
    submitStatus.textContent = "Validation failed.";
  }
}

function resetErrors() {
  document.querySelectorAll('.error-message')
    .forEach(a => a.textContent = '');
}

function displayError(id, message) {
  const errorElement = document.getElementById(id);
  if (errorElement) {
    errorElement.textContent = message;
  }
}

