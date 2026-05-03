import { Card } from "./Card";
import { Suits } from "./Suit";
import { Ranks } from "./Rank";

export function createDeck(): Card[] {
    const cards: Card[] = [];

    for (const suit of Object.values(Suits)) {
        for (const rank of Object.values(Ranks)) {
            cards.push(new Card(suit, rank));
        }
    }

    return cards;
}

export function shuffleDeck(deck: Card[]): Card[] {
    const shuffled = [...deck];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}
