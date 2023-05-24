import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuestionComponent } from './components/question/question.component';
import { AnswersComponent } from './components/answers/answers.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'answers', component:  AnswersComponent },
  { path: '', redirectTo: '/dashboard',  pathMatch: 'full'},
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
