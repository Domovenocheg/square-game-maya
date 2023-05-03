//rgb(255,255,255)

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

const square = document.querySelectorAll(".square");

square.forEach((box) =>
  box.addEventListener("click", function (e) {
    this.style.backgroundColor = randomColor();
  })
);
