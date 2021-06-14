export enum Categories {
  HEADPHONES = "headphones",
  SPEAKERS = "speakers",
  EARPHONES = "earphones",
}

export type Category =
  | Categories.HEADPHONES
  | Categories.SPEAKERS
  | Categories.EARPHONES;
