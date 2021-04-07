import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CharacterComponent} from './character.component';
import {GeneralStepComponent} from './general-step/general-step.component';
import {RaceStepComponent} from './race-step/race-step.component';
import {ClassStepComponent} from './class-step/class-step.component';
import {StatsStepComponent} from './stats-step/stats-step.component';
import {WeaponStepComponent} from './weapon-step/weapon-step.component';
import {WeaponsHeaderComponent} from './weapon-step/weapons-header/weapons-header.component';
import {ArchwizardModule} from 'angular-archwizard';
import {SharedModule} from '../../../shared/shared.module';
import {BsModalService} from 'ngx-bootstrap/modal';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {NotifService} from '../../../shared/services/notif.service';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {CharacterRoutingModule} from './character.routing';
import { SpellStepComponent } from './spell-step/spell-step.component';
import { SpellsHeaderComponent } from './spell-step/spells-header/spells-header.component';
import {SimpleNotificationsModule} from 'angular2-notifications';


@NgModule({
  declarations: [CharacterComponent,
    GeneralStepComponent,
    RaceStepComponent,
    ClassStepComponent,
    StatsStepComponent,
    WeaponStepComponent,
    WeaponsHeaderComponent,
    SpellStepComponent,
    SpellsHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CharacterRoutingModule,
    ArchwizardModule,
    AccordionModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    PaginationModule.forRoot(),
    BsDropdownModule,
    SimpleNotificationsModule
  ], providers: [
    NotifService,
    BsModalService,
  ]
})
export class CharacterModule {
}
