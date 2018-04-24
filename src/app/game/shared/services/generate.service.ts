import { Injectable } from "@angular/core";
import { Cell, Field } from "../models/cell.model";
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class GenerateService {

  tempField: Field = {
    widthX: 0,
    heightY: 0,
    cells: []
  };

  public fieldSub: BehaviorSubject<Field> = new BehaviorSubject<Field>(this.tempField);
  public field = this.fieldSub.asObservable();


  // exit: boolean;
  widthX: number = 16;
  heightY: number = 16;

  constructor() {
    this.generateFields(this.widthX, this.heightY);
    // this.setExit();
  }

  getField() {
    return this.field;
  }

  generateFields(widthX: number, heightY: number) {
    this.tempField = {
      widthX: widthX,
      heightY: heightY,
      cells: []
    };
    let x = 0, y = 0;
    for (y; y < heightY; y++) {
      for (x; x < widthX; x++) {
        let cell = this.randomizeBoolean();
        this.tempField.cells.push({
          positionX: x,
          positionY: y,
          wall: cell.wall,
          ground: cell.ground,
          movWall: cell.movWall
        });
      }
      // refresh X parameter
      x = 0;
    }
    console.log(this.tempField);
    this.setExit();
    this.generateTeleport();
    this.fieldSub.next(this.tempField);
  }

  randomizeBoolean() {
    let
      state: boolean = Math.random() >= 0.7,

      cell = {
        wall: false,
        ground: true,
        movWall: false
      };

    if (!state) {
      return cell;
    } else {
      cell.ground = false;
      cell.wall = true;
      return cell;
    }
  }

  setExit() {
    let x = Math.floor(Math.random() * this.widthX);
    let y = Math.floor(Math.random() * this.heightY);

    this.tempField.cells.some((exit) => {
      if (exit.positionX == x && exit.positionY == y) {
        exit.exit = true;
        return true;
      }
    });
  }

  generateTeleport() {
    let x = Math.floor(Math.random() * this.widthX);
    let y = Math.floor(Math.random() * this.heightY);

    this.tempField.cells.some((exit) => {
      if (exit.positionX == x && exit.positionY == y) {
        exit.teleport = true;
        return true;
      }
    });
  }

}
