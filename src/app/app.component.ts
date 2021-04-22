import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { servicesVersion } from 'typescript';
import { ELearningService } from './e-learning.service';
import { QuizModalComponent } from './quiz-modal/quiz-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elearning-player';
  $json = this.service.load("assets/example.json")

  constructor(private service: ELearningService){

  }
}
