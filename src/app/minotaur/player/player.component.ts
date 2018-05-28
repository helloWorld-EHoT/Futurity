import { Component, Input, OnInit } from '@angular/core';
import { Cell, Player } from "../@shared/models/field.model";
import { TurnService } from "../@shared/services/turn.service";

@Component({
  selector: 'futurity-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() cell: Cell;
  @Input() player: Player;

  constructor(private turn: TurnService) {
  }

  ngOnInit() {
  }

}
