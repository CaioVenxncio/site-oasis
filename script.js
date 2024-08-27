document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check local storage for saved theme
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        toggleButton.classList.add('light-mode');
        toggleButton.textContent = 'Modo Escuro';
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        toggleButton.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            toggleButton.textContent = 'Modo Escuro';
            localStorage.setItem('theme', 'light');
        } else {
            toggleButton.textContent = 'Modo Claro';
            localStorage.setItem('theme', 'dark');
        }
    });
});
