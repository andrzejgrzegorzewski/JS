class Game {
    constructor(start) {
        this.stat = new Statistics();
        this.wallet = new Wallet(start);

        // pobranie przycisku spin i uruchomienie gry
        document.getElementById('start').addEventListener('click', this.startGame);

        this.boards = [...document.querySelectorAll('.game .color')];
        this.inputBid = document.getElementById('bid');
        this.spanWallet = document.querySelector('.panel span.wallet');
        this.spanResult = document.querySelector('.score span.result');
        this.spanGame = document.querySelector('.score span.number');
        this.spanWin = document.querySelector('.score span.win');
        this.spanLosses = document.querySelector('.score span.loss');

        this.render();

    }

    render(colors = ['red', 'gray', 'yellow'], money = this.wallet.getWalletValue(), result = "", stats = [0, 0, 0], bid = 0, wonMoney = 0) {

        this.boards.forEach((board, index) => {
            board.style.backgroundColor = colors[index];
        });

        this.spanWallet.textContent = money;
        if (result) result = `YOU WON! ${wonMoney}`;
        else if (!result && result != "") result = `YOU LOSS ${bid}`;
        this.spanResult.textContent = result;
        this.spanGame.textContent = stats[0];
        this.spanWin.textContent = stats[0];
        this.spanLosses.textContent = stats[0];
    }

    startGame() {


    }
}