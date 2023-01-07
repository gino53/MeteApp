const toggleBtn = document.querySelector('.theme__btn');
const body = document.querySelector('body');
let lightMode = localStorage.getItem('light-mode');
const icon__menu = document.getElementById('icon__menu');
const icon__math = document.getElementById('icon__math');
const icon__weather = document.getElementById('icon__weather');
const font__game = document.getElementById('font__game');

const enableLightMode = () => {
    body.classList.add('light');
    localStorage.setItem('light-mode', 'enabled');
    icon__menu.setAttribute('colors', 'primary:#000000,secondary:#000000');
    icon__math.setAttribute('colors', 'primary:#000000,secondary:#000000');
    icon__weather.setAttribute('colors', 'primary:#000000,secondary:#000000');
    font__game.setAttribute('src', '/images/light-mode/white-font-game.gif');
};

const disableLightMode = () => {
    body.classList.remove('light');
    localStorage.setItem('light-mode', 'disabled');
    icon__menu.setAttribute('colors', 'primary:#ffffff,secondary:#ffffff');
    icon__math.setAttribute('colors', 'primary:#ffffff,secondary:#ffffff');
    icon__weather.setAttribute('colors', 'primary:#ffffff,secondary:#ffffff');
    font__game.setAttribute('src', '/images/dark-mode/dark-font-game.gif');
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