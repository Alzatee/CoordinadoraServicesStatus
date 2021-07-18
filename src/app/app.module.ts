import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './layout/content/content.component';
import { HeaderComponent } from './layout/header/header.component';
import { NotFoundPageComponent } from './layout/not-found-page/not-found-page.component';
import { InterceptorServicesService } from '@core/interceptor/interceptor-services.service';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    NotFoundPageComponent
  ],
  imports: [
    SharedModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { // Interceptor propio.
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorServicesService,
      multi: true
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
