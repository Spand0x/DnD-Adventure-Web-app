import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttackComponent } from './attack/attack.component';
import {SharedModule} from '../../../../shared/shared.module';
import {ActionsRoutingModule} from './actions.routing';
import { SpellComponent } from './spell/spell.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';



@NgModule({
  declarations: [AttackComponent, SpellComponent],
  imports: [
    CommonModule,
    SharedModule,
    ActionsRoutingModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class ActionsModule { }
