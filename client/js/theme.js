const toggleBtn = document.getElementById('darkmode_toggle');
const body = document.querySelector('body');
const github = document.getElementById('github_icon');
const linkedin = document.getElementById('linkedin_icon');
let lightMode = localStorage.getItem('light-mode');

const enableLightMode = () => {
    body.classList.add('light');
    linkedin.src = ('/linkedin-black.png');
    github.src = ('/github-black.png');
    localStorage.setItem('light-mode', 'enabled');
};

const disableLightMode = () => {
    body.classList.remove('light');
    linkedin.src = ('/linkedin.png');
    github.src = ('/github.png');
    localStorage.setItem('light-mode', 'disabled');
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