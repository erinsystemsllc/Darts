let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

const gameBoard = document.getElementById('game-board');
const gameStatus = document.getElementById('game-status');
const startButton = document.getElementById('start-new-game');
const cells = document.querySelectorAll('.cell');

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (board[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    board[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    clickedCell.classList.add(currentPlayer.toLowerCase());

    checkResult();
}

function checkResult() {
    let roundWon = false;
    let winningCombination = [];

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            winningCombination = [a, b, c];
            break;
        }
    }

    if (roundWon) {
        gameStatus.textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
        gameBoard.classList.add('game-over');
        
        winningCombination.forEach(index => {
            cells[index].classList.add('winning');
        });
        return;
    }

    if (!board.includes('')) {
        gameStatus.textContent = "It's a draw!";
        gameActive = false;
        gameBoard.classList.add('game-over');
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    gameStatus.textContent = `Player ${currentPlayer}'s turn`;
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    gameStatus.textContent = "Player X's turn";
    gameBoard.classList.remove('game-over');
    
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('x', 'o', 'winning');
    });
}

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

startButton.addEventListener('click', resetGame);

gameStatus.textContent = "Player X's turn";