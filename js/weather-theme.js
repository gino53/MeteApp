const toggleBtn = document.querySelector('.theme__btn');
const body = document.querySelector('body');
let lightMode = localStorage.getItem('light-mode');
const icon__menu = document.getElementById('icon__menu');
const icon__math = document.getElementById('icon__math');
const icon__game = document.getElementById('icon__game');
const icon__humidity = document.getElementById('icon__humidity');
const icon__wind = document.getElementById('icon__wind');

const enableLightMode = () => {
    body.classList.add('light');
    localStorage.setItem('light-mode', 'enabled');
    icon__menu.setAttribute('colors', 'primary:#000000,secondary:#000000');
    icon__math.setAttribute('colors', 'primary:#000000,secondary:#000000');
    icon__game.setAttribute('colors', 'primary:#000000,secondary:#000000');
    icon__humidity.setAttribute('colors', 'primary:#000000,secondary:#000000');
    icon__wind.setAttribute('colors', 'primary:#000000,secondary:#000000');
};

const disableLightMode = () => {
    body.classList.remove('light');
    localStorage.setItem('light-mode', 'disabled');
    icon__menu.setAttribute('colors', 'primary:#ffffff,secondary:#ffffff');
    icon__math.setAttribute('colors', 'primary:#ffffff,secondary:#ffffff');
    icon__game.setAttribute('colors', 'primary:#ffffff,secondary:#ffffff');
    icon__humidity.setAttribute('colors', 'primary:#ffffff,secondary:#ffffff');
    icon__wind.setAttribute('colors', 'primary:#ffffff,secondary:#ffffff');
};

if (lightMode === 'enabled') {
    enableLightMode();
}

toggleBtn.addEventListener('click', (e) => {
    lightMode = localStorage.getItem('light-mode');
    if (lightMode === 'disabled') {
        enableLightMode();
    } else {
        disableLightMode();
    }
});