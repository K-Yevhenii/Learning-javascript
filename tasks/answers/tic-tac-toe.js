const board = [];
const BOARD_SIZE = 3
for (let x = 0; x < BOARD_SIZE; x++) {
    board[x] = [];
    for (let y = 0; y < BOARD_SIZE; y++) {
        board[x][y] = null;

    }
}
function fillCell(x, y, value) {
    if (!checkCoordinate(x) || !checkCoordinate(y)) {
        throw new Error('Invalid coordinate')
    }
    if (!board[x][y]) {
        throw new Error('Cell has already filled')
    }
    board[x][y] = value;
}
fillCell(5, 4, 'x')
console.log(board);

function checkCoordinate(coordinate) {
    return (typeof coordinate === 'number' && coordinate >= 0 && coordinate <= 2)
}