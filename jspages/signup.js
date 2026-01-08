const usernameinput = document.getElementById('name');
const passwordinput = document.getElementById('password');
const conformpassword = document.getElementById('confirm');
const submitstatus = document.getElementById('submitStatus');
  function validateForm(event) {
    event.preventDefault();
    resetErrors();
    let isvalid = true;

    const usernameValue = usernameinput.value.trim();
    if (usernameValue.length === 0) {
      displayError('usernameError', 'Username is required.');
      isvalid = false;
    } 
    else if (usernameValue.length < 4) {
      displayError('usernameError', 'Username must be at least 4 characters.');
      isvalid = false;
    }
    if (!passwordinput.value.includes('@')) {
    displayError('passworderror', 'Enter valid email including @.');
    isvalid = false;
    }
    if(!conformpassword.value === passwordinput){
      displayError('conformpassworderror', 'Enter valid password');
      isvalid = false;
    }
    else if(conformpassword.value.length == ('0')){
      displayError('conformpassworderror', 'Enter valid password');
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
      .forEach(a => a.textContent = '');
  }

  function displayError(id, message) {
    document.getElementById(id).textContent = message;
  }