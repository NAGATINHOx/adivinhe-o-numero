const alternarTemaBtn = document.querySelector("#alternarTema")

var secretNumber = Math.floor(Math.random() * 100) + 1;

// Função para adivinhar o número
function guess() {
    var guessInput = document.getElementById("guessInput");
    var guess = parseInt(guessInput.value);
    var message = document.getElementById("message");

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Digite um número válido entre 1 e 100.";
    } else if (guess < secretNumber) {
        message.textContent = "Muito baixo! Tente um número maior.";
    } else if (guess > secretNumber) {
        message.textContent = "Muito alto! Tente um número menor.";
    } else {
        message.textContent = "Parabéns! Você acertou!";
        guessInput.disabled = true;
    }

    guessInput.value = "";
    guessInput.focus();
}


function alternarTema() {
    const body = document.body

    body.classList.toggle("claro");
    body.classList.toggle("escuro");
}

alternarTemaBtn.addEventListener("click", alternarTema)
