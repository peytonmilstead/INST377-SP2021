/* Put your javascript in here */

function arrayMethod() {
  const images = document.querySelectorAll('.carousel');
  const imageArray = Array.from(images);

  const array2 = imageArray.map((element) => {
    const listItem = document.querySelectorAll('.carousel_pic');
    listItem.innerText = element;
    let i = 0;
    i < listItem.length;
    i++;
    array2.push(listItem[i].background);
    console.log(array2);
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