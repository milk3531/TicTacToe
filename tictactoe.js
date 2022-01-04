
curcount = 1;

function clickbutton(id) {
    if (document.getElementById(id).textContent === ' ') {
        if (curcount === 1) {
            document.getElementById(id).textContent = 'x';
            curcount++;
        } else if (curcount === 2) {
            document.getElementById(id).textContent = 'o';
            curcount--;
        }
    }
    getWinnerX();
   
}

function getGameStatus() {

}

function getWinnerX() {
    if (document.getElementsByClassName('wrapper')[0].children[0, 1, 2].textContent === 'x' ||
        document.getElementsByClassName('wrapper')[0].children[3, 4, 5].textContent === 'x' ||
        document.getElementsByClassName('wrapper')[0].children[6, 7, 8].textContent === 'x' ||
        document.getElementsByClassName('wrapper')[0].children[0, 4, 8].textContent === 'x' ||
        document.getElementsByClassName('wrapper')[0].children[2, 4, 6].textContent === 'x' ||
        document.getElementsByClassName('wrapper')[0].children[0, 3, 6].textContent === 'x' ||
        document.getElementsByClassName('wrapper')[0].children[1, 4, 7].textContent === 'x' ||
        document.getElementsByClassName('wrapper')[0].children[2, 5, 8].textContent === 'x') {
            console.log('X won');
    }
}

function getWinnerO() {
    if (document.getElementsByClassName('wrapper')[0].children[0, 1, 2].textContent === 'o' ||
        document.getElementsByClassName('wrapper')[0].children[3, 4, 5].textContent === 'o' ||
        document.getElementsByClassName('wrapper')[0].children[6, 7, 8].textContent === 'o' ||
        document.getElementsByClassName('wrapper')[0].children[0, 4, 8].textContent === 'o' ||
        document.getElementsByClassName('wrapper')[0].children[2, 4, 6].textContent === 'o' ||
        document.getElementsByClassName('wrapper')[0].children[0, 3, 6].textContent === 'o' ||
        document.getElementsByClassName('wrapper')[0].children[1, 4, 7].textContent === 'o' ||
        document.getElementsByClassName('wrapper')[0].children[2, 5, 8].textContent === 'o') {
            console.log('O won');
    }
}

function getTie() {
    if (document.getElementsByClassName('wrapper')[0].children[0,1,2,3,4,5,6,7,8].textContent !== ' ') {
        console.log('Game is a tie');
    }
}