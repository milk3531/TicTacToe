

// Gameboard will be a module because we only need one gameboard
const Gameboard = (() => {
    const gameboard =
            ['X', 'O', 'O',
            'X', 'X', 'O',
            'O', 'X', 'X']; // This would be an empty board
    // Render this onto the website with html

    return { gameboard }; // Return the Gameboard's gameboard for DOM manipulation
})();


// Player is a factory function because we will have 2 players, maybe even more
const Player = () => {

}

// Not sure what this is for yet, but I assume we'll just need one controller for the one board and 2 players
const displayController = () => {
    // Upon click, launch event listener for changing textContent of this.board

}
// Build the functions that allow players to click a div and mark as either 'X' or 'O'

function displayBoard() {
    // Render the tic tac toe board
    const board = document.getElementsByClassName('grid-container')[0];
    for (let i = 0; i < 3; i++) {
        // Create a horizontal row of tic tac toe board
        const box_row = document.createElement('div');
        board.appendChild(box_row);
        box_row.textContent = 'row';
        box_row.style.border = 'thin solid black';
        box_row.style.textAlign = 'center'
        box_row.style.lineHeight = '185px';
        box_row.addEventListener('click',function(){
            box_row.textContent = 'x';
        })
        
    }
    for (let i = 0; i < 6; i++) {
        // Create a column of tic tac toe board
        const box_column = document.createElement('div');
        board.appendChild(box_column);
        box_column.textContent = 'column';
        box_column.style.border = 'thin solid black';
        box_column.style.textAlign = 'center';
        box_column.style.lineHeight = '185px';
        box_column.addEventListener('click',function(){
            box_column.textContent = 'o'
        })
        // So far div changes text arbitrarily.Logic needed for deciding how to swap between
        // x and o
        
    }
}



displayBoard();