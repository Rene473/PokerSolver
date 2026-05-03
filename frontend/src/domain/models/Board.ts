import type { Card } from "../cards/Card";
import type { Player } from "./Player";

export type Street = "Preflop" | "Flop" | "Turn" | "River";

export class Board {
    private players: Player[];
    private communityCards: Card[] = [];
    private street: Street;
    private pot: number = 0;

    constructor(players: Player[], street: Street = "Preflop") {
        this.players = players;
        this.street = street;
    }

    getPlayers(): Player[] {
        return this.players;
    }

    getCommunityCards(): Card[] {
        return this.communityCards;
    }

    getStreet(): Street {
        return this.street;
    }

    getPot(): number {
        return this.pot;
    }

    setCommunityCards(cards: Card[]): void {
        this.communityCards = cards;
    }

    setStreet(street: Street): void {
        this.street = street;
    }

    setPot(amount: number): void {
        this.pot = amount;
    }

    addPlayer(player: Player): void {
        this.players.push(player);
    }
}
