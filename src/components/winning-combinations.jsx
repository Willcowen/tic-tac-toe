const winningX = [
    //Horizontal
    ['X', 'X', 'X', '', '', '', '', '', ''],
    ['', '', '', 'X', 'X', 'X', '', '', ''],
    ['', '', '', '', '', '', 'X', 'X', 'X'],

    //Diagonal
    ['X', '', '', '', 'X', '', '', '', 'X'],
    ['', '', 'X', '', 'X', '', 'X', '', ''],

    //Vertical
    ['X', '', '', 'X', '', '', 'X', '', ''],
    ['', 'X', '', '', 'X', '', '', 'X', ''],
    ['', '', 'X', '', '', 'X', '', '', 'X']
]
const winningO = [
    //Horizontal
    ['O', 'O', 'O', '', '', '', '', '', ''],
    ['', '', '', 'O', 'O', 'O', '', '', ''],
    ['', '', '', '', '', '', 'O', 'O', 'O'],

    //Diagonal
    ['O', '', '', '', 'O', '', '', '', 'O'],
    ['', '', 'O', '', 'O', '', 'O', '', ''],

    //Vertical
    ['O', '', '', 'O', '', '', 'O', '', ''],
    ['', 'O', '', '', 'O', '', '', 'O', ''],
    ['', '', 'O', '', '', 'O', '', '', 'O']
]

export default {winningX, winningO}
//loop through every possible winning combination
//for each position in the winning combination, is this position a blank string (carry on), if it is not a blank string - check board state at that position.
