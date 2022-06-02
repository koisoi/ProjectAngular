import { OutstandingStudentsComponent } from './outstanding-students/outstanding-students.component';
import { ProjectsComponent } from './projects/projects.component';
import { UniversitySuccessComponent } from './university-success/university-success.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { HeadComponent } from './shared/components/head/head.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { ScrollTopComponent } from './shared/components/scroll-top/scroll-top.component';
import { MainComponent } from './main/main.component';
import { NewsComponent } from './news/news/news.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { AlumniStoriesComponent } from './alumni-stories/alumni-stories.component';
import { SwiperModule } from "swiper/angular";
import { HistoryComponent } from './history/history.component';
import { CongressComponent } from './congress/congress.component';
import { CreativityComponent } from './creativity/creativity.component';
import { InviteGroupmateComponent } from './invite-groupmate/invite-groupmate.component';
import { SuccessStoriesComponent } from './success-stories/success-stories.component';
import { EventsComponent } from './events/events.component';
import { AboutProjectComponent } from './about-project/about-project.component';
import { AuthModule } from '../auth/auth.module';
import {ContactsComponent} from "./contacts/contacts.component";
import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';

const mapConfig: YaConfig = {
  apikey: 'API_KEY',
  lang: 'en_US',
};

@NgModule({
    declarations: [
        SystemComponent,
        HeadComponent,
        FooterComponent,
        ScrollTopComponent,
        MainComponent,
        NewsComponent,
        MeetingsComponent,
        AlumniStoriesComponent,
        UniversitySuccessComponent,
        ProjectsComponent,
        OutstandingStudentsComponent,
        HistoryComponent,
        CreativityComponent,
        ContactsComponent,
        CongressComponent,
        InviteGroupmateComponent,
        SuccessStoriesComponent,
        EventsComponent,
        AboutProjectComponent,
        SystemComponent,
        HeadComponent,
        FooterComponent,

    ],
    imports: [
        SystemRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        SwiperModule,
        AuthModule,
        AngularYandexMapsModule.forRoot(mapConfig)
    ],
    bootstrap: [SystemComponent]
})
export class SystemModule { }
export class AppModule {}
