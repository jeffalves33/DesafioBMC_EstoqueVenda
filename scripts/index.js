function setUserType(userType) {
  const estoqueLink = document.getElementById('a_estoque');
  const produtosLink = document.getElementById('a_maquinas');

  if (userType === 'administrador') {
    estoqueLink.classList.remove('disabled');
    produtosLink.classList.add('disabled');
    localStorage.setItem('user', 'administrador');
  } else if (userType === 'usuario') {
    produtosLink.classList.remove('disabled');
    estoqueLink.classList.add('disabled');
    localStorage.setItem('user', 'usuario');
  }
}