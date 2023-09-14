function setUserType(userType) {
  const estoqueLink = document.getElementById('a_estoque');
  const produtosLink = document.getElementById('a_maquinas');

  if (userType === 'administrador') {
    // Habilita o link do estoque e desabilita o link de produtos
    estoqueLink.classList.remove('disabled');
    produtosLink.classList.add('disabled');
    localStorage.setItem('user', 'administrador');
  } else if (userType === 'usuario') {
    // Habilita o link de produtos e desabilita o link do estoque
    produtosLink.classList.remove('disabled');
    estoqueLink.classList.add('disabled');
    localStorage.setItem('user', 'usuario');
  }
}