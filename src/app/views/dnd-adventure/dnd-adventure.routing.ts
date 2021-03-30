import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DndAdventureComponent} from './dnd-adventure.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '', component: DndAdventureComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
      {path: 'create', loadChildren: () => import('./create/create.module').then(m => m.CreateModule)},
      {path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule)},
      {path: 'character/:uuid', loadChildren: () => import('./character/character.module').then(m => m.CharacterModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DndAdventureRoutingModule {
}
