//story 1 - creat a car simulator
var speed = 0;  // sets initial speed at 0
//User inputs car make, model and year
function createNewCar(){
  var carMake = document.getElementById("make").value; //sets input of make to variable
  var carModel = document.getElementById("model").value; //sets input of model to variable
  var carYear = document.getElementById("year").value; //sets input of year to variable
//Returns one string with make, model and year
  document.getElementById("createdCar").innerHTML = (carMake + " " + carModel + " " + carYear);
}

//story 2
//buttons that allow user to increase and decrease vehicle speed by 5 and not to exeed 85 mph
function increaseSpeed() {
  speed += 5; // increases speed by increments of 5
  if (speed >= 85) { //checks if speed is great than or equal to 85
    document.getElementById("speed").innerHTML = "85"; //if yes, sets speed to 85
  } else {
  document.getElementById("speed").innerHTML = speed; //otherwise outputs speed
  }
}

function decreaseSpeed() {
  speed -= 5; //decreases speed by increments of 5
  if (speed < 0) { //checks if speed is below 8
    speed = 0; //if yes, sets speed to 0
  } else {
  document.getElementById("speed").innerHTML = speed; //otherwise outputs speed
  }
}

//story 3
function maxAccel() {
  while (speed < 70) { //while loop
    speed += 5; //increases speed by increments of 5 while speed is below 70
  }
  document.getElementById("speed").innerHTML = speed; //outputs speed
}

function maxBrake() {
  while (speed > 0) { //while loop
    speed -= 5; //decreases speed by increments of 5 while speed is above 0
  }
  document.getElementById("speed").innerHTML = speed; //outputs speed
}

//story 4
function brakesFail() {
  var decelerator = Math.floor((Math.random() * speed) + 1); //sets random variable for decelerator
  speed -= decelerator; //sets speed to speed reduced by decelerator
  if (speed < 0) { //if speed goes below 0
    speed = 0; //sets the speed to 0
  } else {
    document.getElementById("speed").innerHTML = speed; //otherwise output speed
  }
}
