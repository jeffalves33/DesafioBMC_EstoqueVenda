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
    let maquinaDePedido = 0;
    const maquinas = new Array(
        document.getElementById('estoque_maquina1').value,
        document.getElementById('estoque_maquina2').value,
        document.getElementById('estoque_maquina3').value
    );
    document.getElementById('tableEstoque').textContent = localStorage.getItem('estoque_maquina' + document.getElementById('estoque_maquina1').getAttribute('maquinaId'));

    if(maquinas[0] > 0){
        maquinaDePedido = document.getElementById('estoque_maquina1');

      //tratar estoque
        qtdPedido = maquinaDePedido.value;
        qtdEstoqueAtual = localStorage.getItem('estoque_maquina1');
        qtdFabricar = 0;
        if(qtdEstoqueAtual >= qtdPedido) {
            localStorage.setItem('estoque_maquina1', qtdEstoqueAtual-qtdPedido);
            qtdFabricar = 0;
        }
        if(qtdEstoqueAtual  < qtdPedido) {
            localStorage.setItem('estoque_maquina1', 0);
            qtdFabricar = Math.abs(qtdEstoqueAtual-qtdPedido);
        }

    }
    if(maquinas[1] > 0){
        maquinaDePedido = document.getElementById('estoque_maquina2');
        localStorage.setItem('estoque_maquina2', localStorage.getItem('estoque_maquina2') - maquinaDePedido.value);
    }
    if(maquinas[2] > 0){
        maquinaDePedido = document.getElementById('estoque_maquina3');
        localStorage.setItem('estoque_maquina3', localStorage.getItem('estoque_maquina3') - maquinaDePedido.value);
    }

    document.getElementById('tableCliente').textContent = localStorage.getItem('user');
    document.getElementById('tableMaquina').textContent = maquinaDePedido.getAttribute('maquina');
    document.getElementById('tableQuantidade').textContent = qtdPedido;
    document.getElementById('tableRegiao').textContent = localStorage.getItem('uf');
    document.getElementById('tableNovoEstoque').textContent = localStorage.getItem('estoque_maquina' + maquinaDePedido.getAttribute('maquinaId'));
    document.getElementById('tableFabricarMaquina').textContent = qtdFabricar;
    document.getElementById('tableValorTotal').textContent = localStorage.getItem(('preco_maquina' + maquinaDePedido.getAttribute('maquinaId'))) * (maquinaDePedido.value);
}