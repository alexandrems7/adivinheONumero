// 'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Número Correto!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let pontuacao = Number(document.querySelector('.score').textContent);
let highScore = 0;

const displayMessage = function (mensagem) {
  document.querySelector('.message').textContent = mensagem;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const lost = function () {
  pontuacao = 0;
  document.querySelector('.score').textContent = pontuacao;
  displayMessage('');
  document.querySelector('.oculto').style.display = 'initial';
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //Quando não há nenhum número no input
  if (!guess) {
    displayMessage('⛔ Sem número!');

    //Quando o jogador vence
  } else if (guess === secretNumber) {
    displayMessage('🎉 Número Correto!');
    displayNumber(secretNumber);

    document.querySelector('body').style.backgroundColor = '#3cc47c';
    document.querySelector('.number').style.width = '30rem';

    //Implementa o pontuação máxima
    if (pontuacao > highScore) {
      highScore = pontuacao;
      document.querySelector('.highscore').textContent = highScore;
    }

    //Quando o input é diferente do número secreto
  } else if (guess !== secretNumber) {
    if (pontuacao > 1) {
      displayMessage(
        `${guess > secretNumber ? '📈 Muito alto!' : '📉 Muito baixo!'}`
      );
      pontuacao--;
      document.querySelector('.score').textContent = pontuacao;
    } else {
      lost();
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.oculto').style.display = 'none';
  pontuacao = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Comece a adivinhar...');
  document.querySelector('.score').textContent = pontuacao;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').textContent = '';
  displayNumber('?');
  document.querySelector('.number').style.width = '15rem';
});
