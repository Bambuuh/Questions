import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from '../../../questions.service';
import { Question } from '../../Question';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {
  private url: string;
  public question: Question;
  public selectedIndex: number;

  constructor(
    private route: ActivatedRoute,
    private questionsService: QuestionsService
  ) {
    this.route.queryParams.subscribe(params => (this.url = params.url));
  }

  ngOnInit() {
    this.fetchChoices().subscribe(
      (question: Question) => (this.question = question)
    );
  }

  public getVotePercentage(index: number) {
    const choice = this.question.choices[index];
    const total = this.question.choices.reduce((acc: number, curr) => {
      return acc + curr.votes;
    }, 0);

    return Math.round((choice.votes / total) * 100);
  }

  public fetchChoices() {
    return this.questionsService.get(this.url);
  }

  public vote() {
    let choice = this.question.choices[this.selectedIndex];
    const chosenIndex = this.selectedIndex;
    this.selectedIndex = undefined;
    this.questionsService
      .post(choice.url, {})
      .subscribe((data: { choice: string; url: string; votes: number }) => {
        this.fetchChoices().subscribe((question: Question) => {
          this.question = question;
          choice = this.question.choices[chosenIndex];
          choice.votes = Math.max(choice.votes, data.votes);
        });
      });
  }

  public select(index: number) {
    this.selectedIndex = index;
  }
}
