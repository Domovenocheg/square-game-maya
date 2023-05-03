//rgb(255,255,255)

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

const squares = document.querySelectorAll(".square");
const container = document.querySelector('.container')

squares.forEach((square) =>
  square.addEventListener("click", function (e) {
    this.style.backgroundColor = randomColor();
  })
);

const mess = document.querySelector(".mess");
//chatGPT
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function shuffleSquares() {
  const squaresArray = Array.from(squares);
  const shuffledSquaresArray = shuffleArray(squaresArray);
  shuffledSquaresArray.forEach((square) => container.appendChild(square));
}

mess.addEventListener('click', shuffleSquares)