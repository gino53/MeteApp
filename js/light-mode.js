const toggleBtn = document.querySelector('.theme__btn');
const body = document.querySelector('body');
let lightMode = localStorage.getItem('light-mode');
const img__math = document.getElementById('img__math');
const img__weather = document.getElementById('img__weather');
const img__game = document.getElementById('img__game');

const enableLightMode = () => {
    body.classList.add('light');
    localStorage.setItem('light-mode', 'enabled');
    img__math.setAttribute('src', '/images/light-mode/dark-calculator.png');
    img__weather.setAttribute('src', '/images/light-mode/dark-weather.png');
    img__game.setAttribute('src', '/images/light-mode/dark-game.png');
};

const disableLightMode = () => {
    body.classList.remove('light');
    localStorage.setItem('light-mode', 'disabled');
    img__math.setAttribute('src', '/images/dark-mode/white-calculator.png');
    img__weather.setAttribute("src", '/images/dark-mode/white-weather.png');
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