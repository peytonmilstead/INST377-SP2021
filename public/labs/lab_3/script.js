/* Put your javascript in here */

function arrayMethod() {
  const images = document.querySelectorAll('.carousel_pic');
  const imageArray = Array.from(images);

  const listContainer = document.createElement('ul');
  const target = document.querySelector('#box1');
  target.append(listContainer);

  const array2 = imageArray.map((element) => {
    const listItem = document.createElement('li');
    listItem.innerText = element;
    listContainer.append(listItem);
    return element;
  });
  console.log(array2);
}

function moveCarousel() {
  document.addEventListener('click', (event) => {
    arrayMethod();
  });
}
window.onload = moveCarousel;