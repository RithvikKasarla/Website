var loc = -1;

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
      <input class="input" id="input"><span id="cursor"></span></input>
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
    console.log(loc);
    console.log(passedCommands.length);
    if (loc < passedCommands.length && passedCommands.length > 0) {
      var elem = document.getElementsByClassName("input");
      var text = passedCommands[loc];
      if (text == null) {
        if (loc == 0) {
          text = "";
        } else {
          loc--;
          text = passedCommands[loc];
        }
      }
      elem[elem.length - 1].value = text;
      loc++;
    }
  } else if (e.key == "ArrowDown") {
    if (loc >= 0) {
      console.log(loc);

      var elem = document.getElementsByClassName("input");
      var text = passedCommands[loc];
      if (text == null) {
        text = "";
      }
      elem[elem.length - 1].value = text;
      loc--;
    }
  } else {
    loc = 0;
  }
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

/*
  Adds one line of text
*/
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

/*
  A rough calculation of the amounf of time it would take for a line to be animated out.
*/

function lineTime(lines, lineNum) {
  var time = 1;
  for (var line = 0; line < lineNum; line++) {
    time += lines[line].length * 3;
  }
  return time;
}

/*
  Goes though the ascii art's lines and sends them to the AddArt function
*/
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

/* 
  adds 1 line of the ascii art
*/

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

/**
 *
 * @param {*} lines an array of lines
 *
 * Goes through each line and calls the addText which adds a line to the dom
 *
 */

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

/*
  Adds a Command Line
*/

function addNewCommandLine() {
  var span = document.createElement("span");
  span.innerHTML =
    '<div class="inputframe"><p class="text-header">[visitor@RithvikKCo /] </p><input class="input" id="input"></input></div>';
  document.body.appendChild(span);
  var ta = document.getElementsByTagName("input");
  ta[ta.length - 1].select();
  ta[ta.length - 1].focus();
}

/*
  Autoscroll to bottom
*/
window.setInterval(() => {
  var ta = document.getElementsByTagName("input");
  ta[ta.length - 1].scrollIntoView();
}, 100);

/*
  Switch Statement for the outputs of every command
*/
function outputs(cmd) {
  switch (cmd.toLowerCase().replace(" ", "")) {
    case "project1":
      passedCommands.unshift(cmd);

      var text = [
        "<h3>Terminal Website</h3>",
        "A Personal Website designed like a terminal. The inspiration for this design ",
        "was to give the user a glimpse into my world as a programmer and using the.",
        "terminal.",
        "-> Created a frontend using HTML, CSS, and JavaScript",
        "-> Deployed on an AWS s3 bucket",
        "-> Domain was created from AWS route53",
        "Tech: HTML, CSS, JavaScript, AWS Route53, AWS s3 buckets, AWS EC2, Nginx",
        "Code:<a href='https://github.com/RithvikKasarla/Website' target='_blank'>https://github.com/RithvikKasarla/Website</a>",
        "Published EC2: <a href='http://rithvik-dev.com' target='_blank'>http://rithvik-dev.com</a>",
        "Published S3: <a href='http://rithvik-dev.com.s3-website-us-east-1.amazonaws.com' target='_blank'>http://rithvik-dev.com.s3-website-us-east-1.amazonaws.com</a>",
      ];

      addLines(text);
      setTimeout(() => {
        addNewCommandLine();
      }, lineTime(text, text.length) + 400);
      break;
    case "project2":
      passedCommands.unshift(cmd);
      var text = [
        "<h3>Url Shortener</h3>",
        "A webapp which allows users to shorten any long URL. Users can navigate to the website ",
        "using the shortened URL, or search through previously created shortened URLs.",
        "-> Developed the application using a ReactJs frontend and tailwind’s CSS framework",
        "-> Designed and built a Rest API using ExpressJs as backend and Mongo DB database",
        "-> Deployed on an AWS EC2 Instance with a Nginx webserver ",
        "Tech: ReactJs, Rest API, ExpressJs, Tailwind CSS, Mongo DB, AWS EC2, Nginx ",
        "Code <a href='https://github.com/RithvikKasarla/UrlShortener' target='_blank'>https://github.com/RithvikKasarla/UrlShortener</a>",
        "Published: <a href='http://rithvik-dev.com/urls' target='_blank'>http://rithvik-dev.com</a>",
      ];
      addLines(text);
      setTimeout(() => {
        addNewCommandLine();
      }, lineTime(text, text.length) + 500);
      break;

    case "project3":
      passedCommands.unshift(cmd);
      var text = [
        "<h3>Sorting Algorithm Visualizer</h3>",
        "A Website to show the user a visual representation of many sorting algorithms: ",
        "Bubble Sort, Merge Sort, Quick Sort, Insertion Sort, Selection Sort",
        "-> Created a frontend using ReactJS and CSS",
        "-> Utilized CSS to dynamically create the height of bars",
        "-> Coded Sorting Algorithms in JavaScript",
        "Code: <a href='https://github.com/RithvikKasarla/sorting-visualizer' target='_blank'>https://github.com/RithvikKasarla/sorting-visualizer</a>",
        "Published: <a href='https://rithvikkasarla.github.io/sorting-visualizer/' target='_blank'>https://rithvikkasarla.github.io/sorting-visualizer/</a>",
        "Youtube Video:<a href= 'https://www.youtube.com/watch?v=ldOwCBbZcIM' target='_blank'>https://www.youtube.com/watch?v=ldOwCBbZcIM</a>",
      ];
      addLines(text);
      setTimeout(() => {
        addNewCommandLine();
      }, lineTime(text, text.length) + 500);
      break;
    case "project4":
      passedCommands.unshift(cmd);
      var text = [
        "<h3>Freezepond Chrome extension</h3>",
        "Developed as a part of the hackathon over a weekend, the chrome extension and website ",
        "allow users to share comments about a webpage which other users can see. This",
        "effectively allows the community to see honest information of websites that they are on. ",
        "-> Created the idea",
        "-> Created a VueJs frontend of the chrome extension ",
        "-> Designed and helped develop the website,",
        "-> Setup the SQL database",
        "Tech: VueJs, JavaScript, HTML, C++ ",
        "Code:<a href='https://github.com/comment-anywhere' target='_blank'>https://github.com/comment-anywhere</a>",
      ];
      addLines(text);
      setTimeout(() => {
        addNewCommandLine();
      }, lineTime(text, text.length) + 600);
      break;
    case "project5":
      passedCommands.unshift(cmd);
      var text = [
        "<h3>Article Summarizer</h3>",
        "A chrome extension created as part of a hackathon team using NLP, Natural Language Processing, in order to",
        "summarize an article that the user is currently on.",
        "-> Created the Chrome extension frontend",
        "-> Developed the connection between the chrome extension and webpage",
        "-> Extracted text utilizing the mercury-parcer library",
        "-> Utilized the BART model trained on the CNN/DailyMail dataset to summarize",
        "Tech: HTML, CSS, JavaScript, BART model, mercury-parcer library",
        "Code:<a href='https://github.com/RithvikKasarla/quick-summary' target='_blank'>https://github.com/RithvikKasarla/quick-summary</a>",
      ];
      addLines(text);
      setTimeout(() => {
        addNewCommandLine();
      }, lineTime(text, text.length) + 500);
      break;
    case "project6":
      passedCommands.unshift(cmd);
      var text = [
        "<h3>Water Quality Predictor</h3>",
        "	A program using Sklearn which uses past chemical composition data of water in",
        "california and predicts the chemical composition into the future.",
        "-> Called water companies to collect water quality data",
        "-> Formatted the data using pandas an numpy",
        "-> Trained a forcasting model utilizing sklearn algorithms",
        "-> Plotted the trend with Matplotlib",
        "Tech: Python, numpy, pandas, matplotlib, Sklearn",
        "Code:<a href='https://github.com/RithvikKasarla/Water_quality' target='_blank'>https://github.com/RithvikKasarla/Water_quality</a>",
      ];
      addLines(text);
      setTimeout(() => {
        addNewCommandLine();
      }, lineTime(text, text.length) + 500);
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
      addText(
        `Not a Command. Type <span class="cmd">help</span> to find more commands`
      );
      setTimeout(() => {
        addNewCommandLine();
      }, 10);
      break;
  }
}
