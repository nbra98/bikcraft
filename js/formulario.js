const formulario = document.querySelector('form');
console.log('nbra98@hotmail.com');

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML = '<p class="font-2-l" style="grid-column: 1/-1; text-align: center; padding: 1rem; border-radius: 4px; background: #F7F7F7;"><span style="color: #317A00;"><strong>Enviado com sucesso!</strong></span> Retornaremos em breve!</p>';
  } else {
    formulario.innerHTML = '<p class="font-2-l" style="grid-column: 1/-1; text-align: center; padding: 1rem; border-radius: 4px; background: #F7F7F7;"><span style="color: #E00000;"><strong>Erro no envio!</strong></span> Entre em contato conosco através do e-mail: contato@bikcraft.com</p>';
  }
}

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector('form button');
  botao.disabled = true;
  botao.innerText = 'Enviando...';

  const data = new FormData(formulario);
  // console.log(data.get('nome')); - Puxa um dado específico dentre todos os outros no form.
  fetch('./enviar.php', {
    method: 'POST',
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener('submit', enviarFormulario);