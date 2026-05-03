import type { Player } from "@domain/models/Player";
import { CardView } from "@components/CardView/CardView";
import styles from "./PlayerView.module.css";

interface PlayerViewProps {
    player: Player;
    index: number;
}
export function PlayerView({ player, index }: PlayerViewProps) {
    const [cardOne, cardTwo] = player.getHand().getCards();

    return (
        <div key={index} className={styles.playerCard}>
            <div className={styles.playerName}>{player.getName()}</div>
            <div className={styles.playerMeta}>
                <span>{player.getPosition()}</span>
                <span>{player.getStack()} chips</span>
            </div>
            <div className={styles.playerHand}>
                <CardView card={cardOne} />
                <CardView card={cardTwo} />
            </div>
        </div>
    );
}