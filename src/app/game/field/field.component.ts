import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Field } from "../shared/models/cell.model";
import { NavigationService } from "../shared/services/navigation.service";

export enum KEY_CODE {
  LEFT_ARROW = 37,
  UP_ARROW = 38,
  RIGHT_ARROW = 39,
  DOWN_ARROW = 40,
}

@Component({
  selector: 'futurity-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  @Input('field') field: Field;
  @Input() player;
  @Input() teleport;

  constructor(private nav: NavigationService) {
  }

  ngOnInit() {
  }

  onHover(event) {
    this.nav.setCoors(event.x.value, event.y.value);
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    event.preventDefault();

    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.nav.movePlayer('right');
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.nav.movePlayer('left');
    }

    if (event.keyCode === KEY_CODE.UP_ARROW) {
      this.nav.movePlayer('up');
    }

    if (event.keyCode === KEY_CODE.DOWN_ARROW) {
      this.nav.movePlayer('down');
    }
  }

  onTeleport(event) {
    if (this.teleport) {
      this.nav.setCoors(event.x.value, event.y.value);
    }

  }

}
