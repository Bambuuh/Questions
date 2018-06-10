import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsComponent } from './questions.component';
import { Question } from './Question';
import { QuestionsService } from '../questions.service';
import { QuestionComponent } from './question/question.component';

const questions: Question[] = [{
  question: 'Game Genre',
  url: '/questions/10',
  published_at: '2015-05-27T21:22:26.670000+00:00',
  choices: [
    {
      choice: 'Shooter',
      votes: 117,
      url: '/questions/10/choices/70'
    },
    {
      choice: 'Action',
      votes: 49,
      url: '/questions/10/choices/69'
    },
    {
      choice: 'Action-adventure',
      votes: 22,
      url: '/questions/10/choices/71'
    },
    {
      choice: 'Strategy',
      votes: 9,
      url: '/questions/10/choices/74'
    },
    {
      choice: 'Simulation',
      votes: 7,
      url: '/questions/10/choices/73'
    },
    {
      choice: 'Role-playing',
      votes: 6,
      url: '/questions/10/choices/72'
    },
    {
      choice: 'Sports',
      votes: 6,
      url: '/questions/10/choices/75'
    }
  ]
}];

describe('QuestionsComponent', () => {
  let component: QuestionsComponent;
  let fixture: ComponentFixture<QuestionsComponent>;

  const mockQuestionsService = {
    getQuestions: () => undefined
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsComponent, QuestionComponent ],
      providers: [{ provide: QuestionsService, useValue: mockQuestionsService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    spyOn(mockQuestionsService, 'getQuestions').and.returnValue({
      subscribe: () => questions,
    });
    component.questions = questions;
    expect(component).toBeTruthy();
  });
});
