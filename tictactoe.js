
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

}

function displayBoard() {
    // Maybe here receive from Gameboard and display the moves?
}