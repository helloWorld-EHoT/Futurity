import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'futurity-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() section;

  @Input() position: {x: number, y:number};

  constructor() { }

  ngOnInit() {
  }



}
