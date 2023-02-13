/*=============== TIME ===============*/

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('time').textContent = h + ":" + m;
    var t = setTimeout(startTime, 500);
};

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
};

startTime();

function startDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; // janvier est 0
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = dd + '/' + mm + '/' + yyyy;
    document.getElementById('date').textContent = today;
}

startDate();


/*=============== SCROLL REVEAL ===============*/

const sr = ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal(`.top`, { delay: 500, origin: 'top', interval: 200 });
sr.reveal(`.bottom`, { delay: 500, origin: 'bottom', interval: 200 });
sr.reveal(`.info__data`, { delay: 700, origin: 'bottom', interval: 200 });
sr.reveal(`.right`, { delay: 700, origin: 'right' });
sr.reveal(`.left`, { delay: 700, origin: 'left' });

/*=============== ANIME ===============*/

const title = document.querySelector('h1');
const letters = [...document.querySelectorAll('h1 span')]

title.addEventListener('mouseenter', handleLetters);
title.addEventListener('mouseleave', handleLetters);

let isAnimatingIn = false;
let calledOut = false;
let animOpened = false;

function handleLetters() {

    if (animOpened) {
        animOut();
        animOpened = false;
        return;
    }

    if (isAnimatingIn) {
        calledOut = true;
        return;
    }

    isAnimatingIn = true;

    const animPromise = new Promise((resolve) => {
        animIn()
        setTimeout(() => {
            resolve()
        }, 750)
    })
    animPromise.then(() => {
        isAnimatingIn = false;

        if (calledOut) {
            animOut()
            calledOut = false;
        } else if (!calledOut) {
            animOpened = true;
        }
    })

}

function animIn() {
    anime({
        targets: 'h1 span',
        translateX: function () {
            return anime.random(-250, 250)
        },
        translateY: function () {
            return anime.random(-250, 250)
        },
        translateZ: function () {
            return anime.random(-2000, 750)
        },
        rotate: function () {
            return anime.random(-250, 250)
        },
        easing: 'easeOutCirc',
        duration: 750
    })
}

function animOut() {
    anime({
        targets: 'h1 span',
        translateX: 0,
        translateY: 0,
        translateZ: 0,
        rotate: 0,
        easing: 'easeInQuad',
        duration: 750
    })
}
