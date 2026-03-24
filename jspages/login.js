
const emailInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const submitStatus=document.getElementById("submitStatus");

function validateForm(event){

event.preventDefault();

const email=emailInput.value.trim();
const password=passwordInput.value.trim();

if(email=="" || password==""){
alert("Enter email and password");
return;
}

submitStatus.innerText="Logging in...";

auth.signInWithEmailAndPassword(email,password)

.then((userCredential)=>{

const user=userCredential.user;

localStorage.setItem("uid",user.uid);

submitStatus.innerText="Login success";

setTimeout(()=>{

window.location.href="../pages/coursemain.html";

},1500);

})

.catch((error)=>{

submitStatus.innerText=error.message;

});

}