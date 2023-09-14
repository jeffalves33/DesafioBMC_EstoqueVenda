document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('estoque_maquina1').value = localStorage.getItem('estoque_maquina1') || 0;
  document.getElementById('estoque_maquina2').value = localStorage.getItem('estoque_maquina2') || 0;
  document.getElementById('estoque_maquina3').value = localStorage.getItem('estoque_maquina3') || 0;

  document.getElementById('preco_maquina1').value = localStorage.getItem('preco_maquina1') || 0;
  document.getElementById('preco_maquina2').value = localStorage.getItem('preco_maquina2') || 0;
  document.getElementById('preco_maquina3').value = localStorage.getItem('preco_maquina3') || 0;
});

function atualizaEstoque() {
  localStorage.setItem('estoque_maquina1', document.getElementById('estoque_maquina1').value);
  localStorage.setItem('estoque_maquina2', document.getElementById('estoque_maquina2').value);
  localStorage.setItem('estoque_maquina3', document.getElementById('estoque_maquina3').value);

  localStorage.setItem('preco_maquina1', document.getElementById('preco_maquina1').value);
  localStorage.setItem('preco_maquina2', document.getElementById('preco_maquina2').value);
  localStorage.setItem('preco_maquina3', document.getElementById('preco_maquina3').value);

  location.reload();
}