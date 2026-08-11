const botao = document.getElementById('button');
const inputs = document.querySelectorAll('input, textarea');
const avisos = document.querySelectorAll('.aviso');

botao.addEventListener('click', function(event) {
    event.preventDefault();

    inputs.forEach((input, i) => {
        if (input.value.trim() === '') {
            avisos[i].style.display = 'block';
            input.classList.add('borda-vermelha');
            input.classList.remove('borda-verde');
        } else {
            avisos[i].style.display = 'none';
            input.classList.remove('borda-vermelha');
            input.classList.add('borda-verde');
        }
    });
});