/* Put your javascript in here */

function arrayMethod() {
    const images = document.querySelectorAll('imageClass');
    const imageArray = Array.from(images);
    
    imageArray.forEach((element) => {
    console.log(element);
});
}

function moveCarousel(){
    document.addEventListener('click', (event) =>
    arrayMethod()
}