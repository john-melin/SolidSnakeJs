import GameConfig from '../game-config';
import { Pos } from '../types/pos';
import { SnakeBodyPart } from '../types/snake-body-part';

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function getRandomPos(): Pos {
  return {
    x: getRandomInt(GameConfig.gridSize),
    y: getRandomInt(GameConfig.gridSize),
  };
}

export function getHead(body: SnakeBodyPart[]): SnakeBodyPart {
  return body[body.length - 1];
}
