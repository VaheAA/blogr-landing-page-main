const acc = document.getElementsByClassName("dropdown-hover");
const arrow = document.getElementsByClassName("arrow");
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
  if(screen.width <= 600) {
    document.querySelector('.hover').classList.remove('hover');
    document.querySelector('.arrow-hover').classList.remove('arrow-hover');
  }
}

