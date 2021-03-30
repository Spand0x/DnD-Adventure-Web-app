import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {LayoutContainersModule} from '../../../containers/layout/layout.containers.module';
import {SharedModule} from '../../../shared/shared.module';
import {HomeRoutingModule} from './home.routing';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutContainersModule,
    HomeRoutingModule,
  ]
})
export class HomeModule {
}
