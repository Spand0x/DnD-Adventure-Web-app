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


@NgModule({
  declarations: [
    CreateComponent,
    RaceComponent,
    ModifierComponent,
    ClassComponent,
    WeaponComponent,
    SpellComponent,
    SpellDescriptionComponent,
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
  ],
  providers: [
    NotifService,
    BsModalService
  ]
})
export class CreateModule {
}
