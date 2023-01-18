const suits = ['Spades', 'Diamonds', 'Clubs', 'Hearts'];
const values = ['2', '3', '4', '5','6','7','8','9','10','J', 'Q', 'K', 'A'];
const playerHand = [];
const compHand = [];
const playDeck = '';
const computerDeck = '';
const playerCard = '';
const compCard = '';

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
    playerCard = playerHand[0];
    compCard = compHand[0];
    compare(playerCard, compCard);
}

function compare (player, comp) {
    
    if ((player % 13) > (comp % 13)) {
        
       playerHand.push(comp);
       playerHand.push(player);
       
       playerHand.shift();
       compHand.shift();
       
       setTimeout(function() {
           moveCards('player');
       }, 1500);
        
        updateCount();
        checkWin();
    } else if ((player % 13) < (comp % 13)) {
        
        compHand.push(player);
		compHand.push(comp);
        
        compHand.shift();
		playerHand.shift();
        
        setTimeout(function() {
			moveCards('comp');
		}, 1500);

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

var deck1 = createDeck();
shuffle(deck1);


