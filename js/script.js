const acc = document.getElementsByClassName("dropdown-hover");
const arrow = document.getElementsByClassName("arrow");
const hamburger = document.querySelector(".hamburger-icon");
const close = document.querySelector('.close')
const nav = document.querySelector('.toggle');



for (let i = 0; i < acc.length; i++) {
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

const footerNav = document.getElementsByClassName('footer-nav-link_main');

for (let j = 0; j < footerNav.length; j++) {
  footerNav[j].addEventListener("click", function() {
    const footerLink = this.nextElementSibling;
    if (footerLink.style.display === "block") {
      footerLink.style.display = "none";
    } else {
      footerLink.style.display = "block";
    }
  });
}


const toggleHamburger = () => {
  for(let k = 0; k < 1; k++) {
    if(nav.style.display=== 'none') {
        nav.style.display = 'flex';
        hamburger.style.display = 'none';
        close.style.display = 'flex';
      } else {
        nav.style.display = 'none';
        close.style.display = 'none';
        hamburger.style.display = 'flex'
      }
    }
  }
  

hamburger.addEventListener('click', toggleHamburger);
close.addEventListener('click', toggleHamburger);



