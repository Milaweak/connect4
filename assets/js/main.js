let round = true;
let play = true;
let yellowCount = 0;
let redCount = 0;
let cells = document.querySelectorAll(".cell");
let whoPlay = document.querySelector("#whoPlay")
let score = document.querySelector("#score")
let players = true;


whoPlay.style.background = round ? 'yellow' : 'red';


function addcoin(elem) {
    whoPlay.style.background = round ? 'red' : 'yellow';
    if (play == true) {
        for (let i = elem.children.length - 1; i >= 0; i--) {
            if (!elem.children[i].hasAttribute("alreadyPlayed")) {
                elem.children[i].setAttribute("alreadyPlayed", "true");
                elem.children[i].style.background = round ? 'yellow' : 'red';
                i = -1
                round = players ? !round : round;
                victory();
                if (players == false) {
                    for (let j = 0; j < cells.length; j++) {

                    }

                }
            }
        }
    }
}

function reset() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.background = "rgb(158, 215, 222)"
        cells[i].removeAttribute("alreadyPlayed");
        play = true;
        document.querySelector("#victory").innerText = (``);


    }
}

function player() {
    reset()
    redCount = 0
    yellowCount = 0
    players = true;
    refreshScore()

}

function ia() {
    reset()
    redCount = 0
    yellowCount = 0
    players = false;
    refreshScore()

}


function victory(color) {
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].style.backgroundColor == "red" || cells[i].style.backgroundColor == "yellow") {
            if (cells[i].classList.contains("vColumn")) {
                if (cells[i].style.background == cells[i + 1].style.background && cells[i].style.background == cells[i + 2].style.background && cells[i].style.background == cells[i + 3].style.background) {
                    document.querySelector("#victory").innerText = (`Victoire de ${cells[i].style.background}`);
                    play = false;
                    refreshScore(true)

                }
            }

            if (cells[i].classList.contains("vLine")) {
                if (cells[i].style.backgroundColor == cells[i + 6].style.backgroundColor && cells[i].style.backgroundColor == cells[i + 12].style.backgroundColor && cells[i].style.backgroundColor == cells[i + 18].style.backgroundColor) {
                    document.querySelector("#victory").innerText = (`Victoire de ${cells[i].style.background}`);
                    play = false;
                    refreshScore(true)
                }
            }

            if (cells[i].classList.contains("vDiagonalDown")) {
                if (cells[i].style.background == cells[i + 7].style.background && cells[i].style.background == cells[i + 14].style.background && cells[i].style.background == cells[i + 21].style.background) {
                    document.querySelector("#victory").innerText = (`Victoire de ${cells[i].style.background}`);
                    play = false;
                    refreshScore(true)
                }
            }

            if (cells[i].classList.contains("vDiagonalUp")) {
                if (cells[i].style.background == cells[i + 5].style.background && cells[i].style.background == cells[i + 10].style.background && cells[i].style.background == cells[i + 15].style.background) {
                    document.querySelector("#victory").innerText = (`Victoire de ${cells[i].style.background}`);
                    play = false;
                    refreshScore(true)

                }
            }
        }
    }
}

function refreshScore(addpoint) {
    if (addpoint) {
        if (round == 0) {
            yellowCount++

        } else {
            redCount++
        }
    }

    score.innerHTML = `Score de Jaune = ${yellowCount} <br> Score de Rouge = ${redCount}`
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}