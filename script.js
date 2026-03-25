function mostrarPagina(idPagina) {
    // Esconde todas as seções
    const secoes = document.querySelectorAll('main section');
    secoes.forEach(secao => {
        secao.classList.add('hidden');
    });

    // Mostra apenas a seção clicada
    document.getElementById(idPagina).classList.remove('hidden');
}

function controlarEstufa(mensagem) {
    const status = document.getElementById('status-estufa');
    status.innerText = mensagem;
    
    // Define a cor baseada na mensagem
    if (mensagem.includes('Irrigação')) {
        status.style.color = "#2196f3"; // Azul
    } else if (mensagem.includes('Ventilação')) {
        status.style.color = "#ff9800"; // Laranja
    } else if (mensagem.includes('Temperatura')) {
        status.style.color = "#f44336"; // Vermelho
    }
}