// Defina a biblioteca jsPDF
window.jsPDF = window.jspdf.jsPDF;

//função que seta os valores salvos quando a página é carregada
document.addEventListener('DOMContentLoaded', function() {
    const estoqueIds = ['estoque_maquina1', 'estoque_maquina2', 'estoque_maquina3'];
    const precoIds = ['preco_maquina1', 'preco_maquina2', 'preco_maquina3'];

    for (let i = 0; i < estoqueIds.length; i++) {
        const estoqueElement = document.getElementById(estoqueIds[i]);
        const precoElement = document.getElementById(precoIds[i]);

        if (estoqueElement) {
            estoqueElement.value = 0;
        }

        if (precoElement) {
            precoElement.textContent = localStorage.getItem(precoIds[i]) || 0;
        }
    }
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

                // Atualiza o estoque no localStorage
                localStorage.setItem(estoqueMaquinaString, estoqueAtual - quantidadeSelecionada);

                // Define os elementos para zero
                document.getElementById('tableFabricarMaquina').textContent = 0;
                document.getElementById('tableNovoEstoque').textContent = estoqueAtual - quantidadeSelecionada;
            } else {
                // Caso o estoque não seja suficiente
                document.getElementById('tableMaquina').textContent = maquinas[maquinaAtual].getAttribute('maquina');
                document.getElementById('tableQuantidade').textContent = quantidadeSelecionada;
                document.getElementById('tableEstoque').textContent = estoqueAtual;

                // Define a quantidade a ser fabricada e atualiza o estoque no localStorage
                document.getElementById('tableFabricarMaquina').textContent = quantidadeSelecionada - estoqueAtual;
                document.getElementById('tableNovoEstoque').textContent = 0;
                localStorage.setItem(estoqueMaquinaString, 0);
            }
            document.getElementById('tableValorTotal').textContent = localStorage.getItem(precoMaquinaString) * quantidadeSelecionada;
        }
    }
    document.getElementById('tableRegiao').textContent = localStorage.getItem('uf');
}


function gerarPDF() {
    const documentPDF = new jsPDF();
    const elementToConvert = document.getElementById('tableExtrato');

    // Converte o elemento em uma imagem ou tela de canvas
    html2canvas(elementToConvert).then(function(canvas) {
        // Converte a tela de canvas em uma imagem em formato base64
        const imgData = canvas.toDataURL('image/png');

        // Adiciona a imagem ao PDF
        documentPDF.addImage(imgData, 'PNG', 10, 10, 190, 0);

        // Salva o PDF
        documentPDF.save('extrato.pdf');
    });
}