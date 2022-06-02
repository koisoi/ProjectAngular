import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SystemModule } from './system/system.module';
import { SwiperModule } from "swiper/angular";
import {RegistrationModule} from "./registration/registration.module";
import {AuthModule} from "./auth/auth.module";
import { AngularYandexMapsModule} from "angular8-yandex-maps";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SystemModule,
    SwiperModule,
    AuthModule,
    RegistrationModule,
    AngularYandexMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
