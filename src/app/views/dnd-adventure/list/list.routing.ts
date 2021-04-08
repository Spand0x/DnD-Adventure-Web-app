import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './list.component';
import {ListModifierComponent} from './list-modifier/list-modifier.component';

const routes: Routes = [
  {
    path: '', component: ListComponent,
    children: [
      {path: '', redirectTo: 'modifiers', pathMatch: 'full'},
      {path: 'modifiers', component: ListModifierComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule {
}
