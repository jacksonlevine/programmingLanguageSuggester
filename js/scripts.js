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

    let choiceForUser = "C++";

    if(favColor.charAt(1) === "f") {
      choiceForUser = "Ruby";
    } else
    if(favColor.charAt(2) === "f") {
      choiceForUser = "Ruby on Rails";
    } else
    if(favColor.charAt(3) === "f") {
      choiceForUser = "Lua";
    } else
    if(favColor.charAt(4) === "e") {
      choiceForUser = "JavaScript";
    } else
    if(favColor.charAt(5) === "f") {
      choiceForUser = "PHP";
    } else
    if(favColor.charAt(6) === "f") {
      choiceForUser = "Objective C";
    }

    if(weather === "sunny") {
      choiceForUser = "C#";
    } else
    if(weather === "cloudy") {
      choiceForUser = "Java";
    } else
    if(weather === "rainy") {
      choiceForUser = "Rust";
    } else
    if(weather === "snowy") {
      choiceForUser = "MATLAB"
    }

    if(favAnimal.toUpperCase() === "SNAKE" || favAnimal.toUpperCase() === "PYTHON" || favAnimal.toUpperCase() === "BOA CONSTRICTOR") {
      choiceForUser = "Python";
    }

    if(parseInt(age) < 18) {
      if(parseInt(age) > 9) {
      choiceForUser = "Lua";
      } else {
        choiceForUser = "Scratch";
      }
    }

    if(freeTime === "r4") {
      if(choiceForUser != "Scratch" && choiceForUser != "LUA") {
      choiceForUser = "Assembly x86";
      }
    } else
    if(freeTime === "r1") {
      choiceForUser = "None";
    } else
    if(freeTime === "r2") {
      if(choiceForUser != "Java" && choiceForUser != "C++" && choiceForUser != "Ruby" && choiceForUser != "Ruby on Rails") {
      choiceForUser = "C#";
      }
    } else
    if(freeTime === "r3") {
      if(choiceForUser != "Java" && choiceForUser != "Rust" && choiceForUser != "Scratch" && choiceForUser != "LUA") {
      choiceForUser = "C++";
      }
      if(parseInt(age) < 18) {
        choiceForUser = "Lua";
      }
    }



    let answerSpot = document.querySelector(".theAnswer");
    console.log(favColor);
    answerSpot.innerHTML = choiceForUser;
  }
}