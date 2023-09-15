function calcularPorcentagem(valorParcial, valorTotal) {
  if (valorTotal === 0) {
      return 0;
  }
  return (valorParcial / valorTotal) * 100;
}

document.addEventListener('DOMContentLoaded', function () {
  const porcentages = ['porcentagem1', 'porcentagem2', 'porcentagem3'];
  const progresso = ['progress1', 'progress2', 'progress3'];
  const valorAtualEstoque = ['valorAtualEstoque1', 'valorAtualEstoque2', 'valorAtualEstoque3']
  const valorInicialEstoque = ['valorInicialEstoque1', 'valorInicialEstoque2', 'valorInicialEstoque3'];

  for(let atual = 0; atual < porcentages.length; atual++) {
    const valorAtual = localStorage.getItem(valorAtualEstoque[atual]);
    const valorInicial = localStorage.getItem(valorInicialEstoque[atual]);
    const valorPorcentagem = calcularPorcentagem(valorAtual, valorInicial);
    const novoStyle = "width: " + String(valorPorcentagem) + "%";

    document.getElementById(porcentages[atual]).textContent = valorPorcentagem;
    document.getElementById(progresso[atual]).style.width = valorPorcentagem + "%"
  }
});

