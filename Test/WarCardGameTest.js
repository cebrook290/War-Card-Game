let playerOneScore = [];
let playerTwoScore = [];
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


// let playerOneHand = gameBoard.players[0].playerCards.pop();
// let playerTwoHand = gameBoard.players[1].playerCards.pop();
// console.log(playerOneHand);
// console.log(playerTwoHand);
// console.log(playerOneHand.value)
// if (playerOneHand.value > playerTwoHand.value) {
//     console.log(playerOneName + ' WINS');
//     playerOneScore.push(1);
// } else {
//     console.log(playerTwoName + ' WINS');
//     playerTwoScore.push(1);
// }

// console.log(playerOneName + ' has a score of ' + playerOneScore.length);
// console.log(playerTwoName + ' has a score of ' + playerTwoScore.length);

console.log(gameBoard.players);

function deal() {
    let playerOneHand = gameBoard.players[0].playerCards.pop();
    let playerTwoHand = gameBoard.players[1].playerCards.pop();
    if (playerOneHand.value > playerTwoHand.value) {
        playerOneScore.push(1);
    } else if (playerOneHand.value < playerTwoHand.value) {
        playerTwoScore.push(1);
    } else {
        return null 
    }
}

function declareWinner () {
    if (playerOneScore.length > playerTwoScore.length) {
        console.log(playerOneName.toUpperCase() + ' WINS!!');
        alert(playerOneName.toUpperCase() + ' WINS!!');
    } else {
        console.log(playerTwoName.toUpperCase() + ' WINS!!');
        alert(playerTwoName.toUpperCase() + ' WINS!!');
    }
    console.log(playerOneName + ' finished with a score of ' + playerOneScore.length);
    console.log(playerTwoName + ' finished with a score of ' + playerTwoScore.length);
}

function winnerAlert () {
    if (playerOneScore.length > playerTwoScore.length) {
        alert(playerOneName.toUpperCase() + ' WINS!!');
    } else {
        alert(playerTwoName.toUpperCase() + ' WINS!!')
    }
    
}

do {
    deal()
} while (gameBoard.players[0].playerCards.length > 0  || gameBoard.players[1].playerCards.length > 0);


setTimeout (() => {
    declareWinner()
}, 5000);

