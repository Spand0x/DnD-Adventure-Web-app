import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateComponent} from './create.component';
import {LayoutContainersModule} from '../../../containers/layout/layout.containers.module';
import {SharedModule} from '../../../shared/shared.module';
import {RaceComponent} from './race/race.component';
import {CreateRoutingModule} from './create.routing';
import {ModifierComponent} from './modifier/modifier.component';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {NotifService} from '../../../shared/services/notif.service';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import {ClassComponent} from './class/class.component';
import {WeaponComponent} from './weapon/weapon.component';
import {SpellComponent} from './spell/spell.component';
import {SpellDescriptionComponent} from './weapon/spell-description/spell-description.component';
import {BsModalService} from 'ngx-bootstrap/modal';
import {CharacterComponent} from './character/character.component';
import {GeneralStepComponent} from './character/general-step/general-step.component';
import {ArchwizardModule} from 'angular-archwizard';
import { RaceStepComponent } from './character/race-step/race-step.component';
import { ClassStepComponent } from './character/class-step/class-step.component';
import { StatsStepComponent } from './character/stats-step/stats-step.component';
import { WeaponStepComponent } from './character/weapon-step/weapon-step.component';
import { WeaponsHeaderComponent } from './character/weapon-step/weapons-header/weapons-header.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {PaginationConfig, PaginationModule} from 'ngx-bootstrap/pagination';
import { WeaponDescriptionComponent } from './character/weapon-step/weapon-description/weapon-description.component';


@NgModule({
  declarations: [
    CreateComponent,
    RaceComponent,
    ModifierComponent,
    ClassComponent,
    WeaponComponent,
    SpellComponent,
    SpellDescriptionComponent,
    CharacterComponent,
    GeneralStepComponent,
    RaceStepComponent,
    ClassStepComponent,
    StatsStepComponent,
    WeaponStepComponent,
    WeaponsHeaderComponent,
    WeaponDescriptionComponent
  ],
  imports: [
    CommonModule,
    LayoutContainersModule,
    SharedModule,
    CreateRoutingModule,
    TooltipModule,
    ReactiveFormsModule,
    NgSelectModule,
    SimpleNotificationsModule.forRoot(),
    AccordionModule,
    FormsModule,
    ArchwizardModule,
    BsDropdownModule,
    PaginationModule.forRoot()
  ],
  providers: [
    NotifService,
    BsModalService,
    PaginationConfig
  ]
})
export class CreateModule {
}
