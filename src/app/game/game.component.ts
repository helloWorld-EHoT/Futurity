import { Component, OnDestroy, OnInit } from '@angular/core';
import { GenerateService } from "./shared/services/generate.service";
import { Field } from "./shared/models/cell.model";
import { NavigationService } from "./shared/services/navigation.service";
import { Coors } from "./shared/models/coors.model";
import { ISubscription } from "rxjs/Subscription";

@Component({
  selector: 'futurity-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {


  level: number = 0;

  coors: Coors;
  player;
  field: Field;
  sub$: ISubscription;
  teleport: number;

  constructor(private generator: GenerateService,
              private nav: NavigationService) {
    this.nav.teleport.subscribe(tp => {
      this.teleport = tp;
    })
  }

  ngOnInit() {
    this.sub$ = this.generator.field.subscribe(field => {
      this.level++;
      this.field = field;
    });
    // this.nav.setField(this.field);
    this.coors = this.subscribeCoors();
    this.player = this.nav.getPlayer();
  }

  subscribeCoors(): Coors {
    return this.nav.getCoors();
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

}
