import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceComponent } from './choice.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { QuestionsService } from '../../../../questions.service';

describe('ChoiceComponent', () => {
  let component: ChoiceComponent;
  let fixture: ComponentFixture<ChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiceComponent ],
      imports: [HttpClientTestingModule],
      providers: [QuestionsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
