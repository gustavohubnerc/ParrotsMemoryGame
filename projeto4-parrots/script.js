let numCards = Number(prompt("Escolha um número de cartas par entre 4 e 14 para jogar"));
let cards = document.querySelector(".cards");
let flipped = false;
let contador = 1;
let contadorJogadas = 0;

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
while (numCards % 2 !== 0 || numCards === null || numCards < 4 || numCards > 14) {
  numCards = Number(prompt("Escolha um número de cartas par entre 4 e 14 para jogar"));
}

//renderização dos cards
for (let i = 0; i < numCards; i++) {
    cards.innerHTML = cards.innerHTML + `
    <div class="card"  data-test="card" onclick="virarCarta(this)">
      <div class="gameCard front-face face">
        <img class="gameCardImg" data-test="face-down-image" src="./assets/front.png" alt="card">
      </div>
      <div class="gameCard back-face face">
        <img class="gameCardGif"  data-test="face-up-image" src="./assets/${arrayFinal[i]}">
      </div>
    </div>
    `;
} 
  

function virarCarta(carta) {
  if(flipped === true){
    return;
}

  contadorJogadas++;

  const turn1 = carta.querySelector(".front-face");
  turn1.classList.add("selected-front");

  const turn2 = carta.querySelector(".back-face");
  turn2.classList.add("selected-back");

  if(contador === 1) {   
    tentativa1 = carta.querySelector(".back-face");
    tentativa1f = carta.querySelector(".front-face");

    contador++;
  } else if (contador === 2) {
    tentativa2 = carta.querySelector(".back-face");
    tentativa2f = carta.querySelector(".front-face");

    if(tentativa1.innerHTML === tentativa2.innerHTML){
      flipped = true;

      tentativa1.classList.add("selected-back");
      tentativa1f.classList.add("selected-front");
      
      tentativa2.classList.add("selected-back");
      tentativa2f.classList.add("selected-front");
    } else {
      flipped = true;

      setTimeout(desviraCard, 1000);
    }
    setTimeout(resetJogada, 1000);
  }
  setTimeout(fimDeJogo, 1000);
}


function desviraCard() {
  tentativa1.classList.remove("selected-back");
  tentativa1f.classList.remove("selected-front");

  tentativa2.classList.remove("selected-back");
  tentativa2f.classList.remove("selected-front");

  flipped = false;
}


function resetJogada() {
  contador = 1;

  tentativa1 = 0;
  tentativa2 = 0;
  tentativa1f = 0;
  tentativa2f = 0;

  flipped = false;
}

function fimDeJogo() {
  const cardsVirados = document.querySelectorAll(".selected-back");
  if (cardsVirados.length === numCards) {
    alert(`Você ganhou em ${contadorJogadas} jogadas!`)
  }
}