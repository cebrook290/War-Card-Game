let playerOneScore = [];
let playerTwoScore = [];
let tieMatches = [];
let playerOneName = 'Ranma';
let playerTwoName = 'Akane';

class Card {
    constructor(rank, suit, value) {
        this.rank = rank;
        this.suit = suit;
        this.value = value;
    }
}

class Deck {
    constructor () {
        this.cards = [];
    }
    createDeck() {
        let suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
        let ranks = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King','Ace'];
        let values = [2,3,4,5,6,7,8,9,10,11,12,13,14];
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(ranks[j], suits[i], values [j]));
            }
        }
    }
    shuffleDeck () {
        let location1, location2, tmp;
        for (let i = 0; i < 1000; i++) {
            location1 = Math.floor((Math.random() * this.cards.length));
            location2 = Math.floor((Math.random() * this.cards.length));
            tmp = this.cards[location1];
            this.cards[location1] = this.cards[location2];
            this.cards[location2] = tmp;
        }
    }
}

class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards - [];
    }
}

class Board {
    constructor() {
       this.players = [];
    }
    start(playerOneName, playerTwoName) {
        this.players.push(new Player(playerOneName));
        this.players.push(new Player(playerTwoName));
        let d = new Deck();
        d.createDeck();
        d.shuffleDeck();
        this.players[0].playerCards = d.cards.slice(0,26);
        this.players[1].playerCards = d.cards.slice(26,52);
    }
}

let gameBoard = new Board();
gameBoard.start(playerOneName, playerTwoName);

function deal() {
    let playerOneHand = gameBoard.players[0].playerCards.pop();
    let playerTwoHand = gameBoard.players[1].playerCards.pop();
    if (playerOneHand.value > playerTwoHand.value) {
        playerOneScore.push(1);
    } else if (playerOneHand.value < playerTwoHand.value) {
        playerTwoScore.push(1);
    } else {
        tieMatches.push(1);
    }
}

function declareWinner () {
    if (playerOneScore.length > playerTwoScore.length) {
        console.log(playerOneName.toUpperCase() + ' WINS!!');
        alert(playerOneName.toUpperCase() + ' WINS!!');
    } else if (playerOneScore.length < playerTwoScore.length) {
        console.log(playerTwoName.toUpperCase() + ' WINS!!');
        alert(playerTwoName.toUpperCase() + ' WINS!!');
    } else {
        alert('The game has ended in a tie');
    }
    console.log(playerOneName + ' finished with a score of ' + playerOneScore.length);
    console.log(playerTwoName + ' finished with a score of ' + playerTwoScore.length);
    console.log('There were a total of ' + tieMatches.length + ' tie matches.');
}

do {
    deal()
} while (gameBoard.players[0].playerCards.length > 0  || gameBoard.players[1].playerCards.length > 0);


setTimeout (() => {
    declareWinner()
}, 5000);

