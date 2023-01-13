onload = function() {
  let form = document.querySelector("form");

  form.onsubmit = function(event) {
    event.preventDefault();
    let freeTimeOpts = document.getElementsByName("freeTime");
    let weatherOpts = document.getElementsByName("weather");

    let favColor = document.getElementById("favColor").value;
    let favAnimal = document.getElementById("favAnimal").value;
    let freeTime = "";
    let weather = "";
    for(let i of freeTimeOpts) {
      if(i.checked) {
        freeTime = i.id;
      }
    }
    for(let i of weatherOpts) {
      if(i.checked) {
        weather = i.id;
      }
    }
    let age = document.getElementById("age").value;

    let answerSpot = document.querySelector(".theAnswer");
    console.log(favColor);
    answerSpot.innerHTML = "teststst";
  }
}