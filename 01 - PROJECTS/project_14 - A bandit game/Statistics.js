class Statistics {
    constructor() {
        this.gameResults = [{
            win: true,
            bin: 2
        }, {
            win: false,
            bin: 3
        }];
    }

    addGameToStatistics(win, bid) {
        let gameResults = {
            win,
            bid
        }
        console.log(gameResults);
        this.gameResults.push(gameResults);
    }

    showGameStatistics() {
        let game = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length;
        let losses = this.gameResults.filter(result => !result.win).length;

        return [game, wins, losses];
    }
}

const stats = new Statistics();