function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").insertAdjacentHTML('beforeend', data);
        })
        .catch(error => {
            console.error('Erro ao carregar o sidebar:', error);
        });
}



loadPage('./pages/estoque.html');