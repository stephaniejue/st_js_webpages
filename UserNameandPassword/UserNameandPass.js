function credChecker(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var lowerPass = password.toLowerCase();
  var upperPass = password.toUpperCase();

  var responseIdLen = "";
  var responseIdSym = "";
  var responsePassLen = "";
  var responsePassSym = "";
  var responsePassUser = "";
  var responsePassPass = "";
  var responsePassInt = "";
  var responseUpperLower = "";

  if (username.length < 6) {
    responseIdLen = "Your username must have at least 6 characters </br>";
    console.log(responseIdLen);
  }
  if (username.includes("$") || username.includes("#") || username.includes("!")) {
    responseIdSym = "Your username cannot contain $, #, or ! </br>";
    console.log(responseIdSym);
  }
  if (password.length < 6) {
    responsePassLen = "Your password must have at least 6 characters </br>";
    console.log(responsePassLen);
  }
  if (!(password.includes("$") || password.includes("#") || password.includes("!"))) {
    responsePassSym = "Your password must contain $, #, or ! </br>";
    console.log(responsePassSym);
  }
  if (password === username) {
    responsePassUser = "Your password and username cannot be the same </br>";
    console.log(responsePassUser);
  }
  if (password === "password") {
    responsePassPass = 'Your password cannot be "Password" </br>';
    console.log(responsePassPass);
  }
  if (!isNaN(parseInt(password))) {
    responsePassInt = "Your password must contain a number </br>";
    console.log(responsePassInt);
  }
  if ((password == lowerPass || password == upperPass) || (password == lowerPass == upperPass)) {
    responseUpperLower = "Your password must contain at least one upper and one lower case letter</br>";
    console.log(responseUpperLower);
  }
  //password changed to all lowercase does not equal password
  //password changed to all uppercase does not equal password
  //annd password has to contain letters

  document.getElementById("message").innerHTML = responseIdLen + responseIdSym + responsePassLen + responsePassSym + responsePassUser + responsePassPass + responsePassInt + responseUpperLower;
  console.log(responseIdLen + responseIdSym + responsePassLen + responsePassSym + responsePassUser + responsePassPass + responsePassInt + responseUpperLower);
}
