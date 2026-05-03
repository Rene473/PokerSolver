import { BoardView } from "@components/BoardView.tsx";
import { RangeBoard } from "@components/RangeBoard.tsx";
import { Board } from "@domain/models/Board";
import { Player } from "@domain/models/Player";
import { Positions } from "@domain/models/Position";
import { Hand } from "@cards/Hand";
import { Card } from "@cards/Card";
import { Suits } from "@cards/Suit";
import { Ranks } from "@cards/Rank";
import type { Range } from "@range/Range";

function App() {
	const players = [
		new Player(
			"Hero",
			new Hand([new Card(Suits.Spades, Ranks.Ace), new Card(Suits.Spades, Ranks.King)]),
			1500,
			Positions.BTN,
		),
		new Player(
			"Villain",
			new Hand([new Card(Suits.Hearts, Ranks.Nine), new Card(Suits.Clubs, Ranks.Nine)]),
			1200,
			Positions.SB,
		),
	];

	const board = new Board(players, "Flop");
	board.dealHands();
	board.setCommunityCards([
		new Card(Suits.Hearts, Ranks.Ten),
		new Card(Suits.Diamonds, Ranks.Jack),
		new Card(Suits.Clubs, Ranks.Queen),
	]);
	board.setPot(640);

	const range: Range = [
		{ id: "aa", label: "AA", frequency: 100, selected: true },
		{ id: "kk", label: "KK", frequency: 100, selected: true },
		{ id: "aqs", label: "AQs", frequency: 60, selected: false },
		{ id: "jts", label: "JTs", frequency: 40, selected: false },
		{ id: "98s", label: "98s", frequency: 30, selected: true },
		{ id: "22", label: "22", frequency: 50, selected: false },
		{ id: "t9o", label: "T9o", frequency: 20, selected: false },
		{ id: "custom", label: "Custom", frequency: 10, selected: false },
	];

	return (
		<main className="app-shell">
			<header className="app-header">
				<h1>Poker Solver Starter</h1>
				<p>Board + range board skeleton for future hand and range work.</p>
			</header>

			<div className="panels">
				<BoardView board={board} />
				<RangeBoard range={range} />
			</div>
		</main>
	);
}

export default App;