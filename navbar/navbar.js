const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.navbar')
const navlist = document.querySelector('.full-nav')
hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active')
    nav.classList.toggle('is-active')
    navlist.classList.toggle('is-active')
})