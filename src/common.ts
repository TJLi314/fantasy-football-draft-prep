export interface Player {
  name: string;
  rank: number;
}

export interface Tier {
  rank: number;
  players: Player[];
}

export interface TierColor {
  letter: string;
  color: string;
}

export const rankMap = new Map<number, TierColor>([
  [0, { letter: "S", color: "red" }],
  [1, { letter: "A", color: "orange" }],
  [2, { letter: "B", color: "yellow" }],
  [3, { letter: "C", color: "green" }],
  [4, { letter: "D", color: "blue" }],
  [5, { letter: "E", color: "indigo" }],
  [6, { letter: "F", color: "violet" }],
  [7, { letter: "G", color: "red" }],
  [8, { letter: "H", color: "orange" }],
]);
