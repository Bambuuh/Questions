import { Component } from '@angular/core';
import { QuestionsService } from './questions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  // injecting QuestionsService to fetch the entrypoint
  constructor(private questionsService: QuestionsService) {}

  public entryPointLoaded() {
    return this.questionsService.isEntryPointLoaded();
  }
}
