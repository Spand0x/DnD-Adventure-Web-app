import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { ViewRoutingModule } from './views.routing';
import { SharedModule } from '../shared/shared.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [ViewsComponent, IndexComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    SharedModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule
  ]
})
export class ViewsModule { }
