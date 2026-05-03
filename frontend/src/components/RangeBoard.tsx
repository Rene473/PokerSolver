import type { Range } from "@range/Range";

interface RangeBoardProps {
    range: Range;
}

export function RangeBoard({ range }: RangeBoardProps) {
    return (
        <section className="range-board panel">
            <div className="panel-header">
                <div>
                    <h2>Range board</h2>
                    <p>Static hand combo preview for future range selection.</p>
                </div>
                <div className="range-summary">{range.length} combos</div>
            </div>

            <div className="range-grid">
                {range.map((combo) => (
                    <div key={combo.id} className={`range-cell ${combo.selected ? "selected" : ""}`}>
                        <strong>{combo.label}</strong>
                        <span>{combo.frequency}%</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
