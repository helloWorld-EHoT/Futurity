import { Injectable } from "@angular/core";
import { Coors } from "../models/coors.model";
import { Cell, Field } from "../models/cell.model";
import { GenerateService } from "./generate.service";
import { BehaviorSubject } from "rxjs/Rx";

@Injectable()
export class NavigationService {

  private coors: Coors = {
    x: '',
    y: ''
  };

  private player: { x: number, y: number } = {
    x: 0,
    y: 0
  };

  private field: Field;
  private teleports: number = 0;
  public teleportNew: BehaviorSubject<number> = new BehaviorSubject<number>(this.teleports);
  public teleport = this.teleportNew.asObservable();

  constructor(private generator: GenerateService) {
    this.generator.field.subscribe(field => {
      this.field = field;
    });
  }

  setCoors(x: string, y: string) {
    this.player.x = +x;
    this.player.y = +y;
    this.teleportNew.next(this.teleports - 1);
    this.teleports = this.teleports - 1;
  }

  // setField(field: Field) {
  //   this.field = field;
  // }

  getTeleport() {
    if (this.teleportNew) {
      return true;
    }
  }

  pickUpTeleport() {
    this.teleportNew.next(this.teleports + 1);
    this.teleports = this.teleports + 1;
  }

  getCoors() {
    return this.coors;
  }

  getPlayer() {
    return this.player;
  }

  movePlayer(way: string): boolean {
    switch (way) {
      case 'up': {
        this.checkIf(this.player.y - 1, 'y') &&
        this.player.y - 1 >= 0 ?
          this.player.y-- :
          this.player.y;
        break;
      }
      case 'down': {
        this.checkIf(this.player.y + 1, 'y') &&
        this.player.y + 1 < this.field.heightY ?
          this.player.y++ :
          this.player.y;
        break;
      }
      case 'left': {
        this.checkIf(this.player.x - 1, 'x') &&
        this.player.x - 1 >= 0 ?
          this.player.x-- :
          this.player.x;
        break;
      }
      case 'right': {
        this.checkIf(this.player.x + 1, 'x') &&
        this.player.x + 1 < this.field.widthX ?
          this.player.x++ :
          this.player.x;
        break;
      }
    }
    return true;
  }

  checkIf(nextPosition: number, key: string) {
    let answer: boolean = true;

    this.field.cells.some((cell: Cell, index: number, array: Cell[]) => {
      if (key === 'x') {
        if (cell.positionY === this.player.y && cell.positionX === nextPosition) {

          answer = !cell.wall;
          if (cell.exit) {
            this.generator.generateFields(this.field.widthX, this.field.heightY);
          } else if (cell.teleport) {
            cell.teleport = false;
            this.pickUpTeleport();
          }
          return true;
        }
      } else if (key === 'y') {
        if (cell.positionX === this.player.x && cell.positionY === nextPosition) {

          answer = !cell.wall;
          if (cell.exit) {
            this.generator.generateFields(this.field.widthX, this.field.heightY);
          } else if (cell.teleport) {
            cell.teleport = false;
            this.pickUpTeleport();
          }
          return true;
        }
      }
    });
    return answer;
  }

}
