const toggleBtn = document.querySelector('.theme__btn');
const body = document.querySelector('body');
let lightMode = localStorage.getItem('light-mode');
const icon__math = document.getElementById('icon__math');
const img__math = document.getElementById('img__math');
const icon__weather = document.getElementById('icon__weather');
const img__weather = document.getElementById('img__weather');
const icon__game = document.getElementById('icon__game');
const img__game = document.getElementById('img__game');

const enableLightMode = () => {
    body.classList.add('light');
    localStorage.setItem('light-mode', 'enabled');
    icon__math.setAttribute('colors', 'primary:#000000,secondary:#000000');
    img__math.setAttribute('src', '/images/light-mode/dark-calculator.png');
    icon__weather.setAttribute('colors', 'primary:#000000,secondary:#000000');
    img__weather.setAttribute('src', '/images/light-mode/dark-weather.png');
    icon__game.setAttribute('colors', 'primary:#000000,secondary:#000000');
    img__game.setAttribute('src', '/images/light-mode/dark-game.png');
};

const disableLightMode = () => {
    body.classList.remove('light');
    localStorage.setItem('light-mode', 'disabled');
    icon__math.setAttribute('colors', 'primary:#ffffff,secondary:#ffffff');
    img__math.setAttribute('src', '/images/dark-mode/white-calculator.png');
    icon__weather.setAttribute('colors', 'primary:#ffffff,secondary:#ffffff');
    img__weather.setAttribute("src", '/images/dark-mode/white-weather.png');
    icon__game.setAttribute('colors', 'primary:#ffffff,secondary:#ffffff');
    img__game.setAttribute('src', '/images/dark-mode/white-game.png');
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