const toggleBtn = document.getElementById('darkmode_toggle');
const body = document.querySelector('body');
const github = document.getElementById('github_icon');
const linkedin = document.getElementById('linkedin_icon');
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () => {
    body.classList.add('dark');
    linkedin.src = ('/images/linkedin.png');
    github.src = ('/images/github.png');
    localStorage.setItem('dark-mode', 'enabled');
};

const disableDarkMode = () => {
    body.classList.remove('dark');
    linkedin.src = ('/images/linkedin-black.png');
    github.src = ('/images/github-black.png');
    localStorage.setItem('dark-mode', 'disabled');
};

if (darkMode === 'enabled') {
    enableDarkMode();
}

toggleBtn.addEventListener('click', (e) => {
    darkMode = localStorage.getItem('dark-mode');
    if (darkMode === 'disabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
