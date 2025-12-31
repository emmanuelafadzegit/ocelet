// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // Select all buttons that should go to signup page
    const signUpButtons = document.querySelectorAll(".btn-primary, .btn-primary-large");

    signUpButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault(); // prevent default link behavior
            window.location.href = "login.html"; // redirect to signup page
        });
    });

});

