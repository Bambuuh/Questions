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
  private question: Question;

  constructor(
    private route: ActivatedRoute,
    private questionsService: QuestionsService
  ) {
    this.route.queryParams.subscribe(params => (this.url = params.url));
  }

  ngOnInit() {
    this.fetchChoices()
      .subscribe((question: Question) => (this.question = question));
  }

  public getVotePercentage(index: number) {
    const choice = this.question.choices[index];
    const total = this.question.choices.reduce((acc: number, curr) => {
      return acc + curr.votes;
    }, 0);

    return Math.round((choice.votes / total) * 100);
  }

  public fetchChoices() {
    return this.questionsService
      .get(this.url);
  }

  public updateVotes(event: { choice: string, url: string, votes: 76 }) {
    this.fetchChoices().subscribe((question: Question) => {
      this.question = question;
      const votedChoice = this.question.choices.find(choice => choice.choice === event.choice);
      votedChoice.votes = Math.max(votedChoice.votes, event.votes);
    });
  }
}
