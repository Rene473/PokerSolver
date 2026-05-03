import type { Card } from "../cards/Card";
import { createDeck, shuffleDeck } from "@cards/Deck";
import { Hand } from "@cards/Hand";
import type { Player } from "./Player";
import { Positions, positionDealOrder } from "./Position";

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

    dealHands(): void {
        const deck = shuffleDeck(createDeck());
        const activePlayers = this.players.filter((player) => player.isInHand());

        const startIndex = positionDealOrder.indexOf(Positions.SB);
        const dealSequence = positionDealOrder.slice(startIndex).concat(positionDealOrder.slice(0, startIndex));

        const playersInDealOrder = dealSequence
            .map((position) => activePlayers.find((player) => player.getPosition() === position))
            .filter((player): player is Player => Boolean(player));

        const holeCardGroups: Card[][] = playersInDealOrder.map(() => []);
        let cardIndex = 0;

        for (let round = 0; round < 2; round++) {
            for (let handIndex = 0; handIndex < playersInDealOrder.length; handIndex++) {
                holeCardGroups[handIndex].push(deck[cardIndex++]);
            }
        }

        playersInDealOrder.forEach((player, index) => {
            const cards = holeCardGroups[index] as [Card, Card];
            player.setHand(new Hand(cards));
        });
    }
}
