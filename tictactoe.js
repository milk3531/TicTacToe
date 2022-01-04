
curcount = 1;

function clickbutton(id) {
    console.log(document.getElementById(id).textContent);
    if (document.getElementById(id).textContent === ' ') {
        if (curcount === 1) {
            document.getElementById(id).textContent = 'x';
            curcount++;
        } else if (curcount === 2) {
            document.getElementById(id).textContent = 'o';
            curcount--;
        }
    }
}

