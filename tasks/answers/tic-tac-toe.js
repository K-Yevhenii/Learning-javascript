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
    if (board[x][y]) {
        throw new Error('Cell has already filled')
    }
    board[x][y] = value;
}

function checkCoordinate(coordinate) {
    return (typeof coordinate === 'number'
        && Number.isInteger(coordinate)
        && coordinate >= 0 && coordinate < BOARD_SIZE)
}

function checkIsBoardFilled() {
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            if (!board[x][y])
                return false;
        }

    }
    return true;
}


function checkWinner(board) {
    const isBoardFilled = checkIsBoardFilled()
    if (!isBoardFilled) {
        console.log('Board is not filled');

    }
    for (let x = 0; x < board.length; x++) {
        const row = board[x];
        if (row[0] === row[1] && row[1] === row[2])
            return row[0];
    }
    for (let y = 0; y < BOARD_SIZE; y++) {
        if (board[0][y] === board[1][y] && board[1][y] === board[2][y]) {
            return board[0][y]
        }
    }
    if (board[0][0] === board[1][1] && board[2][2] === board[1][1]) {
        return board[0][0]
    }
    if (board[0][2] === board[1][1] && board[2][2] === board[2][0]) {
        return board[0][2]
    }
    return null;
}
fillCell(1, 1, 'x')
fillCell(1, 2, '0')
fillCell(0, 1, 'x')
fillCell(2, 1, '0')
fillCell(0, 2, 'x')
fillCell(2, 0, '0')
fillCell(0, 0, 'x')

console.log(board, checkWinner(board));
