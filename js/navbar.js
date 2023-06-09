toggle = document.getElementById('toggle')
nav = document.getElementById('nav')

toggle.addEventListener('click', function (event) {
    toggle.classList.toggle('toggle-click')
    nav.classList.toggle('nav-hidden')
    nav.classList.toggle('nav-visible')
})