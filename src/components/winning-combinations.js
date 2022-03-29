const winning = [
    //Horizontal
    ['.', '.', '.', '', '', '', '', '', ''],
    ['', '', '', '.', '.', '.', '', '', ''],
    ['', '', '', '', '', '', '.', '.', '.'],

    //Diagonal
    ['.', '', '', '', '.', '', '', '', '.'],
    ['', '', '.', '', '.', '', '.', '', ''],

    //Vertical
    ['.', '', '', '.', '', '', '.', '', ''],
    ['', '.', '', '', '.', '', '', '.', ''],
    ['', '', '.', '', '', '.', '', '', '.']
]
// const winningO = [
//     //Horizontal
//     ['O', 'O', 'O', '', '', '', '', '', ''],
//     ['', '', '', 'O', 'O', 'O', '', '', ''],
//     ['', '', '', '', '', '', 'O', 'O', 'O'],

//     //Diagonal
//     ['O', '', '', '', 'O', '', '', '', 'O'],
//     ['', '', 'O', '', 'O', '', 'O', '', ''],

//     //Vertical
//     ['O', '', '', 'O', '', '', 'O', '', ''],
//     ['', 'O', '', '', 'O', '', '', 'O', ''],
//     ['', '', 'O', '', '', 'O', '', '', 'O']
// ]

export default {winning}
//loop through every possible winning combination
//for each position in the winning combination, is this position a blank string (carry on), if it is not a blank string - check board state at that position.
