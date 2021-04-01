import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharacterRoutingModule} from './character.routing';
import {NotifService} from '../../../shared/services/notif.service';
import { CharacterStatsComponent } from './character-stats/character-stats.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import {FormsModule} from '@angular/forms';
import { CharacterActionsComponent } from './character-actions/character-actions.component';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {BsModalService} from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [CharacterStatsComponent, BasicInformationComponent, CharacterActionsComponent],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    FormsModule,
    TabsModule
  ],
  exports: [
    CharacterStatsComponent,
    BasicInformationComponent,
    CharacterActionsComponent
  ],
  providers: [
    NotifService,
    BsModalService
  ]
})
export class CharacterModule { }
