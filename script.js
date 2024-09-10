document.getElementById('questionario-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const preferencia = document.getElementById('preferencia').value;
    const frequencia = document.getElementById('frequencia').value;
    const sabor = document.getElementById('sabor').value;

    alert(`Obrigado, ${nome}! Recebemos suas respostas sobre Cini de Graça.\n\n` +
          `Seu Cini de Graça favorito: ${preferencia}\n` +
          `Frequência de consumo: ${frequencia}\n` +
          `Sabor preferido: ${sabor}\n` +
          `Você receberá um e-mail em ${email} com mais informações.`);

    // Limpar o formulário após o envio
    document.getElementById('questionario-form').reset();
});
