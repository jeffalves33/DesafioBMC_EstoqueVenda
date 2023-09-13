const maquinas =
[
  {
      nome: "Escavadeira R60W-9",
      motor: "Motor Yanmar 4TNV94L- PHYBY",
      preco: 499.00,
      estoque: 10
  },
  {
      nome: "Escavadeira R495L VS",
      motor: "Motor Cummins QSM11",
      preco: 499.00,
      estoque: 2
  },
  {
      nome: "Escavadeira R180LC-9",
      motor: "Motor CUMMINS QSB 4.5 Tier III",
      preco: 499.00,
      estoque: 1
  }
];

function atualizaEstoque() {
  localStorage.setItem('preco_maquina1', document.getElementById('preco_maquina1').value);
  localStorage.setItem('preco_maquina2', document.getElementById('preco_maquina2').value);
  localStorage.setItem('preco_maquina3', document.getElementById('preco_maquina3').value);

  localStorage.setItem('estoque_maquina1', document.getElementById('estoque_maquina1').value);
  localStorage.setItem('estoque_maquina2', document.getElementById('estoque_maquina2').value);
  localStorage.setItem('estoque_maquina3', document.getElementById('estoque_maquina3').value);
}