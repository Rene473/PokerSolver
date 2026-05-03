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

export type Position = typeof Positions[keyof typeof Positions];
