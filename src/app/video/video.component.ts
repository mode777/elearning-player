import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Video } from 'src/models/elearning';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  public src: string;
  public start: number;
  public end: number;
  public videoHasLoaded: Promise<void>;

  @ViewChild('video') videoRef;
  public resolveVideo: (el: HTMLVideoElement) => void;
  public $video = new Promise<HTMLVideoElement>((res,rej)=> this.resolveVideo = res);

  @Input() set model(value: Video){ this.init(value) }
  @Input() set playing(value: boolean){ this.setPlaying(value) }
  @Output() finished = new EventEmitter();
  @Output() progress = new EventEmitter<number>();
  
  constructor() { }
  
  public time = 0
  
  async init(value: Video){
    var video = await this.$video;
    if(this.src != value.src){
      this.src = value.src;
      this.videoHasLoaded = new Promise((res,rej) => video.onloadedmetadata = <any>res)
    }
    await this.videoHasLoaded;
    this.start = value.start || 0;
    this.end = value.end || video.duration;
    video.currentTime = this.start;
  }
  
  ngAfterViewInit() {
    this.resolveVideo(this.videoRef.nativeElement);
  }
  

  // togglePlay(){
  //   if (this.video.paused || this.video.ended) {
  //     this.video.play();
  //     //this.playText = "Pause"
  //   } else {
  //     this.video.pause();
  //     //this.playText = "Play";
  //     //this.launchQuiz()
  //   }
  // }

  // videoLoaded(){
  //   //this.duration= this.video.duration
  // }

  async onUpdate(ev){
    var video = await this.$video;
    this.time = Math.min(video.currentTime, this.end)
    this.progress.emit((this.time - this.start) / (this.end - this.start));
    if(this.time == this.end){
      video.pause();
      this.finished.emit();
    } 
  }

  ngOnInit(): void {
  }

  async setPlaying(isPlaying: boolean){
    var video = await this.$video;
    if(this.time != this.end){
      if(isPlaying) {
        video.play();
      } else {
        video.pause()
      }
    } 
  }

}
