import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from "./game.component";
// import { FieldComponent } from "./field/field.component";

const routes: Routes = [
  {
    path: '', component: GameComponent,
    // children: [
    //   {
    //     path: 'field', component: FieldComponent
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
