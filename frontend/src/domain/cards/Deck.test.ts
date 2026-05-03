import { describe, expect, it } from "vitest";
import { createDeck, shuffleDeck } from "@cards/Deck";

describe("Deck", () => {
    it("creates exactly 52 unique cards", () => {
        const deck = createDeck();
        expect(deck).toHaveLength(52);

        const uniqueCards = new Set(deck.map((card) => card.toString()));
        expect(uniqueCards.size).toBe(52);
    });

    it("never creates more than 52 cards", () => {
        const deck = createDeck();
        expect(deck.length).toBeLessThanOrEqual(52);
    });

    it("shuffles without changing deck size", () => {
        const deck = createDeck();
        const shuffled = shuffleDeck(deck);
        expect(shuffled).toHaveLength(deck.length);
        expect(new Set(shuffled.map((card) => card.toString())).size).toBe(deck.length);
    });
});
