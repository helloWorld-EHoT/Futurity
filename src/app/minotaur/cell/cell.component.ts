import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Cell } from "../@shared/models/field.model";


@Component({
  selector: 'futurity-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

  @Input() cell: Cell;
  remember: string = 'wall';

  KEY_CODE = {
    WALL: 37,
    GROUND: 38,
    BLOCK: 39,
    TRAP: 40,
  };

  constructor() {
  }

  ngOnInit() {
  }

  onClick(cell: Cell) {
    // switch (cell.role) {
    //   case 'ground' :
    //     cell.role = this.remember;
    //     break;
    //   case 'wall' :
    //     cell.role = this.remember;
    //     break;
    //   case 'block' :
    //     cell.role = this.remember;
    //     break;
    // }
    cell.role = this.remember;
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    event.preventDefault();

    if (event.keyCode === this.KEY_CODE.WALL) {
      this.remember = 'wall';
    }

    if (event.keyCode === this.KEY_CODE.GROUND) {
      this.remember = 'ground';
    }

    if (event.keyCode === this.KEY_CODE.BLOCK) {
      this.remember = 'block';
    }

    if (event.keyCode === this.KEY_CODE.TRAP) {
      this.remember = 'trap';
    }
  }
}
