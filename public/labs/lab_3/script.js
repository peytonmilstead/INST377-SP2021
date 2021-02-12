/* Put your javascript in here */

function arrayMethod() {
  const images = document.querySelectorAll('li');
  const imageArray = Array.from(images);

  imageArray.forEach((element) => {
    console.log(element);
  });
}

elem.onclick = function moveCarousel() {
  document.addEventListener('click', () => {
    arrayMethod();
  });
};
window.onload = moveCarousel;