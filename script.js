
// FAQ

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");

    var pannel = this.nextElementSibling;

    if (pannel.style.display === "block") {
      pannel.style.display = "none";
    } else {
      pannel.style.display = "block";
    }
  });
}   



// mobile menu


const openmenu = document.getElementsByClassName('menu-btn')[0]
const nav = document.getElementsByClassName('links-container')[0]

openmenu.addEventListener('click', () => {
  nav.classList.toggle('active1')
})

// IMAGE ON CLICK

document.querySelectorAll('.grid-container img').forEach(image =>{
  image.onclick = () => {
   document.querySelector('.popup-image').style.display = 'block';
   document.querySelector('.popup-image img').src = image.getAttribute('src');
  }
   });

   document.querySelector('.popup-image span').onclick = () => {
       document.querySelector('.popup-image').style.display = 'none';
   }
