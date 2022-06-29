document.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    document.getElementsByTagName("textarea")[
      document.getElementsByTagName("textarea").length - 1
    ].readOnly = "false";
    outputs(document.getElementById("input").val());
    document.querySelector(".input").textContent;
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

function outputs(cmd) {
  switch (cmd.toLowerCase()) {
    case "whois":
      alert("whois");
      addText("I am Rithvik Kasarla.");
      break;
    case "projects":
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
      addText("hi");
      break;
    default:
      addText("Not a Command. Type help to find more commands");
      break;
  }
}

function addText(text) {
  var speed = 50;
  var div = document.createElement("div");
  document.body.appendChild(div);
  for (let char = 0; char < text.length; char++) {
    setTimeout(() => {
      $("div")[$("div").length - 1].innerHTML += text[char];
    }, char * speed);
  }
  setTimeout(() => {
    var span = document.createElement("span");
    span.innerHTML =
      '<div class="inputframe"><p class="text-header">[visitor@RithvikKCo /] </p><textarea class="input" id="input"></textarea></div>';
    document.body.appendChild(span);
    $("textarea")[$("textarea").length - 1].select();
  }, text.length * speed + 1);
}
