function eightBall() {
  var responses = ["Yup!", "Fuhgeddaboudit", "Maybe", "Ask: what would your mother do?", "Ask: what would an Australian do, then do the opposite", "Nah, fam"];
  var responseNum = (Math.floor((Math.random() * 6) + 1)) - 1;
  var response = responses[responseNum];
  console.log(responses);
  console.log(responseNum);
  console.log(response);
  var question = document.getElementById("question").value;
  if (question === "STOP") {
    document.getElementById("response").innerHTML = "";
  } else {
    document.getElementById("response").innerHTML = response;
  }
}
