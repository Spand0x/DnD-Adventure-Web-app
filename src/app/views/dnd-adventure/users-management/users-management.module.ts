import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersManagementComponent} from './users-management.component';
import {NotifService} from '../../../shared/services/notif.service';
import {SharedModule} from '../../../shared/shared.module';
import {UsersManagementRoutingModule} from './users-management.routing';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {LayoutContainersModule} from '../../../containers/layout/layout.containers.module';
import { UsersManagementHeaderComponent } from './users-management-header/users-management-header.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';


@NgModule({
  declarations: [
    UsersManagementComponent,
    UsersManagementHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersManagementRoutingModule,
    SimpleNotificationsModule,
    LayoutContainersModule,
    BsDropdownModule,
    PaginationModule.forRoot(),
    NgSelectModule,
    FormsModule,
  ],
  providers: [
    NotifService
  ]
})
export class UsersManagementModule {
}
