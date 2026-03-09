const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm");
const submitStatus = document.getElementById("submitStatus");

function validateForm(event){
event.preventDefault();

const name = nameInput.value.trim();
const email = emailInput.value.trim();
const password = passwordInput.value.trim();
const confirm = confirmPasswordInput.value.trim();

if(name=="" || email=="" || password==""){
alert("Fill all fields");
return;
}

if(confirm!==password){
alert("Passwords not match");
return;
}

submitStatus.innerText="Creating account...";

auth.createUserWithEmailAndPassword(email,password)

.then((userCredential)=>{

const user=userCredential.user;

localStorage.setItem("uid",user.uid);

return db.collection("users").doc(user.uid).set({

name:name,
email:email,
createdAt:firebase.firestore.FieldValue.serverTimestamp()

});

})

.then(()=>{

submitStatus.innerText="Signup successful";

setTimeout(()=>{

window.location.href="../pages/coursemain.html";

},1500);

})

.catch((error)=>{

submitStatus.innerText=error.message;

});

}