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

    let answerSpot = document.querySelector(".theAnswer");

    let choiceForUser = "C++";
    let resForLang = "https://cplusplus.com/";
    answerSpot.setAttribute("style", "color: blue");

    if(favColor.charAt(1) === "f") {
      choiceForUser = "Ruby";
      resForLang = "https://www.tutorialspoint.com/ruby/ruby_resources.htm";
      answerSpot.setAttribute("style", "color: red");
    } else
    if(favColor.charAt(2) === "f") {
      choiceForUser = "Ruby";
      resForLang = "https://www.tutorialspoint.com/ruby/ruby_resources.htm";
      answerSpot.setAttribute("style", "color: red");
    } else
    if(favColor.charAt(3) === "f") {
      choiceForUser = "Lua";
      resForLang = "http://www.lua.org/";
      answerSpot.setAttribute("style", "color: lightblue");
    } else
    if(favColor.charAt(4) === "e") {
      choiceForUser = "JavaScript";
      resForLang = "https://developer.mozilla.org/en-US/docs/Web/javascript";
      answerSpot.setAttribute("style", "color: red");
    } else
    if(favColor.charAt(5) === "f") {
      choiceForUser = "PHP";
      resForLang = "https://www.php.net/manual/en/index.php";
      answerSpot.setAttribute("style", "color: pink");
    } else
    if(favColor.charAt(6) === "f") {
      choiceForUser = "Objective C";
      resForLang = "https://www.tutorialspoint.com/objective_c/objective_c_useful_resources.htm";
      answerSpot.setAttribute("style", "color: grey");
    }

    if(weather === "sunny") {
      choiceForUser = "C#";
      resForLang = "https://learn.microsoft.com/en-us/dotnet/csharp/";
      answerSpot.setAttribute("style", "color: lightblue");
    } else
    if(weather === "cloudy") {
      choiceForUser = "Java";
      resForLang = "https://docs.oracle.com/javase/tutorial/";
      answerSpot.setAttribute("style", "color: brown");
    } else
    if(weather === "rainy") {
      if(choiceForUser != "PHP") {
      choiceForUser = "Rust";
      resForLang = "https://www.rust-lang.org/learn";
      answerSpot.setAttribute("style", "color: brown");
      }
    } else
    if(weather === "snowy") {
      if(choiceForUser != "Objective C") {
      choiceForUser = "MATLAB"
      resForLang = "https://www.mathworks.com/help/matlab/";
      answerSpot.setAttribute("style", "color: aliceblue");
      }
    }

    if(favAnimal.toUpperCase() === "SNAKE" || favAnimal.toUpperCase() === "PYTHON" || favAnimal.toUpperCase() === "BOA CONSTRICTOR") {
      choiceForUser = "Python";
      resForLang = "https://docs.python.org/3/";
      answerSpot.setAttribute("style", "color: yellow");
    }

    if(freeTime === "r4") {
      if(choiceForUser != "Scratch" && choiceForUser != "LUA" && choiceForUser != "Java" && choiceForUser != "Python") {
      choiceForUser = "x86 Assembly";
      resForLang = "https://www.codeproject.com/Articles/1273844/The-Intel-Assembly-Manual-3";
      answerSpot.setAttribute("style", "color: purple");
      }
    } else
    if(freeTime === "r1") {
      choiceForUser = "None";
      answerSpot.setAttribute("style", "color: white");
    } else
    if(freeTime === "r2") {
      if(choiceForUser != "Java" && choiceForUser != "C++" && choiceForUser != "Ruby" && choiceForUser != "Ruby on Rails") {
      choiceForUser = "C#";
      resForLang = "https://learn.microsoft.com/en-us/dotnet/csharp/";
      answerSpot.setAttribute("style", "color: lightblue");
      }
    } else
    if(freeTime === "r3") {
      if(choiceForUser != "Java" && choiceForUser != "Rust" && choiceForUser != "Scratch" && choiceForUser != "LUA" && choiceForUser != "Python" && choiceForUser != "MATLAB") {
      choiceForUser = "C++"; 
      }
      if(parseInt(age) < 18) {
        choiceForUser = "Lua";
        resForLang = "http://www.lua.org/";
        answerSpot.setAttribute("style", "color: lightblue");
      }
    }

    if(parseInt(age) < 18) {
      if(parseInt(age) > 9) {
      choiceForUser = "Lua";
      resForLang = "http://www.lua.org/";
      answerSpot.setAttribute("style", "color: lightblue");
      } else {
        choiceForUser = "Scratch";
        resForLang = "https://www.scratch.ie/resources/";
        answerSpot.setAttribute("style", "color: yelloworange");
      }
    }

    if(weather === "sunny") {
      if(choiceForUser === "Python") {
        choiceForUser = "Ruby";
        resForLang = "https://www.tutorialspoint.com/ruby/ruby_resources.htm";
        answerSpot.setAttribute("style", "color: red");
      }
    } else
    if(weather === "cloudy") {
      if(choiceForUser === "Lua") {
        choiceForUser = "Python"
        resForLang = "https://docs.python.org/3/";
        answerSpot.setAttribute("style", "color: yellow");
      }
    } else
    if(weather === "rainy") {
      if(choiceForUser === "C#") {
        choiceForUser = "JavaScript";
        resForLang = "https://developer.mozilla.org/en-US/docs/Web/javascript";
        answerSpot.setAttribute("style", "color: red");
      }
      if(choiceForUser === "Python") {
        choiceForUser = "Go";
        resForLang = "https://go.dev/";
        answerSpot.setAttribute("style", "color: green");
      }
    } else
    if(weather === "snowy") {
      if(choiceForUser === "C++" || choiceForUser === "x86 Assembly") {
        choiceForUser = "RISC-V Assembly";
        resForLang = "https://riscv-programming.org/ale/";
        answerSpot.setAttribute("style", "color: orange");
      }
      if(choiceForUser === "Python") {
        choiceForUser = "Kotlin";
        resForLang = "https://kotlinlang.org/";
        answerSpot.setAttribute("style", "color: lightblue");
      }
    }

    let ansPrelude = document.querySelector(".hidden");
    
    if(ansPrelude != null) {
    ansPrelude.removeAttribute("class");
    ansPrelude.setAttribute("class", "answerPrelude");
    }

    
    answerSpot.innerHTML = choiceForUser;
    let resourceSentence = document.getElementById("resources");
    if(choiceForUser === "None") {
      resourceSentence.innerHTML = "Programming can be done, but not without having free time."
    } else {
    resourceSentence.innerHTML = "Resources for "+ choiceForUser + " can be found <a href=\"" + resForLang + "\">here</a>.";
    }
  }
}