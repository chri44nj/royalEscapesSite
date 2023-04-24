var countdownDate = new Date("May 4, 2023 00:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countdownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);

const inputs = document.querySelectorAll("div.codeInputs input");

inputs.forEach((input, index) => {
  input.addEventListener("input", (event) => {
    const value = event.target.value;

    if (value.length === 1) {
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    }
  });
});
