const toggleBtn = document.querySelector('.theme__btn');
const body = document.querySelector('body');
let lightMode = localStorage.getItem('light-mode');
const icon__menu = document.getElementById('icon__menu');
const icon__weather = document.getElementById('icon__weather');
const icon__game = document.getElementById('icon__game');
const font__math = document.getElementById('font__math');

const enableLightMode = () => {
    body.classList.add('light');
    localStorage.setItem('light-mode', 'enabled');
    icon__menu.setAttribute('colors', 'primary:#000000,secondary:#000000');
    icon__weather.setAttribute('colors', 'primary:#000000,secondary:#000000');
    icon__game.setAttribute('colors', 'primary:#000000,secondary:#000000');
    font__math.setAttribute('src', '/images/light-mode/dark-math.png');
};

const disableLightMode = () => {
    body.classList.remove('light');
    localStorage.setItem('light-mode', 'disabled');
    icon__menu.setAttribute('colors', 'primary:#ffffff,secondary:#ffffff');
    icon__weather.setAttribute('colors', 'primary:#ffffff,secondary:#ffffff');
    icon__game.setAttribute('colors', 'primary:#ffffff,secondary:#ffffff');
    font__math.setAttribute('src', '/images/dark-mode/white-math.png');
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