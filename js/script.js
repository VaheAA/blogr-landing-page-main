const acc = document.getElementsByClassName("dropdown-hover");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    const panel = this.nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }    
    panel.classList.toggle("active");
  });
}