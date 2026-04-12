document.addEventListener("DOMContentLoaded", () => {
    const auth = firebase.auth();
    
    auth.onAuthStateChanged(user => {
        const loginLink = document.querySelector('nav ul li a[href*="login.html"]');
        if (loginLink) {
            if (user) {
                loginLink.textContent = "Logout";
                loginLink.href = "#";
                loginLink.onclick = (e) => {
                    e.preventDefault();
                    auth.signOut().then(() => {
                        const isInsidePages = window.location.pathname.includes("/pages/");
                        window.location.href = isInsidePages ? "../index.html" : "./index.html";
                    });
                };
            } else {
                loginLink.textContent = "Login";
            }
        }
    });
});
