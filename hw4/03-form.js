// Add your code here
let form = document.getElementById("Form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var date = document.getElementById("date").value;
  var password = document.getElementById("password").value;
  var radioButtonGroup = document.getElementsByName("decision");
  var checkedRadio = Array.from(radioButtonGroup).find(
    (radio) => radio.checked
  );
  if (document.getElementById("yes").checked == true) {
    var subValue = "yes";
  } else if (document.getElementById("no").checked == true) {
    var subValue = "no";
  } else {
    var subValue = null;
  }

  if (
    subValue === null &&
    username.length == 0 &&
    email.length == 0 &&
    password.length == 0 &&
    date.length == 0
  ) {
    console.warn("You must enter some data to submit this form!");
  } else {
    if (username.length == 0) username = "no submission";
    if (email.length == 0) email = "no submission";
    if (date.length == 0) date = "no submission";
    if (subValue === null) subValue = "no submission";
    console.log("========= Form Submission =========");
    console.log("Username: ", username);
    console.log("Email: ", email);
    console.log("Newsletter: ", subValue);
    console.log("Date: ", date);
  }

  document.getElementById("username").value = null;
  document.getElementById("email").value = null;
  document.getElementById("date").value = null;
  document.getElementById("password").value = null;
  document.getElementsByName("decision").value = null;
  document.getElementById("no").checked = false;
  document.getElementById("yes").checked = false;
});
