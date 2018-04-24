import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'futurity-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  title: string = 'wrapper';

  constructor() { }

  ngOnInit() {
  }

}
