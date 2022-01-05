
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
        getWinnerX();
        getWinnerO();
    }

}

function getGameStatus() {

}

function getWinnerX() {
    if (document.getElementsByClassName('wrapper')[0].children[0].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[1].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[2].textContent === 'x') {
        console.log('X won');
        reset();
    }

    if (document.getElementsByClassName('wrapper')[0].children[3].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[4].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[5].textContent === 'x') {
        console.log('X won');
        reset();
    }

    if (document.getElementsByClassName('wrapper')[0].children[6].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[7].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[8].textContent === 'x') {
        console.log('X won');
        reset();
    }

    if (document.getElementsByClassName('wrapper')[0].children[0].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[4].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[8].textContent === 'x') {
        console.log('X won');
        reset();
    }

    if (document.getElementsByClassName('wrapper')[0].children[2].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[4].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[6].textContent === 'x') {
        console.log('X won');
        reset();
    }

    if (document.getElementsByClassName('wrapper')[0].children[0].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[3].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[6].textContent === 'x') {
        console.log('X won');
        reset();
    }

    if (document.getElementsByClassName('wrapper')[0].children[1].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[4].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[7].textContent === 'x') {
        console.log('X won');
        reset();
    }

    if (document.getElementsByClassName('wrapper')[0].children[2].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[5].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[8].textContent === 'x') {
        console.log('X won');
        reset();
    }

}

function getWinnerO() {
    if (document.getElementsByClassName('wrapper')[0].children[0].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[1].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[2].textContent === 'o') {
        console.log('O won');
        reset();
    }

    if (document.getElementsByClassName('wrapper')[0].children[3].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[4].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[5].textContent === 'o') {
        console.log('O won');
        reset();
    }

    if (document.getElementsByClassName('wrapper')[0].children[6].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[7].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[8].textContent === 'o') {
        console.log('O won');
        reset();
    }

    if (document.getElementsByClassName('wrapper')[0].children[0].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[4].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[8].textContent === 'o') {
        console.log('O won');
        reset();
    }

    if (document.getElementsByClassName('wrapper')[0].children[2].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[4].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[6].textContent === 'o') {
        console.log('O won');
        reset();
    }

    if (document.getElementsByClassName('wrapper')[0].children[0].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[3].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[6].textContent === 'o') {
        console.log('O won');
        reset();
    }

    if (document.getElementsByClassName('wrapper')[0].children[1].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[4].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[7].textContent === 'o') {
        console.log('O won');
         reset();
    }

    if (document.getElementsByClassName('wrapper')[0].children[2].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[5].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[8].textContent === 'o') {
        console.log('O won');
        reset();
    }
}

function getTie() {
    if (document.getElementsByClassName('wrapper')[0].children[0, 1, 2, 3, 4, 5, 6, 7, 8].textContent !== ' ') {
        console.log('Game is a tie');
    }
}

function reset() {
    for (let i = 0; i < 9; i++) {
        document.getElementsByClassName('wrapper')[0].children[i].textContent = ' ';
    }
}