let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function restartGame() {
  currentPlayer = 'X';
  document.getElementById("whoplay").textContent = `Player ${currentPlayer} turn!`;
  board = ['', '', '', '', '', '', '', '', ''];
  document.getElementById('winner').textContent = '';
  const cells = document.getElementsByClassName('cell');
  for (let cell of cells) {
      cell.classList.remove('X', 'O');
      cell.innerHTML = '';
  }}
document.getElementById("whoplay").textContent = `Player ${currentPlayer} turn!`;

function makeMove(cellIndex) {
  if (board[cellIndex] === "" && !checkWinner()) {
    board[cellIndex] = currentPlayer;
    document
      .getElementsByClassName("cell")
      [cellIndex].classList.add(currentPlayer);
    document.getElementsByClassName("cell")[cellIndex].innerHTML =
      currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    document.getElementById("whoplay").textContent = `Player ${currentPlayer} turn!`;
    checkWinner();
  }
}

function checkWinner() {
  for (let combo of winningCombinations) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      document.getElementById(
        "winner"
      ).textContent = `Player ${board[a]} wins! ✌️ `;
      document.getElementById("whoplay").textContent = "";
      return true;
    }
  }
  if (board.every((cell) => cell !== "")) {
    document.getElementById("winner").textContent = "It's a tie! 👏";
    document.getElementById("whoplay").textContent = "";
    return true;
  }
  return false;
}

