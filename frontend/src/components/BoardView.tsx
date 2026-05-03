import { CardView } from "@components/CardView/CardView";
import { PlayerView } from "@components/PlayerView/PlayerView";
import type { Board } from "@domain/models/Board";

interface BoardViewProps {
    board: Board;
}

export function BoardView({ board }: BoardViewProps) {
    return (
        <section className="board-view panel">
            <div className="panel-header">
                <div>
                    <h2>Board</h2>
                    <p>{board.getStreet()} • Pot {board.getPot()}</p>
                </div>
                <div className="board-summary">{board.getPlayers().length} players</div>
            </div>

            <div className="board-cards">
                {board.getCommunityCards().map((card, index) => (
                    <CardView key={index} card={card} />
                ))}
                {Array.from({ length: 5 - board.getCommunityCards().length }).map((_, index) => (
                    <div key={`empty-${index}`} className="card-slot empty">
                        ?
                    </div>
                ))}
            </div>

            <div className="player-grid">
                {board.getPlayers().map((player, index) => (
                    <PlayerView key={index} player={player} index={index} />
                ))}
            </div>
        </section>
    );
}
