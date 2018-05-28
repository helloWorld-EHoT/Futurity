import { Component, HostListener, OnInit } from '@angular/core';
import { Cell, Player } from "../@shared/models/field.model";
import { MapGeneratorService } from "../@shared/services/map-generator.service";
import { TurnService } from "../@shared/services/turn.service";

@Component({
  selector: 'futurity-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  map: Array<Cell> = [];

  KEY_CODE = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  };
  // tempMap: Array<Cell> = [];

  template: Array<Array<number>> = [
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 4, 4, 7, 7],
    [7, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [7, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 7, 7, 7, 7, 0],
    [7, 0, 0, 4, 0, 0, 7, 0, 0, 0, 0, 7, 0, 0, 0, 0],
    [7, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0],
    [7, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0],
    [7, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 7, 0],
    [7, 0, 0, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 7, 0],
    [7, 0, 0, 0, 0, 0, 7, 0, 0, 4, 4, 0, 0, 7, 7, 0],
    [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 0, 0, 7, 7, 7, 7, 0, 0, 7, 7, 7, 7, 0, 0, 7],
    [4, 0, 0, 7, 0, 0, 7, 0, 0, 7, 0, 0, 0, 0, 0, 0],
    [7, 0, 0, 7, 0, 0, 7, 0, 0, 7, 0, 0, 0, 0, 0, 0],
    [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 1]
  ];

  players: Player[] = [
    {
      id: 1,
      x: 1,
      y: 1,
      steps: 0
    },
    {
      id: 2,
      x: 30,
      y: 1,
      steps: 0
    },
    {
      id: 3,
      x: 1,
      y: 30,
      steps: 0
    },
    {
      id: 4,
      x: 30,
      y: 30,
      steps: 0
    }
  ];

  playerTurnId: number = 1;

  constructor(private mapGen: MapGeneratorService,
              private turn: TurnService) {

  }

  ngOnInit() {
    this.mapGen.getMap()
      .subscribe(response => {
        this.template = response.json();
        this.mapGen.setTempMap(this.template);
        this.map = this.mapGen.generateMap();
      });
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    event.preventDefault();
    // console.log(event);

    if (event.keyCode === this.KEY_CODE.UP) {
      this.onMove(this.playerTurnId, 'up');
      // this.turn.movePlayer(this.playerTurnId, 'up');
    }

    if (event.keyCode === this.KEY_CODE.DOWN) {
      this.onMove(this.playerTurnId, 'down');
      // this.turn.movePlayer(this.playerTurnId, 'down');
    }

    if (event.keyCode === this.KEY_CODE.LEFT) {
      this.onMove(this.playerTurnId, 'left');
      // this.turn.movePlayer(this.playerTurnId, 'left');
    }

    if (event.keyCode === this.KEY_CODE.RIGHT) {
      this.onMove(this.playerTurnId, 'right');
      // this.turn.movePlayer(this.playerTurnId, 'right');
    }

    if (event.code === "Space") {
      this.togglePlayer();
    }
  }

  onMove(playerId: number, way: string) {
    this.players.forEach((item) => {
      if (item.id === playerId) {
        switch (way) {
          case 'up' :
            item.y--;
            break;
          case 'down' :
            item.y++;
            break;
          case 'left' :
            item.x--;
            break;
          case 'right' :
            item.x++;
            break;
        }
      }
    });
  }

  onPassable(way: number) {
    // if (cell[way + 1]);
  }

  togglePlayer() {
    this.playerTurnId >= 4 ? this.playerTurnId = 1 : this.playerTurnId++;
    console.log(this.playerTurnId);
  }

}
