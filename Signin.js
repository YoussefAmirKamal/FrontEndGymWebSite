function Login() {
  if (
    document.getElementById("Email").value.includes("@") &&
    document.getElementById("Email").value.includes(".")
  ) {
    alert("LOGIN COMPLETED");
  } else {
    document.getElementById("Email").style.border = "3px solid red";
  }
}
