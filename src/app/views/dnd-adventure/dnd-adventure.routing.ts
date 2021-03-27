import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DndAdventureComponent} from './dnd-adventure.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '', component: DndAdventureComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'home', component: HomeComponent},
      {path: 'create', loadChildren: () => import('./create/create.module').then(m => m.CreateModule)},
      {path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DndAdventureRoutingModule {
}
