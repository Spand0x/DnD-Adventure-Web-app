import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {LayoutContainersModule} from '../../../containers/layout/layout.containers.module';
import {NotifService} from '../../../shared/services/notif.service';
import {ListRoutingModule} from './list.routing';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    SimpleNotificationsModule.forRoot(),
    LayoutContainersModule,
    ListRoutingModule
  ],
  providers: [
    NotifService
  ]
})
export class ListModule { }
