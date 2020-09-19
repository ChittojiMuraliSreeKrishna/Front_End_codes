const dark = document.querySelector('.dark-mode');
const mode = document.querySelector('.mode-changer');
dark.addEventListener('click', e => {
    document.body.classList.toggle('dark');
    dark.classList.toggle('dark');
    mode.textContent = 'this is dark-mode';
    if (document.body.classList != 'dark') {
        mode.textContent = 'this is light-mode';
    }
});