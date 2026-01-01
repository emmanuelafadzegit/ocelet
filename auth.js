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

      console.log("Supabase login response:", { data, error });

      if (error) {
        alert("Login failed: " + error.message);
        return;
      }

      if (!data.session) {
        alert(
          "Login blocked: likely GitHub Pages URL not whitelisted or email not confirmed."
        );
        return;
      }

      alert("Login success!");
      window.location.href = "newdashboard.html";

    } catch (err) {
      alert("Unexpected error. Check console.");
      console.error(err);
    }
  });
}
