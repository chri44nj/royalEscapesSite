const burgerMenu = document.querySelector(".burgerMenu");
const navItems = document.querySelector(".navItems");

burgerMenu.addEventListener("mousedown", () => {
  burgerMenu.classList.toggle("active");
  navItems.classList.toggle("active");
  console.log("Må du have en god dag!");
});

document.querySelectorAll(".navItem").forEach((n) =>
  n.addEventListener("mousedown", () => {
    burgerMenu.classList.remove("active");
    navItems.classList.remove("active");
  })
);

var countdownDate = new Date("May 4, 2023 00:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countdownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  days = days < 10 ? "0" + days : days;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

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

function showConfirmation(event) {
  event.preventDefault(); // prevent the button from navigating to the URL
  var confirmation = confirm("Er du sikker?");
  if (confirmation == true) {
    var success = confirm("Success! Koden var korrekt - du har fået tilføjet ét lod i puljen om at vinde 6x billeter til et Escape Room af eget valg!");
    if (success == true) {
      // Handle closing the pop-up or redirecting to another page
    }
  }
  return false;
}

var confirmButton = document.querySelector(".confirm");
confirmButton.addEventListener("click", showConfirmation);

var animation = bodymovin.loadAnimation({
  container: document.getElementById("lottie-container"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://assets7.lottiefiles.com/private_files/lf30_jsnbgsuj.json",
});
