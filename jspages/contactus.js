const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const name = form.querySelector("input[type='text']").value;
  const email = form.querySelector("input[type='email']").value;
  const message = form.querySelector("textarea").value;

  if (name === "" || name.length<3 ) {
    alert("Please fill in your name and ensure it is at least 3 characters long");
    return;
  }
  if (email === "" || !email.includes("@")) {
    alert("Please enter a valid email address including '@' .");
    return;
  }
   if (message.length <= 10) {
    alert("Message must be at least 10 characters long.");
    return;
  }

  alert("Thank you, " + name + "! Your message has been sent.");

  form.reset();
});
