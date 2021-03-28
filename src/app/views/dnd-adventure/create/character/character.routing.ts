import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CharacterComponent} from './character.component';

const routes: Routes = [
  {path: '', component: CharacterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule {
}
