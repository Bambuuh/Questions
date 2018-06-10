import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDetailComponent } from './question-detail.component';
import { ChoiceComponent } from './choice/choice.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { QuestionsService } from '../../../questions.service';
import { Question } from '../../Question';
import { Observable } from 'rxjs';
import {  } from 'rxjs/operators';

const question: Question = {
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
};

describe('QuestionDetailComponent', () => {
  let component: QuestionDetailComponent;
  let fixture: ComponentFixture<QuestionDetailComponent>;

  const mockQuestionsService = {
    get: () => new Observable(observer => observer.next(question))
  };

  const fakeActivatedRoute = {
    queryParams: { subscribe: () => undefined },
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionDetailComponent, ChoiceComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        { provide: QuestionsService, useValue: mockQuestionsService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    spyOn(fakeActivatedRoute.queryParams, 'subscribe');
    expect(component).toBeTruthy();
  });

  it('should select choice on click', () => {
    spyOn(component, 'select');
    component.ngOnInit();
    fixture.detectChanges();
    const choice = fixture.debugElement.nativeElement.querySelector('app-choice');
    choice.click();
    fixture.detectChanges();
    expect(component.select).toHaveBeenCalled();
  });
});
