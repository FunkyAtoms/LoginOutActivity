function showForm(formID){
    document.querySelectorAll(".form-box").forEach(form => form.classList.remove("active"));
    document.getElementById(formID).classList.add("active");
}

const dvdLogo = document.querySelector('.dvd-logo');

let x = 0;
let y = 0;
let speedX = 2;
let speedY = 2;

function moveDvdLogo() {
  x += speedX;
  y += speedY;

  if (x + dvdLogo.offsetWidth > window.innerWidth) {
    x = window.innerWidth - dvdLogo.offsetWidth;
    speedX = -speedX;
  } else if (x < 0) {
    x = 0;
    speedX = -speedX;
  }

  if (y + dvdLogo.offsetHeight > window.innerHeight) {
    y = window.innerHeight - dvdLogo.offsetHeight;
    speedY = -speedY;
  } else if (y < 0) {
    y = 0;
    speedY = -speedY;
  }

  dvdLogo.style.transform = `translate(${x}px, ${y}px)`;
  requestAnimationFrame(moveDvdLogo);
}

moveDvdLogo();