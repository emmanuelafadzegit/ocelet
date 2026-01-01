console.log("auth.js loaded");

/* LOGIN */
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    console.log("Login submitted");

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    console.log("Email:", email);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log("Login response:", data, error);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Login success");
    window.location.href = "dashboard.html";
  });
}

/* SIGN UP */
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    console.log("Signup submitted");

    const password = document.getElementById("signupPassword").value;
    const confirm = document.getElementById("confirmPassword").value;

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    const email = document.getElementById("signupEmail").value;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    console.log("Signup response:", data, error);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Signup successful. Check your email.");
  });
}
