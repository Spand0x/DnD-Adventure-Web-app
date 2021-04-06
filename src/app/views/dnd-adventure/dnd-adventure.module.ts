import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DndAdventureComponent} from './dnd-adventure.component';
import {DndAdventureRoutingModule} from './dnd-adventure.routing';
import {SharedModule} from 'src/app/shared/shared.module';
import {LayoutContainersModule} from 'src/app/containers/layout/layout.containers.module';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {NotifService} from '../../shared/services/notif.service';
import {NgSelectModule} from '@ng-select/ng-select';
import {CharacterComponent} from './character/character.component';
import {CharacterModule} from './character/character.module';


@NgModule({
  declarations: [
    DndAdventureComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    DndAdventureRoutingModule,
    SharedModule,
    LayoutContainersModule,
    ReactiveFormsModule,
    SimpleNotificationsModule.forRoot(),
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    NgSelectModule,
    FormsModule,
    CharacterModule,
  ],
  providers: [
    NotifService
  ]
})
export class DndAdventureModule {
}

