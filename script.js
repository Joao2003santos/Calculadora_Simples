 const visor = document.getElementById('visor');

        function adicionarCaractere(caractere) {
            if (visor.textContent === '0' || visor.textContent === 'Erro') {
                visor.textContent = caractere;
            } else {
                visor.textContent += caractere;
            }
        }

        function limpar() {
            visor.textContent = '0';
        }

        function calcular() {
            try {
                visor.textContent = eval(visor.textContent);
            } catch (error) {
                visor.textContent = 'Erro';
            }
        }