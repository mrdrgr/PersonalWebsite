function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 25;

        if(elementTop < windowHeight - revealPoint) {
            reveals[i].classList.add('show');
        }

        else {
            reveals[i].classList.remove('show')
        }
    }
}

window.addEventListener('scroll', reveal);