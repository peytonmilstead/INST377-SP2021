/* Put your javascript in here */

function arrayMethod() {
  const images = document.querySelectorAll('.carousel');
  const imageArray = Array.from(images);

  const listContainer = document.querySelectorAll('ul');
  const target = document.querySelector('#box1');
  target.append(listContainer);

  const array2 = imageArray.map((element) => {
    const listItem = document.createElement('li');
    listItem.innerText = element;
    listContainer.append(listItem);
    console.log(listContainer);
  });

  let currentIndex = -1;
  if (currentIndex >= imageArray.length) {
    currentIndex = 0;
  }
  currentIndex++;
  document.querySelectorAll('.carousel').style.cssText = `background: ${imageArray[currentIndex]}`;
}

function moveCarousel() {
  document.addEventListener('click', (event) => {
    arrayMethod();
  });
}
window.onload = moveCarousel;