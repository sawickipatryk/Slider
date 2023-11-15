const elem = document.querySelector('.main-carousel');
const flkty = new Flickity(elem, {
    freeScroll: true,
    contain: true,
    prevNextButtons: true,
    pageDots: true,
    wrapAround: true,
});