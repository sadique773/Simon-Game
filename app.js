let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2");



function startGame() {
    if (!started) {
        console.log("Game started");
        started = true;
        levelup();
    }
}

// Add separate listeners for keypress and touchstart
document.addEventListener("keypress", startGame);
document.addEventListener("touchstart", startGame);

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 200)
}

function checkans(idx) {

    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `<i>Game Over! <strong> Your score was ${level}</strong><br>Press any key to Start</i>`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 120)
        reset();

    }
}
function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}



function levelup() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    gameseq.push(randColor);
    console.log(gameseq)
    let randbtn = document.querySelector(`.${randColor}`);
    btnflash(randbtn);
}

function btnPress() {
    let btn = this;
    btnflash(btn);
    userColor = btn.getAttribute("id")
    userseq.push(userColor);

    checkans(userseq.length - 1);

}

let allbtns = document.querySelectorAll(".btn")
for (let btn of allbtns) {
    btn.addEventListener("click", btnPress)
}
