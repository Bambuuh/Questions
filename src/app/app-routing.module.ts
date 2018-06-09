import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionDetailComponent } from './questions/question/question-detail/question-detail.component';

const routes: Routes = [
  {
    path: 'questions',
    component: QuestionsComponent,
  },
  {
    path: 'questions/details',
    component: QuestionDetailComponent,
  },
  {
    path: '',
    redirectTo: '/questions',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
