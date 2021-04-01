import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorComponent} from '../views/error/error.component';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {WeaponDescriptionComponent} from './components/weapon-description/weapon-description.component';
import {SpellDescriptionComponent} from './components/spell-description/spell-description.component';
import {CharacterDescriptionComponent} from './components/character-description/character-description.component';

@NgModule({
  declarations: [
    ErrorComponent,
    WeaponDescriptionComponent,
    SpellDescriptionComponent,
    CharacterDescriptionComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    TranslateModule,
    PerfectScrollbarModule,
  ],
  exports: [
    PerfectScrollbarModule,
    RouterModule,
    ErrorComponent,
    TranslateModule,
    CommonModule
  ]
})
export class SharedModule {
}
