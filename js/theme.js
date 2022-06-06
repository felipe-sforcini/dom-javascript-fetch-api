const container = document.querySelector('.container');
const btnTheme = document.querySelector('.btn-theme');

let theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';

const toggleTheme = () => {
    container.style.setProperty('--background-color-default', theme === 'light' ? 'var(--background-color-white)' : 'var(--background-color-dark)');
    container.style.setProperty('--color-default', theme === 'light' ? 'var(--color-light)' : 'var(--color-dark)');
    container.style.setProperty('--highlight-background-default', theme === 'light' ? 'var(--highlight-background-light)' : 'var(--highlight-background-dark)');
    container.style.setProperty('--highlight-color-default', theme === 'light' ? 'var(--highlight-color-light)' : 'var(--highlight-color-dark)');
    container.style.setProperty('--highlight-description-default', theme === 'light' ? 'var(--highlight-description-light)' : 'var(--highlight-description-dark)');

    localStorage.setItem('theme', theme);
}

const toggleButtons = () => {
    if (theme === 'light') {
        btnTheme.src = '../assets/light-mode.svg';
        pagePrev.src = '../assets/seta-esquerda-preta.svg';
        pageNext.src = '../assets/seta-direita-preta.svg';
    } else {
        btnTheme.src = '../assets/dark-mode.svg';
        pagePrev.src = '../assets/seta-esquerda-branca.svg';
        pageNext.src = '../assets/seta-direita-branca.svg';
    }
}

toggleTheme();
toggleButtons();

btnTheme.addEventListener('click', () => {
    theme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    toggleTheme();
    toggleButtons();
});