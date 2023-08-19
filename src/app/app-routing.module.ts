import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DeployedModelComponent } from './components/deployed-model/deployed-model.component';
import { ConversationModelComponent } from './components/conversation-model/conversation-model.component';
import { AwsSearchComponent } from './components/aws-search/aws-search.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "deployed-model", component: DeployedModelComponent },
  { path: "chat-model", component: ConversationModelComponent },
  { path: "aws-search", component: AwsSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
