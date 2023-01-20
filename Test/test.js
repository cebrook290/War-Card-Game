const suits = ['Spades', 'Diamonds', 'Clubs', 'Hearts'];
const values = ['2', '3', '4', '5','6','7','8','9','10','J', 'Q', 'K', 'A'];
var playerHand = [];
var compHand = [];
var playDeck = '';
var computerDeck = '';
var playerCard = '';
var compCard = '';
var playerScore = '';
var compScore = '';

// var Card = (function (){
//     var suitNames = ['spades', 'diamonds', 'clubs', 'hearts'],
//     Card = function(index){
//         this.index = index;
//         this.value = (index % 14) + 1;
//         this.suit = suitNames[Math.floor(index/14)];
//     };

// Card.prototype = {
//     get number() {
//         switch(this.value) {
//             case 11:
//                 return 'J';
//             case 12:
//                 return 'Q';
//             case 13:
//                 return 'K';
//             case 14:
//                 return 'A';
//             default:
//                 return this.value;
//         }
//         return this.value;
//     },
//     get name() {
//         var numberName = (function (n){
//             switch(n){
//                 case 'A' : return 'Ace';
//                 case 'K' : return 'King';
//                 case 'Q' : return 'Queen';
//                 case 'J' : return 'Jack';
//                 default: return n;
//             }
//         })(this.number);
//         return numberName + ' of ' + this.suit;
//     },
//     get suitNameArray() { return suitNames; }
// };
// return Card;
// })();

// console.log(new Card(14));




function createDeck() {
    let deck = new Array();

    for(let i = 0; i < suits.length; i++) {

        for(let a = 0; a < values.length; a++) {

            let card = {Value: values[a], Suit: suits[i]};
            deck.push(card);
        }
    } 
    return deck;
}

function shuffle(deck) {

    for(let i = 0; i < 1000; i++) {

        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let temp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = temp;
    }
}

function splitCards(deck) {
    var i = 0;
    while (i != deck.length) {
        playerHand.push(deck[i]);
        compHand.push(deck[(i+1)]);
        i += 2;
    }
}
       
function deal() {
    playerCard = playerHand.pop();
    compCard = compHand.pop();
    compare(playerCard, compCard);
}

function compare (player, comp) {
    
    if ((player % 14) > (comp % 14)) {
        
       playerScore.push(1);
       
       
       playerHand.shift();
       compHand.shift();
        
        updateCount();
        checkWin();

    } else if ((player % 14) < (comp % 14)) {
        
        compScore.push(1);
        
        compHand.shift();
		playerHand.shift();
        
        updateCount();
		checkWin();

    } else if ((player % 13) === (comp % 13)) 
        tie();
}

function checkWin() {
    if (playerHand.length == 0) {
        alert('The Computer wins the game');
    } else if (compHand.length == 0) {
        alert('The Player wins the game');
    }
}

var deck = createDeck();
shuffle(deck);
splitCards(deck);


let result = '';
let i = 0;

do {
    i = i + 1;
    result = result + '\n' + i;
} while (i < 5);

console.log(result);