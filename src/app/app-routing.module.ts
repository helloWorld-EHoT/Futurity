import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WrapperComponent } from "./shared/wrapper/wrapper.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'minotaur', pathMatch: 'full'
  },
  {
    path: '', component: WrapperComponent, children: [
      {
        path: 'game', loadChildren: './game/game.module#GameModule'
      },
      {
        path: 'minotaur', loadChildren: './minotaur/minotaur.module#MinotaurModule'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
