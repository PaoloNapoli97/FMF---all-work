function getRandomIntInclusive(min, max) {
    if (!Number.isInteger(min)) throw Error("min is not an integer");
    if (!Number.isInteger(max)) throw Error("max is not an integer");

    return Math.floor(
        Math.random() * (max - min + 1 ) + min
    );
}

// This class extends the Error class and is used to represent an empty deck.
class EmptyDeck extends Error {
}

// This class represents a deck of cards.
class Deck {
    // This static array contains the suits of the cards.
    static SUITS = [
        "Coppe",
        "Mazze",
        "Oro",
        "Spade",
    ]

    // This static block initializes the CARDS and MAP_VALUE_TO_CARD static properties.
    static {
        // The CARDS array contains the names of the cards.
        this.CARDS = [
            "Asso",
        ]

        // The CARDS array is concatenated with an array of numbers from 2 to 7 and the names of the face cards.
        this.CARDS = this.CARDS.concat(
            Array.from(Array(6).keys()).map(function(x) {
                return x + 2
            })
        ).concat([
            "Fante",
            "Cavallo",
            "Re",
        ]);

        // The MAP_VALUE_TO_CARD map is used to map the value of a card to its name and suit.
        // It is declared as a static property using the class name to make it clear that it is a property of the class, not an instance.
        // Thus, all decks will have the same cards.
        // Of course, this can be improved by defining some common behavior and then
        // subclassing, but that's another story :)
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

    // This private property stores the order of the cards in the deck.
    // Remember, it must be defined in the class body first.
    // It can't be declared in the constructor, but only assigned.
    #order = undefined;

    // This constructor initializes the order of the cards in the deck.
    constructor() {
        /*
        Array.from() is a static method of the Array object in JavaScript. It creates a new array instance from an array-like or iterable object. The method takes an optional mapFn argument that can be used to transform the elements of the array.

        new Array() is a constructor function that creates a new array instance. It takes an optional length argument that specifies the length of the array. If no argument is provided, an empty array is created.

        this.constructor is a reference to the constructor function of the current instance. In this case, it refers to the Deck constructor function.

        MAP_VALUE_TO_CARD is a static property of the Deck class that is used to map the value of a card to its name and suit.

        .size is a property of the Map object that returns the number of key-value pairs in the map.

        .keys() is a method of the Array object that returns a new array iterator that contains the keys of the array.

        Putting it all together, the code creates a new array instance with a length equal to the number of key-value pairs in the MAP_VALUE_TO_CARD map of the Deck class. The keys of the array are then populated with the keys() method, which returns an iterator containing the keys of the array. The resulting array contains the keys of the MAP_VALUE_TO_CARD map, which are used to initialize the order of the cards in the deck.
        */
        this.#order = Array.from(new Array(
            this.constructor.MAP_VALUE_TO_CARD.size
        ).keys());

        // This code logs the order of the cards in the deck to the console.
        console.log(this.#order);
    }

    // This getter returns an array of the cards in the deck.
    // The getter associates to the virtual property 'cards' the function cards() that provides its value
    get cards() {
        /* this.#order is a private property of the Deck class that stores the order of the cards in the deck. The # symbol before the property name indicates that it is a private property and cannot be accessed or modified from outside the class.

        .map() is a method of the Array object in JavaScript that creates a new array with the results of calling a provided function on every element in the calling array. The method takes a callback function as an argument that is called with three arguments: the current element being processed, the index of the current element, and the array that .map() was called upon.

        In this case, the callback function takes an index argument that represents the index of the current card in the deck. The function then uses the Deck.MAP_VALUE_TO_CARD map to get the name of the card corresponding to the current index. The resulting array contains the names of all the cards in the deck in the order specified by this.#order.

        Overall, this code is used to get an array of the names of all the cards in the deck in the order specified by this.#order. It uses the Deck.MAP_VALUE_TO_CARD map to map the value of a card to its name and suit, and the .map() method to create a new array with the names of all the cards in the deck.
        */
        return this.#order.map(
            function(index) {
                return Deck.MAP_VALUE_TO_CARD.get(index);
            }
        );
    }

    /**
     * Returns true if the deck is empty, false otherwise.
     * @returns {boolean} True if the deck is empty, false otherwise.
     */
    isEmpty() {
        return (this.#order.length === 0);
    }

    // This private method throws an EmptyDeck error if the deck is empty.
    #throwIfEmpty() {
        if (this.isEmpty()) throw EmptyDeck()
    }


    /**
    * Shuffles the cards in the deck.
    * @throws {Error} If the shuffle was unsuccessful.
    */
    shuffle() {
        for (let i = 0; i < this.#order.length; i++) {
            // This code generates a random destination index for the current card.
            const destination = getRandomIntInclusive(0, this.#order.length - 1);

            // This code uses destructuring to swap the current card with the card at the destination index.
            [this.#order[i], this.#order[destination]] = [this.#order[destination], this.#order[i]];
        }

        // This code checks if the shuffle was successful by verifying that all the cards are still in the deck.
        console.log(new Set(this.#order.values()).size);
        if (new Set(this.#order).size !== this.#order.length) throw Error("Ops...");
    }


    /**
     * Removes and returns the top card from the deck.
     * @returns {number} The top card from the deck.
     * @throws {Error} If the deck is empty.
     */
    pop() {
        this.#throwIfEmpty();

        return this.#order.pop();
    }

    /**
     * Allows putting a card on the top of the deck.
     * @param {number} card - The card to put on the top of the deck.
     * @throws {Error} If the card is not an integer, if it is not already in the deck, or if it is not in the MAP_VALUE_TO_CARD.
     */
    push(card) {
        // Check if the card is an integer, if it is not already in the deck
        // and if it is in the MAP_VALUE_TO_CARD. Otherwise, the move is not valid

        // TODO: Implement this method.
    }

    /**
     * Removes and returns the card from the bottom of the deck.
     * @returns {number} The card from the bottom of the deck.
     * @throws {Error} If the deck is empty.
     */
    pickFromBottom() {
        // Same as pop, but from the bottom of the deck.

        // TODO: Implement this method.
    }

    /**
     * Allows putting a card on the bottom of the deck.
     * @param {number} card - The card to put on the bottom of the deck.
     * @throws {Error} If the card is not an integer, if it is not already in the deck, or if it is not in the MAP_VALUE_TO_CARD.
     */
    addToBottom(card) {
        // Perform checks as in push(), but to the bottom of the deck.

        // TODO: Implement this method.
    }

    /**
     * Removes and returns the card at the specified index from the deck.
     * @param {number} index - The index of the card to remove.
     * @returns {number} The card at the specified index.
     * @throws {Error} If the index is out of range or the deck is empty.
     */
    pickFromMiddle(index) {
        // TODO: Implement this method.
    }

    /**
     * Adds a card to the specified index in the deck.
     * @param {number} index - The index to add the card to.
     * @param {number} card - The card to add to the deck.
     * @throws {Error} If the index is out of range, the card is not an integer, it is already in the deck, or it is not in the MAP_VALUE_TO_CARD.
     */
    addToMiddle(index, card) {
        // TODO: Implement this method.
    }

    /**
     * Cuts the deck at a random position and swaps the top and bottom halves of the deck.
     */
    cut() {
        // TODO: Implement this method.
    }

    /**
     * Sorts the cards in the deck in ascending order.
     */
    sort() {
        // TODO: Implement this method.
    }

    /**
     * Searches the deck for a specified card and returns its index in the deck.
     * @param {number} card - The card to search for.
     * @returns {number} The index of the card in the deck, or -1 if it is not found.
     */
    search(card) {
        // TODO: Implement this method.
    }

    /**
     * Cuts the deck at a specified position and swaps the top and bottom halves of the deck.
     * @param {number} index - The position to cut the deck at.
     */
    cutAt(index) {
        // TODO: Implement this method.
    }

    /**
     * Briefly describes the Deck for printing.
     * E.g., it shows the number of cards and the number of cards left...
     */
    toString() {
        // TODO: Implement this method.
    }
}

// This code logs the name of the last card in the deck to the console.
console.log (Deck.MAP_VALUE_TO_CARD.get(Deck.MAP_VALUE_TO_CARD.size-1))

// This code logs the names of all the cards in the deck to the console.
console.log(Deck.CARDS);

// This code creates a new deck and logs the names of all the cards in the deck to the console.
const deck = new Deck();
console.log(deck.cards)

// This code shuffles the deck and logs the names of all the cards in the deck to the console.
deck.shuffle()
console.log(deck.cards)