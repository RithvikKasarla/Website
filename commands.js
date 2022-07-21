var GITHUB = "https://github.com/RithvikKasarla";
var YOUTUBE = "https://www.youtube.com/channel/UCuDA8LnC0m0ITeM5RfNVY1w";
var EMAIL = "rithvikrk719@gmail.com";
function addDisclaimer(text) {
  var speed = 10;
  var line = document.createElement("p");
  line.style.color = "white";
  line.style.fontSize = "15px";
  document.body.appendChild(line);
  setTimeout(() => {
    var d = document.getElementsByTagName("p");
    d[d.length - 1].innerHTML = text;
  }, speed);
}

window.onload = function (e) {
  // addText(
  //   `<spam style="color:white;font-size:15px;">Rithvik Kasarla A real and legit Corporation. All writes reserved.<spam>`
  // );
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
      <textarea class="input" id="input"><span id="cursor"></span></textarea>
    </div>`;
    var elem = document.getElementsByClassName("input");

    elem[0].value = "";
    elem[0].focus();
    elem[0].select();
  }, 2000);
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

var Banner = [
  "  _/_/_/    _/    _/      _/                   _/   _/            _/    _/                                          _/            ",
  " _/    _/      _/_/_/_/  _/_/_/   _/      _/       _/  _/        _/  _/      _/_/_/    _/_/_/    _/_/_/  _/  _/_/  _/    _/_/_/   ",
  "_/_/_/    _/    _/      _/    _/  _/     _/   _/  _/_/          _/_/      _/    _/  _/_/      _/    _/  _/_/      _/  _/    _/    ",
  "_/    _/  _/    _/      _/    _/    _/  _/    _/  _/  _/        _/  _/    _/    _/      _/_/  _/    _/  _/        _/  _/    _/     ",
  "_/    _/  _/      _/_/  _/    _/      _/      _/  _/    _/      _/    _/    _/_/_/  _/_/_/      _/_/_/  _/        _/    _/_/_/      ",
  "                                                                                                                                  ",
];
var oringinalArt = [
  "              +              /    ",
  "  \\           |           /      ",
  "    \\         |         /          _/_/_/    _/    _/      _/                    _/   _/            _/    _/                                          _/            ",
  "      \\      / \\     /           _/    _/      _/_/_/_/  _/_/_/    _/       _/      _/  _/        _/  _/      _/_/_/    _/_/_/    _/_/_/  _/  _/_/  _/    _/_/_/   ",
  "        \\  /_____\\ /            _/_/_/    _/    _/      _/    _/   _/      _/  _/  _/_/          _/_/      _/    _/  _/_/      _/    _/  _/_/      _/  _/    _/    ",
  "        /  |__|__|  \\            _/    _/  _/    _/      _/   _/     _/  _/    _/  _/  _/        _/  _/    _/    _/      _/_/  _/    _/  _/        _/  _/    _/     ",
  "      /  |;|     |;|  \\          _/    _/  _/      _/_/  _/   _/      _/      _/  _/    _/      _/    _/    _/_/_/  _/_/_/      _/_/_/  _/        _/    _/_/_/      ",
  "    /    \\.    .  /    \\                                                                                                                                          ",
  "  /       ||:  .  |       \\      ",
  "          ||:     |         \\    ",
  "          ||:.    |           \\  ",
  "          ||:    .|",
  "          ||:   , |         /`\\",
  "          ||:     |                                          /`\\",
  "          ||: _ . |                             /`\\",
  "         _||_| |__|                      ____",
  "    ____~    |_|  |___           __-----~    ~`---,__             ___            _----~`---,__             ___",
  "  -~                  ~---___,--~'                  ~~----_____-~'    ---___,--~'             ~~----_____-~",
  "  `~----,____                      ",
];

var art = [
  "              +              /    ",
  "  \\           |           /      ",
  "    \\         |         /         _/_/_/    _/    _/      _/                   _/   _/            _/    _/                                          _/           ",
  "      \\      / \\     /           _/    _/      _/_/_/_/  _/        _/      _/      _/  _/        _/  _/      _/_/_/    _/_/_/    _/_/_/  _/  _/_/  _/    _/_/_/  ",
  "        \\  /_____\\ /             _/_/_/    _/    _/      _/_/_/_/  _/    _/  _/   _/_/          _/_/      _/    _/  _/_/      _/    _/  _/_/      _/  _/    _/    ",
  "        /  |__|__|  \\            _/   _/   _/    _/      _/   _/    _/ _/    _/   _/  _/        _/  _/    _/    _/      _/_/  _/    _/  _/        _/  _/    _/     ",
  "      /  |;|     |;| \\           _/   _/  _/      _/_/  _/   _/      _/      _/  _/    _/      _/    _/    _/_/_/  _/_/_/      _/_/_/  _/        _/    _/_/_/      ",
  "    /    \\.    .  /   \\                                                                                                                                          ",
  "  /       ||:  .  |      \\      ",
  "          ||:     |        \\    ",
  "          ||:     |                                          /`\\",
  "          ||: _ . |                             /`\\",
  "         _||_| |__|       /`\\           ____",
  "    ____~    |_|  |___           __-----~    ~`---,__             ___            _----~`---,__             ___",
  "  -~                  ~---___,--~'                  ~~----_____-~'    ---___,--~'             ~~----_____-~",
  "  `~----,____                      ",
];
var commands = [
  "Whois",
  "Projects",
  "Youtube",
  "Github",
  "Email",
  "Website",
  "Clear",
  "Help",
];

var commandDescriptions = [
  "Who is Rithvik Kasarla",
  "Coding Projects Done",
  "Youtube Channel",
  "Github Link",
  "To Contact Me",
  "GUI Website",
  "Refresh page",
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
  switch (cmd.toLowerCase().replace(" ", "")) {
    case "whois":
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
      addProjectCommand();
      break;
    case "youtube":
      addText("Sending to Youtube ...");
      window.open(YOUTUBE, "_blank");
      setTimeout(() => {
        addNewCommandLine();
      }, 10);
      break;
    case "github":
      addText("Sending to Github ...");
      window.open(GITHUB, "_blank");
      setTimeout(() => {
        addNewCommandLine();
      }, 10);
      break;
    case "email":
      addText("Opening Email ...");
      setTimeout(() => {
        addNewCommandLine();
      }, 10);
      break;
    case "website":
      addText("GUI Website in DEV");
      setTimeout(() => {
        addNewCommandLine();
      }, 10);
      break;
    case "help":
      addHelpCommand();
      break;
    case "clear":
      document.location.reload(true);
      break;
    default:
      addTextLine(
        `Not a Command. Type <span class="cmd">help</span> to find more commands`
      );
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

function addHelpCommandTry2() {
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
            projects[commandNumber].length,
            commandDescriptions[commandNumber].length
          );
          char++
        ) {
          setTimeout(
            (char, commandNumber, cmd) => {
              console.log(projects[commandNumber]);
              console.log(char);
              if (char < projects[commandNumber].length) {
                cmd[cmd.length - 1].innerHTML += projects[commandNumber][char];
              }
            },
            char * 20,
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
            char * 10,
            char,
            commandNumber,
            cmdDescp
          );
        }
      },
      commandNumber * 300,
      commandNumber
    );
  }
}

function addProjectCommandtry2() {
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
            char * 8,
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
            char * 10,
            char,
            projectNumber,
            projDescp
          );
        }
      },
      projectNumber * 300,
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
