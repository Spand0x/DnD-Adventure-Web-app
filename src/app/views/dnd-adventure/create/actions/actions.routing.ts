import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AttackComponent} from './attack/attack.component';
import {SpellComponent} from './spell/spell.component';

const routes: Routes = [
  {path: '', redirectTo: 'attack', pathMatch: 'full'},
  {path: 'attack', component: AttackComponent},
  {path: 'spell', component: SpellComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ActionsRoutingModule {

}
