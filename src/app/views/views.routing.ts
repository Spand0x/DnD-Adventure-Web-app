import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewsComponent} from './views.component';
import {ErrorComponent} from './error/error.component';
import {environment} from './../../environments/environment';
import {AuthGuard} from '../shared/auth.guard';
import {IndexComponent} from './index/index.component';

let routes: Routes = [
  {path: '', loadChildren: () => import('./dnd-adventure/dnd-adventure.module').then(m => m.DndAdventureModule), canActivate: [AuthGuard]},
  {path: 'index', component: IndexComponent},
  {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: '/error'}
];

if (!environment.isAuthGuardActive) {
  routes = [
    {
      path: '',
      component: ViewsComponent,
      pathMatch: 'full',
    },
    {path: 'app', loadChildren: () => import('./dnd-adventure/dnd-adventure.module').then(m => m.DndAdventureModule)},
    {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
    {path: 'error', component: ErrorComponent},
    {path: '**', redirectTo: '/error'}
  ];
}

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule {
}
