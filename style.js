document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript carregado");

    const avanca = document.querySelectorAll('.btn-proximo');
    console.log("Botões encontrados:", avanca.length);

    avanca.forEach(button => {
        button.addEventListener('click', function() {
            console.log("Botão clicado:", this.textContent);

            const atual = document.querySelector('.ativo');
            const proximoPassoId = 'passo-' + this.getAttribute('data-proximo');
            const proximoPasso = document.getElementById(proximoPassoId);

            if (atual && proximoPasso) {
                atual.classList.remove('ativo');
                proximoPasso.classList.add('ativo');
            } else {
                console.error(`Elemento com id ${proximoPassoId} não encontrado.`);
            }
        });
    });
});
