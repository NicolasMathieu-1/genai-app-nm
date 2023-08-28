import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DeployedModelComponent } from './components/deployed-model/deployed-model.component';
import { ConversationModelComponent } from './components/conversation-model/conversation-model.component';
import { AwsSearchComponent } from './components/aws-search/aws-search.component';
import { SkillsearchComponent } from './components/skillsearch/skillsearch.component';
import { JobprofileComponent } from './components/jobprofile/jobprofile.component';
import { PerfanalysisComponent } from './components/perfanalysis/perfanalysis.component';
import { TrainingsuggestionComponent } from './components/trainingsuggestion/trainingsuggestion.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "skillsearch", component: SkillsearchComponent },
  { path: "jobprofile", component: JobprofileComponent },
  { path: "perfanalysis", component: PerfanalysisComponent},
  { path: "trainingsuggestion", component: TrainingsuggestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
