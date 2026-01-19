const usernameinput = document.getElementById('username');
const emailinput = document.getElementById('e-mail');
const submitstatus = document.getElementById('submitStatus');

function validateForm(event) {
  event.preventDefault();
  resetErrors();
  let isvalid = true;

  const usernameValue = usernameinput.value.trim();
  if (usernameValue.length === 0) {
    displayError('usernameError', 'Enter your user Name.');
    isvalid = false;
  } 
  else if (usernameValue.length < 3) {
    displayError('usernameError', 'Username must be at least 4 characters.');
    isvalid = false;
  }

  if (!emailinput.value.includes('@')) {
    displayError('e-mailError', 'Enter valid email including @.');
    isvalid = false;
  }

  if (isvalid) {
    submitstatus.style.color = 'green';
    submitstatus.textContent = "Validation successful.";
    window.location.href = "./coursemain.html";

  } 
  else {
    submitstatus.style.color = 'red';
    submitstatus.textContent = "Validation failed.";
  }
}

function resetErrors() {
  document.querySelectorAll('.error-message')
    .forEach(a => a.textContent = '')
}

function displayError(id, message) {
  document.getElementById(id).textContent = message;
}