// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyaeariL__oj8r7HQrRDi7PERbEUNopO4",
    authDomain: "growly-a079f.firebaseapp.com",
    projectId: "growly-a079f",
    storageBucket: "growly-a079f.firebasestorage.app",
    messagingSenderId: "1014390006478",
    appId: "1:1014390006478:web:f3d35db8f70c9abafc669f",
    measurementId: "G-0H7KZELWG5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
