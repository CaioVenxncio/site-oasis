document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Verifica se há um tema salvo no local storage e aplica
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        toggleButton.textContent = 'Modo Escuro';
    } else {
        // Se não há tema salvo ou é 'dark', mantém o modo escuro padrão
        toggleButton.textContent = 'Modo Claro';
    }

    // Adiciona o evento de clique para alternar o tema
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            toggleButton.textContent = 'Modo Escuro';
            localStorage.setItem('theme', 'light');
        } else {
            toggleButton.textContent = 'Modo Claro';
            localStorage.setItem('theme', 'dark');
        }
    });
});
