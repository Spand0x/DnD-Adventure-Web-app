import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DndAdventureComponent} from './dnd-adventure.component';
import {DndAdventureRoutingModule} from './dnd-adventure.routing';
import {SharedModule} from 'src/app/shared/shared.module';
import {LayoutContainersModule} from 'src/app/containers/layout/layout.containers.module';
import {CreateCharacterComponent} from './create-character/create-character.component';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {ArchwizardModule} from 'angular-archwizard';
import {NotifService} from '../../shared/services/notif.service';
import {NgSelectModule} from '@ng-select/ng-select';


@NgModule({
  declarations: [
    DndAdventureComponent,
    CreateCharacterComponent],
  imports: [
    CommonModule,
    DndAdventureRoutingModule,
    SharedModule,
    LayoutContainersModule,
    ReactiveFormsModule,
    SimpleNotificationsModule.forRoot(),
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    ArchwizardModule,
    NgSelectModule,
    FormsModule,
  ],
  providers: [
    NotifService
  ]
})
export class DndAdventureModule {
}

