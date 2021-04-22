import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuizComponent } from './quiz/quiz.component';
import { QuizModalComponent } from './quiz-modal/quiz-modal.component';
import { QuestionComponent } from './question/question.component';
import { PlayerComponent } from './player/player.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuizModalComponent,
    QuestionComponent,
    PlayerComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
