import type { Card } from "./Card";

export class Hand {
    private cards: [Card, Card];

    constructor(cards: [Card, Card]) {
        this.cards = cards;
    }

    getCards(): [Card, Card] {
        return this.cards;
    }

    toString(): string {
        return `${this.cards[0].toString()} ${this.cards[1].toString()}`;
    }
}