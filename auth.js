console.log("auth.js loaded");

/* LOGIN */
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        alert("Login failed: " + error.message);
        return;
      }

      if (!data.session) {
        alert("Login blocked. Check email confirmation or site URL.");
        return;
      }

      window.location.href = "newdashboard.html";

    } catch (err) {
      alert("Unexpected error. Check console.");
      console.error(err);
    }
  });
}

/* SIGN UP */
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirm = document.getElementById("confirmPassword").value;

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert("Signup failed: " + error.message);
      return;
    }

    alert("Signup successful. You can now log in.");
  });
}


