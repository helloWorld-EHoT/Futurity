import { Component, OnInit } from '@angular/core';
import { Cell, FieldModel } from "../@shared/models/field.model";
import { MapGeneratorService } from "../@shared/services/map-generator.service";

@Component({
  selector: 'futurity-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  map: Array<Cell> = [];
  tempMap: Array<Cell> = [];

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


  constructor(private mapGen: MapGeneratorService) {

  }

  ngOnInit() {
    // this.mapGen.getMap().subscribe();
  }



}
