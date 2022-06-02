import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegistrationComponent } from "./registration.component";
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { EducationComponent } from './education/education.component';
import { NgtuEducationComponent } from './ngtu-education/ngtu-education.component';
import { CareerComponent } from './career/career.component';
import { RouterModule } from "@angular/router";
import { RegistrationRoutingModule } from "./registration-routing.module";
import { ScrollTopComponent } from './shared/components/scroll-top/scroll-top.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeadComponent } from './shared/components/head/head.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    PersonalDataComponent,
    EducationComponent,
    NgtuEducationComponent,
    CareerComponent,
    HeadComponent,
    FooterComponent,
    ScrollTopComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RegistrationRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class RegistrationModule { }
