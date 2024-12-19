const board = [];
for (let x = 0; x < 8; x++) {
    board[x] = [];
    for (let y = 0; y < 8; y++) {
        board[x][y] = y + 1;


    }

}
// console.log(board);


const playedBoard = [
    [
        1, 2, 3, 4,
        5, 6, 7, 8
    ],
    [
        1, 2, 3, 4,
        5, 6, 7, 8
    ],
    [
        1, 2, 3, 4,
        5, 6, 7, 8
    ],
    [
        1, 2, 3, 4,
        5, 6, 7, 8
    ],
    [
        1, 2, 3, 4,
        5, "x", 7, 8
    ],
    [
        1, 2, 3, 4,
        5, 6, 7, 8
    ],
    [
        1, 2, 3, 4,
        5, 6, 7, 8
    ],
    [
        1, 2, 3, 4,
        5, 6, 7, 8
    ]
]
for (let x = 0; x < playedBoard.length; x++) {
    for (let y = 0; y < playedBoard[x].length; y++) {
        if (playedBoard[x][y] === 'x')
            console.log(playedBoard[x][y]);

    }
}
