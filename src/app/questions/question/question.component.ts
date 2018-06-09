import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../Question';
import { Choice } from '../Choice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;

  public choices: Choice[];

  constructor(private router: Router) {}

  ngOnInit() {
    this.choices = this.question.choices;
  }

  public goToQuestionDetails() {
    this.router.navigate(['questions', 'details'], { queryParams: { url: this.question.url }});
  }
}
