export const Positions = {
    UTG: "UTG",
    UTG1: "UTG+1",
    UTG2: "UTG+2",
    LJ: "LJ",
    HJ: "HJ",
    CO: "CO",
    BTN: "BTN",
    SB: "SB",
    BB: "BB",
} as const;

export const positionDealOrder = [
    Positions.SB,
    Positions.BB,
    Positions.UTG,
    Positions.UTG1,
    Positions.UTG2,
    Positions.LJ,
    Positions.HJ,
    Positions.CO,
    Positions.BTN,
] as const;

export type Position = typeof Positions[keyof typeof Positions];
