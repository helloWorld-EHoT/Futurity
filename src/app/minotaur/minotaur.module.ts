import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";

import { MinotaurRoutingModule } from './minotaur-routing.module';
import { MinotaurComponent } from './minotaur.component';
import { FieldComponent } from './field/field.component';
import { PlayerComponent } from './player/player.component';
import { EnemyComponent } from './enemy/enemy.component';
import { CellComponent } from './cell/cell.component';
import { MapGeneratorService } from "./@shared/services/map-generator.service";


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    MinotaurRoutingModule
  ],
  declarations: [
    MinotaurComponent,
    FieldComponent,
    PlayerComponent,
    EnemyComponent,
    CellComponent
  ],
  providers: [
    MapGeneratorService
  ]
})
export class MinotaurModule { }
