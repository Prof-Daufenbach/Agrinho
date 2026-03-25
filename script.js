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
    status.style.color = "#2e7d32";
    status.style.fontWeight = "bold";
}