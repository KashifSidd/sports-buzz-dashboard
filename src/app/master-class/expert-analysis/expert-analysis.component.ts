import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expert-analysis',
  templateUrl: './expert-analysis.component.html',
  styleUrls: ['./expert-analysis.component.scss']
})
export class ExpertAnalysisComponent implements OnInit {
  currentPlayingVideo;
  currentVideoPlayingIndex: number;
  testing = [1];
  constructor() { }

  ngOnInit(): void {
  }
   /**
   * Method that play one video at a time
   * and pause other video before playing new one
   * @param event 
   * @param index 
   */
    onPlayingVideo(event, index) {
      event.preventDefault();
      // play the video that is chosen by the user
      if (this.currentPlayingVideo === undefined) {
        this.currentPlayingVideo = event.target;
        this.currentPlayingVideo.play();
      } else {
        // if the user plays a new video, pause the last one and play the new one
        if (event.target !== this.currentPlayingVideo) {
          this.currentPlayingVideo.pause();
          this.currentPlayingVideo = event.target;
          this.currentPlayingVideo.play();
        }  
      }
     setTimeout(()=> { this.currentVideoPlayingIndex = index},100)
    }
  
    /**
     * Method that invokes on pausing the video
     */
    onPausingVideo() {
      this.currentVideoPlayingIndex = null;
    }
     /**
   * Method that play video on clicking of 'play' image
   * @param index 
   */
  playVideo(index){
    console.log(document.getElementById(index))
    const video =document.getElementById(index);
    if (this.currentPlayingVideo !== undefined) {
      this.currentPlayingVideo.pause();
    }
      this.currentPlayingVideo = video;
      this.currentPlayingVideo.play();
      this.currentVideoPlayingIndex = index;
  }

}
