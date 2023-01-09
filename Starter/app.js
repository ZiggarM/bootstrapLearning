const nav = document.querySelector('#myNav')


document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.classList.add('scroll')
    }
    else {
        nav.classList.remove('scroll')
    }
})