import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AttackComponent} from './attack/attack.component';

const routes: Routes = [
  {path: '', redirectTo: 'attack', pathMatch: 'full'},
  {path: 'attack', component: AttackComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActionsRoutingModule {
}
