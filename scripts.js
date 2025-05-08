document.addEventListener("DOMContentLoaded", () => {
    const toggleLink = document.getElementById("toggleForm");
    const formTitle = document.getElementById("formTitle");
    const authForm = document.getElementById("authForm");
  
    if (toggleLink) {
      let isSignUp = false;
  
      toggleLink.addEventListener("click", (e) => {
        e.preventDefault();
        isSignUp = !isSignUp;
        formTitle.textContent = isSignUp ? "Sign Up" : "Sign In";
        toggleLink.textContent = isSignUp
          ? "Already have an account? Sign in here."
          : "Don't have an account? Sign up here.";
      });
  
      authForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert(isSignUp ? "Signing up..." : "Signing in...");
        window.location.href = "member.html";
      });
    }
  });
  