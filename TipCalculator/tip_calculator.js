function mullahToss() {
  var money = parseFloat(document.getElementById("money").value);
  var tip = money * .2;
  var total = tip + money;
  document.getElementById("tip").innerHTML = "Tip: $" + tip.toFixed(2) + "</br>Total: $" + total.toFixed(2);
}
