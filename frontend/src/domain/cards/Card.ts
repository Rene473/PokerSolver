
import type { Rank } from "./Rank";
import type { Suit } from "./Suit";

export class Card {
    private suit: Suit;
    private rank: Rank;

    constructor(suit: Suit, rank: Rank) {
        this.suit = suit;
        this.rank = rank;
    }

    getSuit(): Suit {
        return this.suit;
    }

    getRank(): Rank {
        return this.rank;
    }

    toString(): string {
        return `${this.rank}${this.suit}`;
    }
}
