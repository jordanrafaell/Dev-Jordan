const $html = document.querySelector('html');
const btnDark = document.querySelector('.btn_dark');
const btn_light_mode = document.querySelector('.btn_light_mode');
const btn_dark_mode = document.querySelector('.btn_dark_mode');
const principal = document.querySelector('main');
const rodape = document.querySelector('footer');

// Adiciona a classe active ao botão de modo light
btnDark.addEventListener('click', () => {
  $html.classList.toggle('dark_mode');
  // Verifica se a classe dark_mode está presente no HTML
  if ($html.classList.contains('dark_mode')) {
    // Se estiver presente, remove a classe active do botão de modo light
    btn_light_mode.classList.remove('active');
    // Adiciona a classe active ao botão de modo dark
    btn_dark_mode.classList.add('active');
  } else {
    // Se não estiver presente, remove a classe active do botão de modo dark
    btn_dark_mode.classList.remove('active');
    // Adiciona a classe active ao botão de modo light
    btn_light_mode.classList.add('active');
  }
});

// Botão menu
const btnMenu = document.querySelector('#btn_hamburguer');
const menuNav = document.querySelector('#menu_nav');

btnMenu.addEventListener('click', () => {
  menuNav.classList.toggle('active_menu');
});

// sumir conteudo
btnMenu.addEventListener('click', () => {
  if (principal.style.display === 'none') {
    principal.style.display = 'block';
    rodape.style.display = 'block';
  } else {
    principal.style.display = 'none';
    rodape.style.display = 'none';
  }
});


// mudança de imagem light e dark
// Função para alternar entre os modos light e dark
function alternarModo() {
  const imagensLight = document.querySelectorAll('.imagem-light');
  const imagensDark = document.querySelectorAll('.imagem-dark');

  if (document.documentElement.classList.contains('dark_mode')) {
    imagensLight.forEach(img => img.style.display = 'block');
    imagensDark.forEach(img => img.style.display = 'none');
  } else {
    imagensLight.forEach(img => img.style.display = 'none');
    imagensDark.forEach(img => img.style.display = 'block');
  }
}

// Event listener para o botão de alternância de modo
btnDark.addEventListener('click', alternarModo);

// Chamada inicial para exibir apenas as imagens correspondentes ao modo de tema padrão
alternarModo();

// Desfoque quando a rolagem da tela e feita














