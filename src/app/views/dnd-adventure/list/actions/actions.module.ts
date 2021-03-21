import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActionsRoutingModule} from './actions.routing';
import { AttackComponent } from './attack/attack.component';
import {ContextMenuModule} from 'ngx-contextmenu';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [AttackComponent],
  imports: [
    CommonModule,
    ActionsRoutingModule,
    ContextMenuModule.forRoot(),
    NgxDatatableModule
  ]
})
export class ActionsModule { }
