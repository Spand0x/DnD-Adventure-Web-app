import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RaceComponent} from './race/race.component';
import {CreateComponent} from './create.component';
import {ModifierComponent} from './modifier/modifier.component';
import {ClassComponent} from './class/class.component';
import {WeaponComponent} from './weapon/weapon.component';

const routes: Routes = [
  {
    path: '', component: CreateComponent,
    children: [
      {path: '', redirectTo: 'race', pathMatch: 'full'},
      {path: 'modifier', component: ModifierComponent},
      {path: 'race', component: RaceComponent},
      {path: 'action', loadChildren: () => import('./actions/actions.module').then(m => m.ActionsModule)},
      {path: 'class', component: ClassComponent},
      {path: 'weapon', component: WeaponComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule {
}
