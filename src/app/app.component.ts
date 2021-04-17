import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elearning-player';
  @ViewChild('video') videoRef;   
  public get video() : HTMLVideoElement { return this.videoRef.nativeElement }
  
  public playText = "Play"
  public time = 0
  public duration = 0

  togglePlay(){
    if (this.video.paused || this.video.ended) {
      this.video.play();
      this.playText = "Pause"
    } else {
      this.video.pause();
      this.playText = "Play";
    }
  }

  videoLoaded(){
    this.duration= this.video.duration
  }

  onUpdate(ev){
    this.time = this.video.currentTime
  }
}
