const toggleBtn = document.querySelector('.theme__btn');
const body = document.querySelector('body');
let lightMode = localStorage.getItem('light-mode');
const font__game = document.getElementById('font__game');

const enableLightMode = () => {
    body.classList.add('light');
    localStorage.setItem('light-mode', 'enabled');
    font__game.setAttribute('src', '/images/light-mode/white-font-game.gif');
};

const disableLightMode = () => {
    body.classList.remove('light');
    localStorage.setItem('light-mode', 'disabled');
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