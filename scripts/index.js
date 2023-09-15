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

document.addEventListener('DOMContentLoaded', function () {
  const tags = [
    document.getElementById('a_home'),
    document.getElementById('a_maquinas'),
    document.getElementById('a_estoque')
  ];

  for(let i = 0; i < tags.length; i++) {
    if(tags[i].getAttribute('colorActive')) {
      tags[i].style.backgroundColor = '#0055A2';
    }
  }
});