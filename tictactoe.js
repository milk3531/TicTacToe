
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
        getTie();
    }

}


function getWinnerX() {
    if (document.getElementsByClassName('wrapper')[0].children[0].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[1].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[2].textContent === 'x') {
        alert('X won');
        reset();
    }

    if (document.getElementsByClassName('wrapper')[0].children[3].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[4].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[5].textContent === 'x') {
        alert('X won');
        reset();
    }

    if (document.getElementsByClassName('wrapper')[0].children[6].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[7].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[8].textContent === 'x') {
        alert('X won');
        reset();
    }

    if (document.getElementsByClassName('wrapper')[0].children[0].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[4].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[8].textContent === 'x') {
        alert('X won');
        reset();
    }

    if (document.getElementsByClassName('wrapper')[0].children[2].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[4].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[6].textContent === 'x') {
        alert('X won');
        reset();
    }

    if (document.getElementsByClassName('wrapper')[0].children[0].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[3].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[6].textContent === 'x') {
        alert('X won');
        reset();
    }

    if (document.getElementsByClassName('wrapper')[0].children[1].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[4].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[7].textContent === 'x') {
        alert('X won');
        reset();
    }

    if (document.getElementsByClassName('wrapper')[0].children[2].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[5].textContent === 'x' &&
        document.getElementsByClassName('wrapper')[0].children[8].textContent === 'x') {
        alert('X won');
        reset();
    }

}

function getWinnerO() {
    if (document.getElementsByClassName('wrapper')[0].children[0].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[1].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[2].textContent === 'o') {
        alert('O won');
        reset();
    }

    if (document.getElementsByClassName('wrapper')[0].children[3].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[4].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[5].textContent === 'o') {
        alert('O won');
        reset();
    }

    if (document.getElementsByClassName('wrapper')[0].children[6].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[7].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[8].textContent === 'o') {
        alert('O won');
        reset();
    }

    if (document.getElementsByClassName('wrapper')[0].children[0].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[4].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[8].textContent === 'o') {
        alert('O won');
        reset();
    }

    if (document.getElementsByClassName('wrapper')[0].children[2].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[4].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[6].textContent === 'o') {
        alert('O won');
        reset();
    }

    if (document.getElementsByClassName('wrapper')[0].children[0].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[3].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[6].textContent === 'o') {
        alert('O won');
        reset();
    }

    if (document.getElementsByClassName('wrapper')[0].children[1].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[4].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[7].textContent === 'o') {
        alert('O won');
        reset();
    }

    if (document.getElementsByClassName('wrapper')[0].children[2].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[5].textContent === 'o' &&
        document.getElementsByClassName('wrapper')[0].children[8].textContent === 'o') {
        alert('O won');
        reset();
    }
}

function getTie() {
    let curnum = 0;
    for (let i = 0; i < 9; i++) {
        if (document.getElementsByClassName('wrapper')[0].children[i].textContent !== ' ') {
            curnum++;
        }
    }
    if (curnum === 9) {
        alert('Game is a tie');
        reset();
    }
}

function reset() {
    for (let i = 0; i < 9; i++) {
        document.getElementsByClassName('wrapper')[0].children[i].textContent = ' ';
    }
}