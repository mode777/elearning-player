import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ContentItem, ELearning } from 'src/models/elearning';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  public progress = 0;
  public title = "";
  public content: ContentItem[] = [];
  public item: ContentItem = <any>{};
  public itemIndex = 0;
  public isPlaying = false;
  public isContentFinished = false;
  
  @Input() set model(v: ELearning) { this.init(v) }
  
  constructor(/*private modalService: NgbModal*/) {}
  
  private init(v: ELearning){
    if(v == null) return;
    this.title = v.title;
    this.content = v.content;
    this.initItem(0);
  }

  private initItem(index: number){
    this.itemIndex = index;
    this.item = this.content[index];
    this.progress = 0;
    this.isContentFinished = false;
  }
  
  public contentFinished(){
    this.isContentFinished = true;
    // if(this.itemIndex < this.content.length-1){
    //   this.initItem(this.itemIndex + 1);
    // }
  }

  public next(){
    this.initItem(this.itemIndex + 1)
  }
  
  public prev(){
    this.initItem(this.itemIndex - 1)
  }

  // launchQuiz(){
  //   const modalRef = this.modalService.open(QuizModalComponent);
  //   modalRef.componentInstance.name = 'World';
  // }

  ngOnInit(): void {
  }

}
