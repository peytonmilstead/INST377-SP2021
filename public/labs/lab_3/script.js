/* Put your javascript in here */

function arrayMethod() {
  const images = carousel.querySelectorAll('li');
  const imageArray = Array.from(images);

  let i = 1;
  imageArray.forEach((element) => {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
  });
}

function moveCarousel() {
  document.addEventListener('click', () => arrayMethod());
}