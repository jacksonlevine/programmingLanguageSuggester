onload = function() {
  let form = document.querySelector("form");

  form.onsubmit = function(event) {
    event.preventDefault();

    let favColor = document.getElementById("favColor").value;
    let favAnimal = document.getElementById("favAnimal").value;

    let answerSpot = document.querySelector(".theAnswer");
    answerSpot.innerHTML = "teststst";
  }
}