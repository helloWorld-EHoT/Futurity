export class FieldModel {
  props: Props;
  players: number;
}

export class Props {
  width: number;
  height: number;
  map?: Array<Cell>;
}
export class Cell {
  role: string;
  x: number;
  y: number;
  draggable: boolean = false;
  dropable: boolean = false;
  passable: boolean = false;
}
