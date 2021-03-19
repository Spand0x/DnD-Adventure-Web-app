import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RaceComponent} from './race/race.component';
import {CreateComponent} from './create.component';
import {ModifierComponent} from './modifier/modifier.component';

const routes: Routes = [
  {
    path: '', component: CreateComponent,
    children: [
      {path: '', redirectTo: 'race', pathMatch: 'full'},
      {path: 'modifier', component: ModifierComponent},
      {path: 'race', component: RaceComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule {
}
