// Ativar links do menu superior

const links = document.querySelectorAll('.header-menu a');

function linkAtivo(link) {
  const url = location.href;
  const href = link.href;
  

  if (url.includes(href)) {
    link.classList.add('ativo');
  }

}

links.forEach(linkAtivo);

//---------------------------------//

// Ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);

  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

//---------------------------------//

// Perguntas frequentes

const perguntas = document.querySelectorAll('.perguntas dl button');

function ativarResposta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controls);

  resposta.classList.toggle('ativo');
  const ativo = resposta.classList.contains('ativo');
  pergunta.setAttribute('aria-expanded', ativo);
  console.log(ativo);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarResposta);
}

perguntas.forEach(eventosPerguntas);

//---------------------------------//

// Galeria de bicicletas

const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImagem(troca) {
  const img = troca.currentTarget;
  
  const media = matchMedia('(min-width: 1000px)').matches;
  
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener('click', trocarImagem)
}

galeria.forEach(eventosGaleria);

//---------------------------------//

// Animação - Plugin Origamid

if (window.SimpleAnime) {
  new SimpleAnime();
}

//---------------------------------//

// Copiar - Plugin Externo

// if (window.ClipBoardJS) {
//   new ClipboardJS('.introducao-conteudo h1')
// }

//---------------------------------//

// Janela de Confirmação - Envio de E-mails **********

// const alerta = document.querySelector('.teste-botao');

// function alertaEnvio() {
//   window.alert('E-mail enviado com sucesso! Em breve retornaremos contato.');
// }

// alerta.addEventListener('click', alertaEnvio);

//---------------------------------//