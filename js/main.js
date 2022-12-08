import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const track = document.querySelector('.slides');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button--right');
const prevButton = document.querySelector('.carousel_button--left');
const playVideoIcon = document.querySelector('.play-button');
const poster = document.querySelector('.poster');
const startVideo = document.querySelector('.air-quality-video');
const statsBackground = document.querySelector('.background-stats');


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/* Set up slides */
const slideWidth = slides[0].getBoundingClientRect().width;

var amount = 5
const setSlidePosition = (slide, index) => {
    slide.style.zIndex = index + amount;
    amount -= 2
}

slides.forEach(setSlidePosition);
/* Set up buttons for carousel*/

const moveToSlide = (currentSlide, targetSlide, slideWidth, dir) => {
    if (dir == "back"){
        gsap.to(targetSlide, {duration: .01, x: 0, ease: 'power4.out'})
        gsap.from(targetSlide.children[2], {duration: 1.3, x: -1000, ease: 'circ.out'})
    }else {
        //currentSlide.style.transform = `translateX(-${slideWidth}px)`;
        gsap.to(currentSlide, {duration: .01, x: -slideWidth, ease: 'power4.out'})
        gsap.from(targetSlide.children[2], {duration: 1.3, x: 2000, ease: 'circ.out'})
    }
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
   } else {
       prevButton.classList.remove('is-hidden');
       nextButton.classList.remove('is-hidden');
    }
}

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(currentSlide, prevSlide, slideWidth, "back")
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

nextButton.addEventListener('click', e => {
    console.log("heyy")
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(currentSlide, nextSlide, slideWidth, "forward");
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

/* Learn more button, on hover change background color*/
$ (".carousel-button").hover(
    function() {
        $ (".carousel-vid").css({
            transition: 'filter .3s ease-in-out',
            filter: 'none'
        }),
        $ ('.slide-image').css({
            transition: 'filter .3s ease-in-out',
            filter: 'none'
        })
    }, function() {
        $ (".carousel-vid").css({
            transition: 'filter .3s ease-in-out',
            filter: 'grayscale(100%)'
        }),
        $ ('.slide-image').css({
            transition: 'filter .3s ease-in-out',
            filter: 'grayscale(100%)'
        })
    }
)

$('.air-quality-video').hover(function toggleControls() {
    if (this.hasAttribute("controls")) {
        this.removeAttribute("controls")
        $ (".poster").css({
            transition: 'filter .3s ease-in-out',
            filter: 'grayscale(100%)'
        })
    } else {
        $ (".poster").css({
            transition: 'filter .3s ease-in-out',
            filter: 'none'
        })
        this.setAttribute("controls", "controls")
    }
})

$('.know-the-stats').hover(
    function() {
        $ (".stats-background").css({
            transition: 'filter .3s ease-in-out',
            filter: 'none'
        })
    }, function() {
        $ (".stats-background").css({
            transition: 'filter .3s ease-in-out',
            filter: 'grayscale(100%)'
        })
    }
)

function pausePlay(poster) {
    for (const video of document.querySelectorAll('video')) {
        video.controls = false
        video.addEventListener('play', () => { poster.style.display = 'none'})
        video.addEventListener('pause', () => { poster.style.display = 'block'})
    }
  }

window.addEventListener('load', pausePlay(poster), false)

gsap.to(statsBackground, {
    scrollTrigger : {
        scrub: 1
    }, 
    y : 0
})