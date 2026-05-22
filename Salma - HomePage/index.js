function reserveNow() {
  alert("Your reservation for Paris, France has been initiated!");
}
// Example JavaScript for Sign Up Button Click
function handleSignup() {
  const userConfirmed = confirm("Are you sure you want to sign up?");
  if (userConfirmed) {
    window.location.href = "form.html"; // Redirect to the signup page
  }
}
<button class="signup-btn" onclick="handleSignup()">Signup</button>

