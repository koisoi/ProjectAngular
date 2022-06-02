import { AboutProjectComponent } from './about-project/about-project.component';
import { EventsComponent } from './events/events.component';
import { ProjectsComponent } from './projects/projects.component';
import { OutstandingStudentsComponent } from './outstanding-students/outstanding-students.component';
import { UniversitySuccessComponent } from './university-success/university-success.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HistoryComponent } from './history/history.component';
import { ContactsComponent } from "./contacts/contacts.component";
import { CreativityComponent } from './creativity/creativity.component';
import { SystemComponent } from './system.component';
import { NewsComponent } from './news/news/news.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { AlumniStoriesComponent } from './alumni-stories/alumni-stories.component';
import { InviteGroupmateComponent } from './invite-groupmate/invite-groupmate.component';
import { SuccessStoriesComponent } from './success-stories/success-stories.component';
import { AssociationComponent } from './association/association.component';
import { BranchesComponent } from './branches/branches.component';
import { CongressComponent } from './congress/congress.component';
import { DocumentsComponent } from './documents/documents.component';
import { ManagementComponent } from './management/management.component';
import { SuvenirsComponent } from './suvenirs/suvenirs.component';
import { HistoryNgtuComponent } from './history-ngtu/history-ngtu.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
    {
        path: '',
        component: SystemComponent,
        children: [
            { path: '', component: MainComponent },
            // новости
            { path: 'news', component: NewsComponent },
            // юбилейные встречи выпускников
            { path: 'meetings', component: MeetingsComponent },
            // истории выпускников
            { path: 'alumni-stories', component: AlumniStoriesComponent },
            // Успехи универститета
            { path: 'university-success', component: UniversitySuccessComponent },
            // Выдающиеся выпускники
            { path: 'outstanding-students', component: OutstandingStudentsComponent },
            // Проекты
            { path: 'projects', component: ProjectsComponent },
            // Пригласи одногруппника
            { path: 'invite-groupmate', component: InviteGroupmateComponent },
            // Истории успеха
            { path: 'success-stories', component: SuccessStoriesComponent },
            // События
            { path: 'events', component: EventsComponent },
            // О проекте
            { path: 'about-project', component: AboutProjectComponent },
            // История ассоциации
            { path: 'history', component: HistoryComponent },
            // Конгресс выпускников
            { path: 'congress', component: CongressComponent },
            // Контакты
            { path: 'contacts', component: ContactsComponent },
            // Творчество выпускников
            { path: 'creativity', component: CreativityComponent },
            // Руководство
            { path: 'management', component: ManagementComponent },
            // Филиалы и представительства
            { path: 'branches', component: BranchesComponent },
            // Филиалы и представительства Об ассоциации
            { path: 'association', component: AssociationComponent },
            // Отчетная документация
            { path: 'documents', component: DocumentsComponent },
            // История НГТУ
            { path: 'history-ngtu', component: HistoryNgtuComponent },
            // Поддержка НГТУ
            { path: 'support', component: SupportComponent },
            // Сувенирная продукция
            { path: 'suvenirs', component: SuvenirsComponent },
        ],
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class SystemRoutingModule { }
