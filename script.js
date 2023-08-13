function populateBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "white";
    //square.style.border = "1px solid black";
    board.insertAdjacentElement("beforeend", square);
    square.addEventListener("mouseover", colorSquare);
  }
}

populateBoard(16);

function changeSize(input) {
  if(input >= 2 && input <= 100) {
    populateBoard(input);
  }
}

function colorSquare () {
    this.style.backgroundColor = "black";
}