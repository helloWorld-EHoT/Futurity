import { Injectable } from "@angular/core";
import { Cell, FieldModel } from "../models/field.model";
import { Http } from "@angular/http";
import 'rxjs/operator/map'

@Injectable()
export class MapGeneratorService {
  map: Array<Cell> = [];
  tempMap: Array<Cell> = [];
  template: Array<Array<number>>;
  getString: string = '../../assets/data.json';

  roles: Array<string> = [
    'wall',
    'ground',
    'block',
    'trap'
  ];

  field: FieldModel = {
    props: {
      width: 32,
      height: 32,
      map: this.map
    },
    players: 1
  };


  constructor(private http: Http) {
    this.getMap();
  }

  getMap() {
    return this.http.get(this.getString)
      // .subscribe(response => {
      //   console.log(response.json());
      //   this.template = response.json();
      //   return this.map = this.generateMap();
      // });
  }

  setTempMap(map) {
    this.template = map;
  }

  generateMap() {

    for (let cellY = 0; cellY < this.template.length; cellY++) {
      for (let cellX = 0; cellX < this.template[cellY].length; cellX++) {
        this.tempMap.push(this.roleGenerator(cellX, cellY, this.template[cellY][cellX]));
      }
      this.flipGeneration(cellY);
    }
    this.doubleFlipGeneration();
    return this.tempMap;

  }

  flipGeneration(y: number) {
    let x = this.template[y].length;
    for (let cellX = this.template[y].length - 1; cellX >= 0; cellX--) {
      this.tempMap.push(this.roleGenerator(x, y, this.template[y][cellX]));
      x++;
    }
  }

  doubleFlipGeneration() {
    let y = this.template.length;
    for (let cellY = this.template.length - 1; cellY >= 0; cellY--) {
      for (let cellX = 0; cellX < this.template[cellY].length; cellX++) {
        this.tempMap.push(this.roleGenerator(cellX, y, this.template[cellY][cellX]));
      }
      this.tripleFlipGeneration(y, cellY); /// -
      y++;
    }
  }

  tripleFlipGeneration(Y: number, y: number) {
    let x = this.template[y].length;
    // let Y = this.template.length;
    for (let cellX = this.template[y].length - 1; cellX >= 0; cellX--) {
      this.tempMap.push(this.roleGenerator(x, Y, this.template[y][cellX]));
      x++;
    }
  }

  roleGenerator(x: number, y: number, value: number) {
    switch (value) {
      case 7 :
        // simple WALL
        return {
          role: this.roles[0],
          x: x,
          y: y,
          draggable: false,
          dropable: false,
          passable: false
        };
      case 0 :
        // GROUND
        return {
          role: this.roles[1],
          x: x,
          y: y,
          draggable: false,
          dropable: true,
          passable: true
        };
      case 4 :
        // movable wall = BLOCK
        return {
          role: this.roles[2],
          x: x,
          y: y,
          draggable: true,
          dropable: false,
          passable: false
        };
      case 9 :
        // trap
        return {
          role: this.roles[9],
          x: x,
          y: y,
          draggable: false,
          dropable: false,
          passable: false
        };
      default :
        // DEFAULT = GROUND
        return {
          role: this.roles[1],
          x: x,
          y: y,
          draggable: false,
          dropable: false,
          passable: false
        };
    }
  }

}
