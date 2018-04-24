export class Cell {
  positionX: number;
  positionY: number;
  wall: boolean;
  ground: boolean;
  movWall: boolean;
  exit?: boolean;
  teleport?: boolean;
}

export class Field {
  widthX: number;
  heightY: number;
  playersCount?: number;
  cells: Cell[];
}
