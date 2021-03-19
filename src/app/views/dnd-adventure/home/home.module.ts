import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {LayoutContainersModule} from '../../../containers/layout/layout.containers.module';
import {PagesContainersModule} from '../../../containers/pages/pages.containers.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent],
  imports: [
    CommonModule,
    LayoutContainersModule,
    PagesContainersModule,
    RouterModule,
  ]
})
export class HomeModule {
}
