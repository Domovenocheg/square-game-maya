//rgb(255,255,255)
//change color of squares
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

const squares = document.querySelectorAll(".square");
const container = document.querySelector(".container");

squares.forEach((square) =>
  square.addEventListener("click", function (e) {
    this.style.backgroundColor = randomColor();
  })
);

const mess = document.querySelector(".mess");
//change places of squares
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

mess.addEventListener("click", shuffleSquares);

//сменить цвета всех квадратов
const messColor = document.querySelector(".mess-color");
messColor.addEventListener("click", function () {
  squares.forEach((square) => {
    square.style.backgroundColor = randomColor();
  });
});

//change size of squares

const size = document.querySelector(".size");

const changeShape = function () {
  squares.forEach((square) => {
    if (square.style.borderRadius === "0px") {
      square.classList.remove("star-polygon");
      square.style.borderRadius = "50px";
      square.classList.remove("heart-polygon");
      square.classList.remove("diamond-poligon");
    } else {
      square.style.borderRadius = "0px";
      square.classList.remove("star-polygon");
      square.classList.remove("heart-polygon");
      square.classList.remove("diamond-poligon");
    }
  });
};

size.addEventListener("click", changeShape);
//change to stars

const star = document.querySelector(".star");

const changeStar = function () {
  squares.forEach((square) => {
    square.style.borderRadius = "0px";
    square.classList.remove("heart-polygon");
    square.classList.toggle("star-polygon");
    square.classList.remove("diamond-poligon");
  });
};

star.addEventListener("click", changeStar);

//change to hearts
const heart = document.querySelector(".heart");

const changeheart = function () {
  squares.forEach((square) => {
    square.style.borderRadius = "0px";
    square.classList.remove("star-polygon");
    square.classList.remove("diamond-poligon");
    square.classList.toggle("heart-polygon");
  });
};

heart.addEventListener("click", changeheart);

//change to diamond
const diamond = document.querySelector(".diamond");

const changeDiamond = function () {
  squares.forEach((square) => {
    square.style.borderRadius = "0px";
    square.classList.remove("star-polygon");
    square.classList.remove("heart-polygon");
    square.classList.toggle("diamond-poligon");
  });
};

diamond.addEventListener("click", changeDiamond);
