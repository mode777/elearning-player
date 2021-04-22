import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quiz } from 'src/models/elearning';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quiz: Quiz;

  @Input() set model(v: Quiz){ this.init(v) }
  @Output() finished = new EventEmitter();
  @Output() progress = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  async init(v: Quiz){
    this.quiz = v;
  }

}
