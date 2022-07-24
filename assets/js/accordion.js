var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.padding = "0 15px"
      panel.style.maxHeight = null;
    } else {
      panel.style.padding = "0 15px 15px 15px"
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.overflowY = "auto"
    }
  });
}