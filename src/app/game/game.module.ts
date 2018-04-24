import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { FieldComponent } from './field/field.component';
import { ControlsComponent } from './controls/controls.component';
import { GenerateService } from "./shared/services/generate.service";
import { NavigationService } from "./shared/services/navigation.service";
import { PlayerComponent } from './player/player.component';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule
  ],
  declarations: [
    GameComponent,
    FieldComponent,
    ControlsComponent,
    PlayerComponent
  ],
  providers: [
    GenerateService,
    NavigationService
  ]
})
export class GameModule { }
