document.addEventListener('DOMContentLoaded', function () {
  const estoqueIds = ['estoque_maquina1', 'estoque_maquina2', 'estoque_maquina3'];
  const precoIds = ['preco_maquina1', 'preco_maquina2', 'preco_maquina3'];

  for (let i = 0; i < estoqueIds.length; i++) {
    const estoqueElement = document.getElementById(estoqueIds[i]);
    const precoElement = document.getElementById(precoIds[i]);

    if (estoqueElement) {
      estoqueElement.value = localStorage.getItem(estoqueIds[i]) || 0;
    }

    if (precoElement) {
      precoElement.value = localStorage.getItem(precoIds[i]) || 0;
    }
  }
});

function atualizaEstoque() {
  const estoqueIds = ['estoque_maquina1', 'estoque_maquina2', 'estoque_maquina3'];
  const precoIds = ['preco_maquina1', 'preco_maquina2', 'preco_maquina3'];

  for (let i = 0; i < estoqueIds.length; i++) {
    const estoqueElement = document.getElementById(estoqueIds[i]);
    const precoElement = document.getElementById(precoIds[i]);

    if (estoqueElement) {
      localStorage.setItem(estoqueIds[i], estoqueElement.value);
    }

    if (precoElement) {
      localStorage.setItem(precoIds[i], precoElement.value);
    }
  }

  location.reload();
}