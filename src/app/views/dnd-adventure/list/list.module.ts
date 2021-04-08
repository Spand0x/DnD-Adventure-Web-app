import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {LayoutContainersModule} from '../../../containers/layout/layout.containers.module';
import {NotifService} from '../../../shared/services/notif.service';
import {ListRoutingModule} from './list.routing';
import { ListModifierComponent } from './list-modifier/list-modifier.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {FormsModule} from '@angular/forms';
import { ListPaginationComponent } from './list-pagination/list-pagination.component';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [ListComponent, ListModifierComponent, ListHeaderComponent, ListPaginationComponent],
  imports: [
    CommonModule,
    SimpleNotificationsModule.forRoot(),
    LayoutContainersModule,
    ListRoutingModule,
    BsDropdownModule,
    PaginationModule.forRoot(),
    FormsModule,
    SharedModule
  ],
  providers: [
    NotifService
  ]
})
export class ListModule { }
