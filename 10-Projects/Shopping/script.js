const images = document.querySelector('.ulimages');
const slides = Array.from(images.children);
const next = document.querySelector('.right');
const prev = document.querySelector('.left');
const imgsize = slides[0].getBoundingClientRect().width;

const setimgpos = (slide, index) => {
    slide.style.left = imgsize * index + 'px';
};
slides.forEach(setimgpos);

const moveSlide = (images, currentimg, targetSlide) => {
    images.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentimg.classList.remove('current-image');
    targetSlide.classList.add('current-image');
}

next.addEventListener('click', e => {
    const currentimg = images.querySelector('.current-image');
    const nextSlide = currentimg.nextElementSibling;
    moveSlide(images, currentimg, nextSlide);
});
prev.addEventListener('click', e => {
    const currentimg = images.querySelector('.current-image');
    const prevSlide = currentimg.previousElementSibling;
    moveSlide(images, currentimg, prevSlide);
});
