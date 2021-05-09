const acc = document.getElementsByClassName("dropdown-hover");
const arrow = document.getElementsByClassName("arrow");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector('.close')
const nav = document.querySelector('.toggle');
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

const toggleHamburger = () => {
  
  if(nav.style.display
  === 'none') {
    nav.style.display = 'flex';
    hamburger.style.display = 'none';
    close.style.display = 'flex';
  } else {
    nav.style.display = 'none';
    close.style.display = 'none';
    hamburger.style.display = 'flex'
  }
}

hamburger.addEventListener('click', toggleHamburger);
close.addEventListener('click', toggleHamburger);



