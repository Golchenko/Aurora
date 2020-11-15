//footer navigation


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.classList === "visible") {
      panel.classList.toggle("visible");
    } else {
      panel.classList.toggle("visible");
    }
  });
}