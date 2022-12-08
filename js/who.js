import VanillaTilt from "vanilla-tilt";

VanillaTilt.init(document.querySelector(".principles-section-2"), {
    max: 5,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
})

const openButton = document.querySelector(".team-button-1");
const modal = document.querySelector(".modal-1");
const closeButton = document.querySelector(".modal-button-1")

openButton.addEventListener('click', () => {
    modal.showModal();
})

modal.addEventListener('click', (e) => {
    if(e.target.nodeName == "DIALOG"){
        modal.setAttribute('closing', "")
        modal.addEventListener('animationend', () => {
        modal.removeAttribute('closing')
        modal.close();
    }, {once: true})
    }
} )

closeButton.addEventListener('click', () => {
    modal.setAttribute('closing', "")
    modal.addEventListener('animationend', () => {
        modal.removeAttribute('closing')
        modal.close();
    }, {once: true})
})

const openButtonTwo = document.querySelector(".team-button-2");
const modal2 = document.querySelector(".modal-2");
const closeButtonTwo = document.querySelector(".modal-button-2")

openButtonTwo.addEventListener('click', () => {
    modal2.showModal();
})

modal2.addEventListener('click', (e) => {
    if(e.target.nodeName == "DIALOG"){
        modal2.setAttribute('closing', "")
        modal2.addEventListener('animationend', () => {
        modal2.removeAttribute('closing')
        modal2.close();
    }, {once: true})
    }
} )

closeButtonTwo.addEventListener('click', () => {
    modal2.setAttribute('closing', "")
    modal2.addEventListener('animationend', () => {
        modal2.removeAttribute('closing')
        modal2.close();
    }, {once: true})
})

const openButton3 = document.querySelector(".team-button-3");
const modal3 = document.querySelector(".modal-3");
const closeButton3 = document.querySelector(".modal-button-3")

openButton3.addEventListener('click', () => {
    modal3.showModal();
})

modal3.addEventListener('click', (e) => {
    if(e.target.nodeName == "DIALOG"){
        modal3.setAttribute('closing', "")
        modal3.addEventListener('animationend', () => {
        modal3.removeAttribute('closing')
        modal3.close();
    }, {once: true})
    }
} )

closeButton3.addEventListener('click', () => {
    modal3.setAttribute('closing', "")
    modal3.addEventListener('animationend', () => {
        modal3.removeAttribute('closing')
        modal3.close();
    }, {once: true})
})

const openButton4 = document.querySelector(".team-button-4");
const modal4 = document.querySelector(".modal-4");
const closeButton4 = document.querySelector(".modal-button-4")

openButton4.addEventListener('click', () => {
    modal4.showModal();
})

modal4.addEventListener('click', (e) => {
    if(e.target.nodeName == "DIALOG"){
        modal4.setAttribute('closing', "")
        modal4.addEventListener('animationend', () => {
        modal4.removeAttribute('closing')
        modal4.close();
    }, {once: true})
    }
} )

closeButton4.addEventListener('click', () => {
    modal4.setAttribute('closing', "")
    modal4.addEventListener('animationend', () => {
        modal4.removeAttribute('closing')
        modal4.close();
    }, {once: true})
})

const openButton5 = document.querySelector(".team-button-5");
const modal5 = document.querySelector(".modal-5");
const closeButton5 = document.querySelector(".modal-button-5")

openButton5.addEventListener('click', () => {
    modal5.showModal();
})

modal5.addEventListener('click', (e) => {
    if(e.target.nodeName == "DIALOG"){
        modal5.setAttribute('closing', "")
        modal5.addEventListener('animationend', () => {
        modal5.removeAttribute('closing')
        modal5.close();
    }, {once: true})
    }
} )

closeButton5.addEventListener('click', () => {
    modal5.setAttribute('closing', "")
    modal5.addEventListener('animationend', () => {
        modal5.removeAttribute('closing')
        modal5.close();
    }, {once: true})
})

$ (".title").hover(
    function() {
        $ (".title-image").css({
            transition: 'filter .3s ease-in-out',
            filter: 'none'
        })
    }, function() {
        $ (".title-image").css({
            transition: 'filter .3s ease-in-out',
            filter: 'grayscale(100%)'
        })
    }, console.log("hey")
)

$ (".left-quote").hover(
    function() {
        $ (".left-quote").css({
            transition: 'filter .3s ease-in-out',
            filter: 'none'
        })
    }, function() {
        $ (".left-quote").css({
            transition: 'filter .3s ease-in-out',
            filter: 'grayscale(100%)'
        })
    }, console.log("hey")
)