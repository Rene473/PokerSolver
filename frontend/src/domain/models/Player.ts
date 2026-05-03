import type { Hand } from "../cards/Hand";
import type { Position } from "./Position";

export class Player {
    private name: string;
    private hand: Hand;
    private stack: number;
    private inHand: boolean = true;
    private position: Position;

    constructor(name: string, hand: Hand, stack: number, position: Position) {
        this.name = name;
        this.hand = hand;
        this.stack = stack;
        this.position = position;
    }

    getName(): string {
        return this.name;
    }

    getPosition(): Position {
        return this.position;
    }

    setPosition(position: Position): void {
        this.position = position;
    }

    getHand(): Hand {
        return this.hand;
    }

    getStack(): number {
        return this.stack;
    }

    setInHand(inHand: boolean): void {
        this.inHand = inHand;
    }

    isInHand(): boolean {
        return this.inHand;
    }

    toString(): string {
        return `${this.name} with hand: ${this.hand.toString()} and stack: ${this.stack}`;
    }
}