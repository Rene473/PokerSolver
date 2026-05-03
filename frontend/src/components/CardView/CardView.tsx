import type { Card as CardModel } from "../../domain/cards/Card";
import styles from "./CardView.module.css";

const suitSymbols: Record<string, string> = {
    H: "♥",
    D: "♦",
    C: "♣",
    S: "♠",
};

interface CardViewProps {
    card: CardModel;
    faceDown?: boolean;
}

export function CardView({ card, faceDown = false }: CardViewProps) {
    if (faceDown) {
        return <div className={`${styles.card} ${styles.back}`} />;
    }

    return (
        <div className={styles.card}>
            <div className={`${styles.corner} ${styles.topLeft}`}>
                <span>{card.getRank()}</span>
                <span>{suitSymbols[card.getSuit()]}</span>
            </div>
            <div className={styles.center}>{suitSymbols[card.getSuit()]}</div>
            <div className={`${styles.corner} ${styles.bottomRight}`}>
                <span>{card.getRank()}</span>
                <span>{suitSymbols[card.getSuit()]}</span>
            </div>
        </div>
    );
}
