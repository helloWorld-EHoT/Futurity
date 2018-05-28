import { Component, HostListener, Input, OnInit, ViewChildren } from '@angular/core';
import { Cell, Player } from "../@shared/models/field.model";
import { TurnService } from "../@shared/services/turn.service";


@Component({
  selector: 'futurity-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

  @Input() cell: Cell;
  @Input() players: Player[];

  constructor() {
  }

  ngOnInit() {}

  log(that) {
    console.log(that);
  }

}
