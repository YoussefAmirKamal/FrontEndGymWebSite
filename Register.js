function Submit() {
  if (
    document.getElementById("Password").value !=
    document.getElementById("ConfirmPassword").value
  ) {
    document.getElementById("ConfirmPassword").style.border = "3px solid red";
  } else if (
    document.getElementById("EmailAddress").value.includes("@") &&
    document.getElementById("EmailAddress").value.includes(".") &&
    document.getElementById("Password").value ==
      document.getElementById("ConfirmPassword").value
  ) {
    alert("REGISTRATION COMPLETED");
  } else {
    document.getElementById("EmailAddress").style.border = "3px solid red";
  }
}
