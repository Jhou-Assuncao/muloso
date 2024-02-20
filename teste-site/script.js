const copyText = document.getElementById('copyText');
const copyButton = document.getElementById('copyButton');

copyButton.addEventListener('click', () => {
    // Seleciona o texto
    const range = document.createRange();
    range.selectNode(copyText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    // Copia o texto selecionado
    document.execCommand('copy');

    // Limpa a seleção
    window.getSelection().removeAllRanges();

    // Mensagem de confirmação
    //alert('Cupom salvo: ' + copyText.textContent);
});
