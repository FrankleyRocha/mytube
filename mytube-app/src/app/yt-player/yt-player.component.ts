import { Component, Input, OnInit } from '@angular/core';
declare const YT : any;

@Component({
  selector: 'app-yt-player',
  templateUrl: './yt-player.component.html',
  styleUrls: ['./yt-player.component.scss'],
})
export class YtPlayerComponent implements OnInit {

  @Input("video-id") videoId!:string;

  constructor() { }

  ngOnInit() {
    let player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      playerVars: { 
        'rel':0, 
        'autoplay': 1, 
        'controls': 1, 
        'modestbranding':1 
      },
      videoId: this.videoId,
      events: {
        'onReady': e => {
          //e.target.playVideo();
        },
        'onStateChange': e => {

        }
      }
    });
  }

}
