import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MinotaurComponent } from "./minotaur.component";

const minoRoutes: Routes = [
  {
    path: '', component: MinotaurComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(minoRoutes)],
  exports: [RouterModule]
})
export class MinotaurRoutingModule { }
