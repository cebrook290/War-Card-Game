const suits = ['Spades', 'Diamonds', 'Clubs', 'Hearts'];
const values = ['2', '3', '4', '5','6','7','8','9','10','J', 'Q', 'K', 'A'];

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


var deck1 = createDeck();
shuffle(deck1);

console.log(deck1);