import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Choice } from '../../../Choice';
import { QuestionsService } from '../../../../questions.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {

 @Input() choice: Choice;
 @Input() votePercentage: number;
 @Input() selected: boolean;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
  }

  public getPercentageWidth() {
    return this.votePercentage + 'px';
  }
}

