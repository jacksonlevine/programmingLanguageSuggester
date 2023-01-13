onload = function() {
  let form = document.querySelector("form");

  form.onsubmit = takeForm;
  function takeForm(event) {
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
    let resForLang = "https://cplusplus.com/";

    if(favColor.charAt(1) === "f") {
      choiceForUser = "Ruby";
      resForLang = "https://www.tutorialspoint.com/ruby/ruby_resources.htm"
    } else
    if(favColor.charAt(2) === "f") {
      choiceForUser = "Ruby";
      resForLang = "https://www.tutorialspoint.com/ruby/ruby_resources.htm"
    } else
    if(favColor.charAt(3) === "f") {
      choiceForUser = "Lua";
      resForLang = "http://www.lua.org/";
    } else
    if(favColor.charAt(4) === "e") {
      choiceForUser = "JavaScript";
      resForLang = "https://developer.mozilla.org/en-US/docs/Web/javascript";
    } else
    if(favColor.charAt(5) === "f") {
      choiceForUser = "PHP";
      resForLang = "https://www.php.net/manual/en/index.php";
    } else
    if(favColor.charAt(6) === "f") {
      choiceForUser = "Objective C";
      resForLang = "https://www.tutorialspoint.com/objective_c/objective_c_useful_resources.htm";
    }

    if(weather === "sunny") {
      choiceForUser = "C#";
      resForLang = "https://learn.microsoft.com/en-us/dotnet/csharp/";
    } else
    if(weather === "cloudy") {
      choiceForUser = "Java";
      resForLang = "https://docs.oracle.com/javase/tutorial/";
    } else
    if(weather === "rainy") {
      if(choiceForUser != "PHP") {
      choiceForUser = "Rust";
      resForLang = "https://www.rust-lang.org/learn";
      }
    } else
    if(weather === "snowy") {
      if(choiceForUser != "Objective C") {
      choiceForUser = "MATLAB"
      resForLang = "https://www.mathworks.com/help/matlab/";
      }
    }

    if(favAnimal.toUpperCase() === "SNAKE" || favAnimal.toUpperCase() === "PYTHON" || favAnimal.toUpperCase() === "BOA CONSTRICTOR") {
      choiceForUser = "Python";
    }

    if(freeTime === "r4") {
      if(choiceForUser != "Scratch" && choiceForUser != "LUA" && choiceForUser != "Java" && choiceForUser != "Python") {
      choiceForUser = "x86 Assembly";
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
      if(choiceForUser != "Java" && choiceForUser != "Rust" && choiceForUser != "Scratch" && choiceForUser != "LUA" && choiceForUser != "Python" && choiceForUser != "MATLAB") {
      choiceForUser = "C++";
      }
      if(parseInt(age) < 18) {
        choiceForUser = "Lua";
      }
    }

    if(parseInt(age) < 18) {
      if(parseInt(age) > 9) {
      choiceForUser = "Lua";
      } else {
        choiceForUser = "Scratch";
      }
    }

    if(weather === "sunny") {
      if(choiceForUser === "Python") {
        choiceForUser = "Ruby";
      }
    } else
    if(weather === "cloudy") {
      if(choiceForUser === "Lua") {
        choiceForUser = "Python"
      }
    } else
    if(weather === "rainy") {
      if(choiceForUser === "C#") {
        choiceForUser = "JavaScript";
      }
      if(choiceForUser === "Python") {
        choiceForUser = "Go";
      }
    } else
    if(weather === "snowy") {
      if(choiceForUser === "C++" || choiceForUser === "x86 Assembly") {
        choiceForUser = "RISC-V Assembly";
      }
      if(choiceForUser === "Python") {
        choiceForUser = "Kotlin";
      }
    }

    let ansPrelude = document.querySelector(".hidden");
    
    if(ansPrelude != null) {
    ansPrelude.removeAttribute("class");
    ansPrelude.setAttribute("class", "answerPrelude");
    }

    let answerSpot = document.querySelector(".theAnswer");
    answerSpot.innerHTML = choiceForUser;
    let resourceLink = document.getElementById("resourceLink");
    resourceLink.setAttribute("href")
  }
}