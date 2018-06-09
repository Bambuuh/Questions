import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Question } from './Question';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  public questions: Question[];

  constructor(private questionsService: QuestionsService) {}

  ngOnInit() {
    this.questionsService.getGuestions().subscribe((response) => {
      this.questions = <Question[]>response.body;
    });
  }

}
