import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionComponent } from './question.component';
import { Router } from '@angular/router';
import { Question } from '../Question';
import { By } from '@angular/platform-browser';

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

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  const mockRouter = {
    navigate: () => undefined
  };

  beforeEach(async(() => {
    spyOn(mockRouter, 'navigate');
    TestBed.configureTestingModule({
      declarations: [QuestionComponent],
      providers: [{ provide: Router, useValue: mockRouter }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    component.question = question;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate on click', () => {
    const container = fixture.debugElement.nativeElement.querySelector('.container');
    container.click();
    fixture.detectChanges();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['questions', 'details'], { queryParams: { url: question.url }});
  });
});
