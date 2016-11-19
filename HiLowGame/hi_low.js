
var answer = Math.floor((Math.random() * 100) + 1);
var attempts = 0;
var name;

function name1() {
  name = document.getElementById("nameInput").value;
}

function guess() {
  var guess = parseInt(document.getElementById("textbox").value);
  console.log (answer);
    if (guess < answer && attempts < 7){
      document.getElementById("output").innerHTML = ("Too low, " + name);
      attempts++;
    }
    else if (guess > answer && attempts < 7){
      document.getElementById("output").innerHTML = ("Too high, " + name);
      attempts++;
    }
    else if (guess === answer && attempts < 7) {
      document.getElementById("output").innerHTML = ("That's right, " + name);
      attempts++;
    }
    else if (isNaN(guess) && attempts < 7) {
      document.getElementById("output").innerHTML = ("Please input a number, " + name);
    }
    else {
      document.getElementById("body1").innerHTML = ("You're out of tries, you're terrible at this, " + name);
    }
  console.log(attempts);
}
