//função que seta os valores salvos quando a página é carregada
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('estoque_maquina1').value = 0;
    document.getElementById('estoque_maquina2').value = 0;
    document.getElementById('estoque_maquina3').value = 0;

    document.getElementById('preco_maquina1').textContent  = localStorage.getItem('preco_maquina1') || 0;
    document.getElementById('preco_maquina2').textContent  = localStorage.getItem('preco_maquina2') || 0;
    document.getElementById('preco_maquina3').textContent  = localStorage.getItem('preco_maquina3') || 0;


});

function preencherForm() {
    // Pega o nome do cliente
    document.getElementById('tableCliente').textContent = localStorage.getItem('user');

    // Pega as máquinas que desejam ser compradas
    const maquinas = [
        document.getElementById('estoque_maquina1'),
        document.getElementById('estoque_maquina2'),
        document.getElementById('estoque_maquina3')
    ];

    for (let maquinaAtual = 0; maquinaAtual < 3; maquinaAtual++) {
        let estoqueMaquinaString = 'estoque_maquina' + String(maquinaAtual + 1);
        let precoMaquinaString = 'preco_maquina' + String(maquinaAtual + 1);

        if (maquinas[maquinaAtual].value > 0) {
            // Verifica se o estoque é suficiente
            let estoqueAtual = parseInt(localStorage.getItem(estoqueMaquinaString));
            let quantidadeSelecionada = parseInt(maquinas[maquinaAtual].value);

            if (estoqueAtual >= quantidadeSelecionada) {
                // Atualiza os elementos na tabela
                document.getElementById('tableMaquina').textContent = maquinas[maquinaAtual].getAttribute('maquina');
                document.getElementById('tableQuantidade').textContent = quantidadeSelecionada;
                document.getElementById('tableEstoque').textContent = estoqueAtual;
                document.getElementById('tableValorTotal').textContent = localStorage.getItem(precoMaquinaString) * quantidadeSelecionada;

                // Atualiza o estoque no localStorage
                localStorage.setItem(estoqueMaquinaString, estoqueAtual - quantidadeSelecionada);

                // Define os elementos para zero
                document.getElementById('tableFabricarMaquina').textContent = 0;
                document.getElementById('tableNovoEstoque').textContent = estoqueAtual - quantidadeSelecionada;
            } else {
                // Caso o estoque não seja suficiente
                document.getElementById('tableMaquina').textContent = maquinas[maquinaAtual].getAttribute('maquina');
                document.getElementById('tableQuantidade').textContent = 0;
                document.getElementById('tableEstoque').textContent = estoqueAtual;
                document.getElementById('tableValorTotal').textContent = 0;

                // Define a quantidade a ser fabricada e atualiza o estoque no localStorage
                document.getElementById('tableFabricarMaquina').textContent = quantidadeSelecionada - estoqueAtual;
                document.getElementById('tableNovoEstoque').textContent = 0;
                localStorage.setItem(estoqueMaquinaString, 0);
            }
        }
    }
    document.getElementById('tableRegiao').textContent = localStorage.getItem('uf');
}
