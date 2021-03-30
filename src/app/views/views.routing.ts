import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorComponent} from './error/error.component';
import {AuthGuard} from '../shared/auth.guard';
import {IndexComponent} from './index/index.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./dnd-adventure/dnd-adventure.module').then(m => m.DndAdventureModule), canActivate: [AuthGuard]},
  {path: 'index', component: IndexComponent},
  {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule {
}
