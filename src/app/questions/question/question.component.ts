import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../Question';
import { Choice } from '../Choice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() question: Question;

  constructor(private router: Router) {}

  public goToQuestionDetails() {
    this.router.navigate(['questions', 'details'], { queryParams: { url: this.question.url }});
  }
}
