let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("Option clicked:", mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "grey") {
    document.getElementById("theme-style").href = "default.css";
  }

  if (mode == "orange") {
    document.getElementById("theme-style").href = "color2.css";
  }

  if (mode == "pink") {
    document.getElementById("theme-style").href = "color3.css";
  }

  if (mode == "green") {
    document.getElementById("theme-style").href = "color4.css";
  }
}
