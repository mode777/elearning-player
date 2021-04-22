import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/models/elearning';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question: Question;

  @Input() set model(v: Question){ this.init(v) }

  constructor() { }

  ngOnInit(): void {
  }

  init(v: Question){
    this.question = v;
  }

}
