// navigation.js

document.addEventListener("DOMContentLoaded", () => {

    // Correct file path for your signup/login page
    function getSignupURL() {
        return "login.html"; // change to your actual file name
    }

    const signUpButtons = document.querySelectorAll(".btn-primary, .btn-primary-large");

    signUpButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = getSignupURL();
        });
    });

});
