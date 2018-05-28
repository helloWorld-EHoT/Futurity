import { Injectable } from "@angular/core";
import { State } from "../models/field.model";

@Injectable()
export class TurnService {

  playersState: State;

  setPosition(id: number) {

  }

  sendToServerPositions() {

  }

  getPlayerPosition(id: number) {

  }

  getPositions() {

  }

  ////////////////////////////////

  movePlayer(playerId: number, way: string) {
    switch (way) {
      case 'up' :
        console.log(way);
        break;
      case 'down' :
        console.log(way);
        break;
      case 'left' :
        console.log(way);
        break;
      case 'right' :
        console.log(way);
        break;
    }
  }

}
