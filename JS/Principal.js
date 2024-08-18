
document.addEventListener("DOMContentLoaded", function() {
    const loginLink = document.querySelector("a.nav-link[href='Login.html']");

    loginLink.addEventListener("mouseover", function() {
        loginLink.classList.add("animate__animated", "animate__pulse");
    });

    loginLink.addEventListener("mouseout", function() {
        loginLink.classList.remove("animate__animated", "animate__pulse");
    });

    
});