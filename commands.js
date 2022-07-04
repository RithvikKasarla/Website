window.onload = function (e) {
  var elem = document.getElementsByClassName("input");
  elem[0].value = "";
  elem[0].focus();
  elem[0].select();
};

document.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    var elem = document.getElementsByClassName("input");
    if (elem[elem.length - 1].readOnly == false) {
      elem[elem.length - 1].readOnly = "true";
      outputs(elem[elem.length - 1].value);
    }
  }
});

var commands = [
  "Whois",
  "Projects",
  "Youtube",
  "Github",
  "Email",
  "History",
  "Help",
];

var commandDescriptions = [
  "Who is Rithvik Kasarla",
  "Coding Projects Done",
  "Youtube Channel",
  "Github Link",
  "To Contact Me",
  "See Last 7 Commands",
  "You know What This Does",
];

var projects = [
  "Terminal Website",
  "Url Shortener",
  "Sorting Algorithm Visualizer",
  "Comment Anywhere app",
  "Article Summarizer",
  "Water Quality Predictor",
];

var projectTechnologies = [
  "Html, CSS, Javascript",
  "ReactJs, NodeJs, MongoDB",
  "ReactJs",
  "ReactJs, Python(Flask)",
  "NodeJs, Python(Flask)",
  "Python(Sklearn,Numpy,Pandas, Matplolib)",
];
var passedCommands = [];

function outputs(cmd) {
  switch (cmd.toLowerCase()) {
    case "whois":
      addText("I am Rithvik Kasarla.");
      break;
    case "projects":
      addProjectCommand();
      setTimeout(
        () => addNewCommandLine(),
        getProjectsTime(projects.length - 1)
      );
      break;
    case "youtube":
      break;
    case "github":
      break;
    case "email":
      break;
    case "history":
      break;
    case "help":
      addHelpCommand();
      break;
    default:
      addText("Not a Command. Type help to find more commands");
      break;
  }
}

function addHelpCommand() {
  var responseBody = document.createElement("div");
  responseBody.className = "responseBody";
  document.body.append(responseBody);
  addNewCommandLine();
  for (
    let commandNumber = 0;
    commandNumber < projects.length;
    commandNumber++
  ) {
    setTimeout(
      (commandNumber) => {
        var line = document.createElement("span");
        line.className = "line";
        line.innerHTML = `<div class="cmd"></div>  <div class="cmdDescp"></div> </div><br>`;
        responseBody.append(line);
        var cmd = document.getElementsByClassName("cmd");
        var cmdDescp = document.getElementsByClassName("cmdDescp");
        for (
          var char = 0;
          char <
          Math.max(
            commands[commandNumber].length,
            commandDescriptions[commandNumber].length
          );
          char++
        ) {
          setTimeout(
            (char, commandNumber, cmd) => {
              console.log(projects[commandNumber]);
              console.log(char);
              if (char < commands[commandNumber].length) {
                cmd[cmd.length - 1].innerHTML += commands[commandNumber][char];
              }
            },
            char * 30,
            char,
            commandNumber,
            cmd
          );
          setTimeout(
            (char, commandNumber, cmd) => {
              if (char < commandDescriptions[commandNumber].length) {
                cmdDescp[cmdDescp.length - 1].innerHTML +=
                  commandDescriptions[commandNumber][char];
              }
            },
            char * 20,
            char,
            commandNumber,
            cmdDescp
          );
        }
      },
      commandNumber * 500,
      commandNumber
    );
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
    setTimeout(
      (projectNumber) => {
        var line = document.createElement("span");
        line.className = "line";
        line.innerHTML = `<div class="proj"></div>  <div class="projDescp"></div> </div><br>`;
        responseBody.append(line);
        var proj = document.getElementsByClassName("proj");
        var projDescp = document.getElementsByClassName("projDescp");
        for (
          var char = 0;
          char <
          Math.max(
            projects[projectNumber].length,
            projectTechnologies[projectNumber].length
          );
          char++
        ) {
          setTimeout(
            (char, projectNumber, cmd) => {
              console.log(projects[projectNumber]);
              console.log(char);
              if (char < projects[projectNumber].length) {
                cmd[cmd.length - 1].innerHTML += projects[projectNumber][char];
              }
            },
            char * 10,
            char,
            projectNumber,
            proj
          );
          setTimeout(
            (char, projectNumber, cmd) => {
              if (char < projectTechnologies[projectNumber].length) {
                projDescp[projDescp.length - 1].innerHTML +=
                  projectTechnologies[projectNumber][char];
              }
            },
            char * 20,
            char,
            projectNumber,
            projDescp
          );
        }
      },
      projectNumber * 500,
      projectNumber
    );
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
function addText(text) {
  var speed = 40;
  var div = document.createElement("div");
  document.body.appendChild(div);
  for (let char = 0; char < text.length; char++) {
    setTimeout(() => {
      var d = document.getElementsByTagName("div");
      d[d.length - 1].innerHTML += text[char];
    }, char * speed);
  }
  setTimeout(() => {
    addNewCommandLine();
  }, text.length * speed + 1);
}

function addNewCommandLine() {
  var span = document.createElement("span");
  span.innerHTML =
    '<div class="inputframe"><p class="text-header">[visitor@RithvikKCo /] </p><textarea class="input" id="input"></textarea></div>';
  document.body.appendChild(span);
  var ta = document.getElementsByTagName("textarea");
  ta[ta.length - 1].select();
}

function addSpecialProjectsCommandList() {
  var span = document.createElement("span");
  span.innerHTML =
    '<div class="inputframe"><p class="text-header">[visitor@RithvikKCo /Projects] </p><textarea class="input" id="input"></textarea></div>';
  document.body.appendChild(span);
  var ta = document.getElementsByTagName("textarea");
  ta[ta.length - 1].select();
}
