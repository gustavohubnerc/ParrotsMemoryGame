let numCards = Number(prompt("Escolha um número de cartas par entre 4 e 14 para jogar"));
let cards = document.querySelector(".cards");
let flipped = false;
let contador = 1;

//array inicial dos cards
let cardsArray = [
  '1.gif', '2.gif', '3.gif', '4.gif', '5.gif', '6.gif', '7.gif'
]

//criação do array que entra no jogo
let arrayFinal = cardsArray.slice(0, numCards/2); //pega o número de cards inserido pelo usuário e divide por 2
arrayFinal = arrayFinal.concat(arrayFinal);  //concatena a arrayFinal com ela mesma para obter os pares

//embaralha cards
arrayFinal.sort(comparador);

function comparador() {
  return Math.random() - 0.5;
}

//repetição do prompt
if (numCards % 2 !== 0 || numCards === null || numCards < 4 || numCards > 14) {
  Number(prompt("Escolha um número de cartas par entre 4 e 14 para jogar"));
} else {
  renderizaCards(numCards);
}

//renderização dos cards
function renderizaCards(num) {
  for (let i = 0; i < num; i++) {
      cards.innerHTML = cards.innerHTML + `
      <div class="card" onclick="virarCarta(this)">
        <div class="gameCard front-face face">
          <img class="gameCardImg" src="./assets/front.png" alt="card">
        </div>
        <div class="gameCard back-face face">
          <img class="gameCardGif" src="./assets/${arrayFinal[i]}">
        </div>
      </div>
      `;
  } 
}   


