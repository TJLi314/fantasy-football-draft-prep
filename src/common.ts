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

export const numToLetRankMap = new Map<number, TierColor>([
  [0, { letter: "S", color: "red" }],
  [1, { letter: "A", color: "orange" }],
  [2, { letter: "B", color: "yellow" }],
  [3, { letter: "C", color: "green" }],
  [4, { letter: "D", color: "blue" }],
  [5, { letter: "E", color: "indigo" }],
  [6, { letter: "F", color: "violet" }],
  [7, { letter: "G", color: "red" }],
  [8, { letter: "H", color: "orange" }],
  [9, { letter: "I", color: "yellow" }],
  [10, { letter: "J", color: "green" }],
]);

export const letToNumRankMap = new Map<string, number>([
  ["S", 0],
  ["A", 1],
  ["B", 2],
  ["C", 3],
  ["D", 4],
  ["E", 5],
  ["F", 6],
  ["G", 7],
  ["H", 8],
  ["I", 9],
  ["J", 10],
]);
