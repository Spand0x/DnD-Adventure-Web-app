import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './list.component';

const routes: Routes = [
  {
    path: '', component: ListComponent,
    children: [
      {path: '', redirectTo: 'action', pathMatch: 'full'},
      {path: 'action', loadChildren: () => import('./actions/actions.module').then(m => m.ActionsModule)}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule {
}
