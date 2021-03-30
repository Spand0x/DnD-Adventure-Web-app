import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharacterRoutingModule} from './character.routing';
import {NotifService} from '../../../shared/services/notif.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CharacterRoutingModule
  ],
  providers: [
    NotifService
  ]
})
export class CharacterModule { }
