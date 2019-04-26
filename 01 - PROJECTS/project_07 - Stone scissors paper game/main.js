const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerHand: "",
    aiHand: ""
}

const hands = [...document.querySelectorAll(".select img")];

// first function
function handSelection() {
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = "0 0 0 4px red";
};

function aiChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option;
};

function checkResult(player, ai) {
    console.log(player, ai);
    if (player === ai) {
        console.log("draw");
        return "draw";
    } else if ((player === "paper" && ai === "stone") || (player === "stone" && ai === "scissors") || (player === "scissors" && ai === "paper")) {
        console.log("you winn");
        return "you winn";
    } else {
        console.log("you lost");
        return "you lost";
    }
}

//result publication
function publishResults(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;

    document.querySelector('[data-summary="ai-choice"]').textContent = ai;

    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

    if (result === "win") {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = "YOU WIN !!!";
        document.querySelector('[data-summary="who-win"]').color = "yellow";
    } else if (result === "loss") {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent = "COMPUTER WIN :(";
        document.querySelector('[data-summary="who-win"]').color = "red";
    } else {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = "Draws :/";
        document.querySelector('[data-summary="who-win"]').color = "green";
    }
}

function endGame() {

    document.querySelector(`[data-option=${game.playerHand}]`).style.boxShadow = "";
    game.playerHand = "";
    game.aiHand = "";
}

// control function
function startGame() {
    if (!game.playerHand) return alert("Choose a theme!!!");

    game.aiHand = aiChoice();

    const gameResult = checkResult(game.playerHand, game.aiHand);

    console.log(gameResult);

    publishResults(game.playerHand, game.aiHand, gameResult);

    // endGame();
};

hands.forEach(hand => hand.addEventListener('click', handSelection));

document.querySelector('.start').addEventListener('click', startGame);