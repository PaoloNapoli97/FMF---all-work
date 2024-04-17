class Deck {
    // This static array contains the suits of the cards.
    static SUITS = [
        "Coppe",
        "Mazze",
        "Oro",
        "Spade",
    ]

    static {
        this.CARDS = [
            "Asso",
        ]

        this.CARDS = this.CARDS.concat(
            Array.from(Array(6).keys()).map(function(x) {
                return x + 2
            })
        ).concat([
            "Fante",
            "Cavallo",
            "Re",
        ]);

        this.MAP_VALUE_TO_CARD = new Map();
        for (let i = 0; i < this.SUITS.length; i++) {
            for (let j=0; j < this.CARDS.length; j++) {
                this.MAP_VALUE_TO_CARD.set(
                    j + i * this.CARDS.length,
                    `${this.CARDS[j]} di ${this.SUITS[i]}`
                );
            }
        }
    }

    toJSON() {
        const value = Array.from(Deck.MAP_VALUE_TO_CARD.values());
        const key = Array.from(Deck.MAP_VALUE_TO_CARD.keys());

        return JSON.stringify({
            "keys": key,
            "values": value,
        })
    }

    static fromJSON(str){
        const obj = JSON.parse(str);
        return Deck.MAP_VALUE_TO_CARD.set(obj.keys, obj.values);        
    }
}

const deck = new Deck();
const str = deck.toJSON();
const newDeck = Deck.fromJSON(str);
console.table(newDeck);