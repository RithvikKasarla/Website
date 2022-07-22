var loc = -1;

function addDisclaimer(text) {
  var speed = 10;
  var line = document.createElement("p");
  line.style.color = "white";
  line.style.fontSize = "15px";
  document.body.appendChild(line);
  setTimeout(() => {website
    var d = document.getElementsByTagName("p");
    d[d.length - 1].innerHTML = text;
  }, speed);
}

window.onload = function (e) {
  setTimeout(() => addArtLines(art), 20);
  setTimeout(() => {
    addText(
      "Type  <spam class='cmd'>help</spam> to see a list of commands or type <spam class='cmd'>website</spam> to see gui website"
    );
  }, 1800);

  setTimeout(() => {
    let div = document.createElement("div");
    div.className = "inputframe";
    document.body.append(div);
    div.innerHTML = `
    <div class="inputframe">
      <p class="text-header">[visitor@RithvikKCo /] </p>
      <input class="input" id="input"><span id="cursor"></span></inout>
    </div>`;
    var elem = document.getElementsByClassName("input");

    elem[0].value = "";
    elem[0].focus();
    elem[0].select();
  }, 2000);
};

document.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    loc = 0;
    var elem = document.getElementsByClassName("input");
    if (elem[elem.length - 1].readOnly == false) {
      elem[elem.length - 1].readOnly = "true";
      outputs(elem[elem.length - 1].value);
    }
    console.log(passedCommands);
  }
  if (e.key == "ArrowUp") {
    console.log(loc)
    console.log(passedCommands.length)
    if (loc < passedCommands.length && passedCommands.length >0) {
      var elem = document.getElementsByClassName("input");
      var text = passedCommands[loc];
      if(text == null){
        if(loc == 0){
          text = ""
        }else{
          loc--;
          text = passedCommands[loc];
 
        }
      }
      elem[elem.length - 1].value = text;
      loc++;
    }
  }
  else if(e.key == "ArrowDown"){
    if (loc >= 0) {
      console.log(loc)
    
      var elem = document.getElementsByClassName("input");
      var text = passedCommands[loc];
      if(text == null){
        text = "";
      }
      elem[elem.length - 1].value = text;
      loc--;
      
    }
  }
  else{loc =0}
});

var passedCommands = [];

function addHelpCommand() {
  var responseBody = document.createElement("div");
  responseBody.className = "responseBody";
  document.body.append(responseBody);
  addNewCommandLine();
  for (
    let commandNumber = 0;
    commandNumber < commands.length;
    commandNumber++
  ) {
    setTimeout(() => {
      var line = document.createElement("span");
      line.className = "helpCommand";
      responseBody.append(line);
      line.innerHTML = `<div class="cmd" style="display:table-cell">${commands[commandNumber]}</div><div class="cmdDescp">${commandDescriptions[commandNumber]}</div> </div><br>`;
    }, 100 * commandNumber);
  }
}

function addProjectCommand() {
  var responseBody = document.createElement("div");
  responseBody.className = "responseBody";
  document.body.append(responseBody);
  addNewCommandLine();
  for (
    let projectNumber = 0;
    projectNumber < projects.length;
    projectNumber++
  ) {
    setTimeout(() => {
      var line = document.createElement("span");
      line.className = "projectsCommand";
      responseBody.append(line);
      line.innerHTML = `<div class="proj">${projects[projectNumber]}</div><div class="projDescp">${projectTechnologies[projectNumber]}</div> </div><br>`;
    }, 100 * projectNumber);
  }
}

function getHelpTime(cmd) {
  var sum = 0;

  for (let x = cmd; x > 0; x--) {
    sum += 40 * projectTechnologies[x].length;
    console.log(`${cmd}  ${sum}  ${projectTechnologies[x]}`);
  }
  return sum;
}
function addTextLine(text) {
  var speed = 10;
  var line = document.createElement("p");
  line.className = "textSingleLine";
  document.body.appendChild(line);
  setTimeout(() => {
    line.innerHTML = text;
  }, speed);

  setTimeout(() => {
    addNewCommandLine();
  }, text.length + 1);
}

function addText(text, linenum) {
  var speed = 10;
  var line = document.createElement("p");
  line.className = "textLine";
  document.body.appendChild(line);
  setTimeout(() => {
    var d = document.getElementsByTagName("p");
    d[d.length - 1].innerHTML = text;
  }, speed * linenum);
}

function lineTime(lines, lineNum) {
  var time = 1;
  for (var line = 0; line < lineNum; line++) {
    time += lines[line].length * 3;
  }
  return time;
}

function projectTime(lines, lineNum) {
  var time = 1;
  for (var line = 0; line < lineNum; line++) {
    time += lines[line].length * 3;
  }
  return time;
}

function addArtLines(lines) {
  var artHolder = document.createElement("div");
  artHolder.className = "art-holder";
  document.body.appendChild(artHolder);
  for (var line = 0; line < lines.length; line++) {
    setTimeout(
      (line) => {
        addArt(lines[line], line, artHolder);
      },
      line * 90,
      line
    );
  }
}

function addArt(text, linenum, parent) {
  var speed = 5;
  var line = document.createElement("p");
  line.className = "ascii-art";
  parent.append(line);
  setTimeout(() => {
    var d = document.getElementsByClassName("ascii-art");
    d[d.length - 1].innerHTML = text;
  }, speed * linenum);
}

function addLines(lines) {
  for (var line = 0; line < lines.length; line++) {
    setTimeout(
      (line) => {
        addText(lines[line], line);
      },
      line * 200,
      line
    );
  }
}

function addNewCommandLine() {
  var span = document.createElement("span");
  span.innerHTML =
    '<div class="inputframe"><p class="text-header">[visitor@RithvikKCo /] </p><input class="input" id="input"></input></div>';
  document.body.appendChild(span);
  var ta = document.getElementsByTagName("input");
  ta[ta.length - 1].select();
}

function addSpecialProjectsCommandList() {
  var span = document.createElement("span");
  span.innerHTML =
    '<div class="inputframe"><p class="text-header">[visitor@RithvikKCo /Projects] </p><input class="input" id="input"></input></div>';
  document.body.appendChild(span);
  var ta = document.getElementsByTagName("input");
  ta[ta.length - 1].select();
}




function outputs(cmd) {
  switch (cmd.toLowerCase().replace(" ", "")) {
    case "project1":
      passedCommands.unshift(cmd);

      var text = [
        "<h3>Terminal Website</h3>",
        "A Personal Website designed like a terminal. It is designed with basic HTML, CSS,",
        "and JS. The inspiration for this design was my use of linux as my main operating system.	",
      ];

      addLines(text);
      setTimeout(() => {
        addNewCommandLine();
      }, lineTime(text, text.length));
      break;
    case "project2":
      passedCommands.unshift(cmd);
      var text = [
        "<h3>Url Shortener</h3>",
        "A website which can allow you to shorten long urls to a key of your choice. You",
        "could also search through any of the existing shortened URLs and their long URL",
        "counterparts to see any that already exist.",
      ];
      addLines(text);
      setTimeout(() => {
        addNewCommandLine();
      }, lineTime(text, text.length));
      break;

    case "project3":
      passedCommands.unshift(cmd);
      var text = [
        "<h3>Sorting Algorithm Visualizer</h3>",
        "A Website using ReactJs to show the user a visual representation of many",
        "sorting algorithms: Bubble Sort, Merge Sort, Quick Sort, Insertion Sort, Selection Sort",
        "Code: <a href='https://github.com/RithvikKasarla/sorting-visualizer'>https://github.com/RithvikKasarla/sorting-visualizer</a>",
        "Published: <a href=https://rithvikkasarla.github.io/sorting-visualizer/>https://rithvikkasarla.github.io/sorting-visualizer/</a>",
        "Youtube Video:<a href= https://www.youtube.com/watch?v=ldOwCBbZcIM>https://www.youtube.com/watch?v=ldOwCBbZcIM</a>",
      ];
      addLines(text);
      setTimeout(() => {
        addNewCommandLine();
      }, lineTime(text, text.length));
      break;
    case "project4":
      passedCommands.unshift(cmd);
      var text = [
        "<h3>Comment Anywhere App</h3>",
        "A chrome extension	that allows the user to comment on any website and also see",
        "other users comments."
      ];
      addLines(text);
      setTimeout(() => {
        addNewCommandLine();
      }, lineTime(text, text.length) + 90);
      break;
    case "project5":
      passedCommands.unshift(cmd);
      var text = [
        "<h3>Article Summarizer</h3>",
        "A chrome extension using NLP, Natural Language Processing, in order to",
        "summarize an article that the user is currently on."
      ];
      addLines(text);
      setTimeout(() => {
        addNewCommandLine();
      }, lineTime(text, text.length)) + 50;
      break;
    case "project6":
      passedCommands.unshift(cmd);
      var text = [
        "<h3>Water Quality Predictor</h3>",
        "	A program using Sklearn which uses past chemical composition data of water in",
        "california and predicts the chemical composition into the future using forecasting.",
      ];
      addLines(text);
      setTimeout(() => {
        addNewCommandLine();
      }, lineTime(text, text.length));
      break;
    case "whois":
      passedCommands.unshift(cmd);
      var text = [
        "I am Rithvik Kasarla. I am currently a sophmore in Case Western Reserve University and am majoring in Computer Science. ",
        "I am constantly making new projects, and putting them on my github. Along with this once a project is done I like to ",
        "document about it on my youtube channe where I go through the code and talk about any problems I encountered while coding it.",
        "Currently I am interested in many different fields of computer science, full stack development and also machine learning",
      ];
      addLines(text);
      setTimeout(() => {
        addNewCommandLine();
      }, lineTime(text, text.length));
      break;
    case "projects":
      passedCommands.unshift(cmd);
      addText("Type Project Followed by number to learn more");
      setTimeout(() => {
        addProjectCommand();
      }, 30);
      break;
    case "youtube":
      passedCommands.unshift(cmd);
      addText("Sending to Youtube ...");
      window.open(YOUTUBE, "_blank");
      setTimeout(() => {
        addNewCommandLine();
      }, 10);
      break;
    case "github":
      passedCommands.unshift(cmd);
      addText("Sending to Github ...");
      window.open(GITHUB, "_blank");
      setTimeout(() => {
        addNewCommandLine();
      }, 10);
      break;
    case "email":
      passedCommands.unshift(cmd);
      addText("Opening Email ...");
      setTimeout(() => {
        addNewCommandLine();
      }, 10);
      break;
    case "website":
      passedCommands.unshift(cmd);
      addText("GUI Website in DEV");
      setTimeout(() => {
        addNewCommandLine();
      }, 10);
      break;
    case "help":
      passedCommands.unshift(cmd);
      addHelpCommand();
      break;
    case "clear":
      passedCommands.unshift(cmd);
      document.location.reload(true);
      break;
    default:
      addTextLine(
        `Not a Command. Type <span class="cmd">help</span> to find more commands`
      );
      break;
  }
}