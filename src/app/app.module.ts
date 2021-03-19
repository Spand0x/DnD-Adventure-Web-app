import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {ViewsModule} from './views/views.module';
import {TranslateModule} from '@ngx-translate/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {LayoutContainersModule} from './containers/layout/layout.containers.module';
import {HttpRequestInterceptor} from './shared/http.request.interceptor';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {NotifService} from './shared/services/notif.service';

@NgModule({
  imports: [
    BrowserModule,
    ViewsModule,
    AppRoutingModule,
    LayoutContainersModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
