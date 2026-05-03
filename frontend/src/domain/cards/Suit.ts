export const Suits = {
    Hearts: "H",
    Diamonds: "D",
    Clubs: "C",
    Spades: "S",
} as const;

export type Suit = typeof Suits[keyof typeof Suits];
