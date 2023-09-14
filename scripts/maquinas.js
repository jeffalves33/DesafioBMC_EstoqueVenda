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
    //pega o nome do cliente
    document.getElementById('tableCliente').textContent = localStorage.getItem('user');
    

    //pega a máquina que deseja ser comprada
    const maquinas = new Array(
        document.getElementById('estoque_maquina1'),
        document.getElementById('estoque_maquina2'),
        document.getElementById('estoque_maquina3')
    );
    if(maquinas[0].value > 0){
        document.getElementById('tableMaquina').textContent = maquinas[0].getAttribute('maquina');
        document.getElementById('tableQuantidade').textContent = maquinas[0].value;
        document.getElementById('tableEstoque').textContent = localStorage.getItem('estoque_maquina'+'1');
        document.getElementById('tableValorTotal').textContent = localStorage.getItem('preco_maquina'+'1') * (maquinas[0].value);

        //agora preciso retornar e atualizar no localStorage o novo valor de estoque
        if(localStorage.getItem('estoque_maquina'+'1') >= maquinas[0].value) {
            document.getElementById('tableFabricarMaquina').textContent = 0;
            document.getElementById('tableNovoEstoque').textContent = localStorage.getItem('estoque_maquina'+'1') - maquinas[0].value;
            localStorage.setItem('estoque_maquina'+'1', localStorage.getItem('estoque_maquina'+'1') - maquinas[0].value);
        } else {
            document.getElementById('tableFabricarMaquina').textContent = Math.abs(localStorage.getItem('estoque_maquina'+'1') - maquinas[0].value);
            document.getElementById('tableNovoEstoque').textContent = 0;
            localStorage.setItem('estoque_maquina'+'1', 0);
        }
    }

    document.getElementById('tableRegiao').textContent = localStorage.getItem('uf');
}

/*
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
*/