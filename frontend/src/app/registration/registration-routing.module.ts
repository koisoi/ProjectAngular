import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationComponent} from "./registration.component";
import {PersonalDataComponent} from "./personal-data/personal-data.component";
import {EducationComponent} from "./education/education.component";
import {NgtuEducationComponent} from "./ngtu-education/ngtu-education.component";
import {CareerComponent} from "./career/career.component";

const routes: Routes = [
  {
    path: '', component: RegistrationComponent, children: [
      { path: 'personal-data', component:PersonalDataComponent},
      { path: 'education', component:EducationComponent},
      { path: 'ngtu-education', component:NgtuEducationComponent},
      { path: 'career', component:CareerComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
