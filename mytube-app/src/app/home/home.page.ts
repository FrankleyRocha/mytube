import { Component, OnDestroy, OnInit } from '@angular/core';
import { YtInfoService } from '../yt-info.service';
import * as Plyr from 'plyr';
declare const $:any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  
  videoId = 'bTqVqk7FSmY';

  formats!:any;

  posterUrl!:any;

  player!:Plyr;

  constructor(
    private yt : YtInfoService
  ) {}

  ngOnDestroy(): void {
    this.player.destroy();
  }

  initVideo(){
    this.player = new Plyr('#player',{
      clickToPlay: true,
      fullscreen : { enabled: false }
    });

    this.player.source = {
      type: 'video',
      sources: this.formats,
      poster: this.posterUrl          
    };                            
  }

  ngOnInit(): void {
                   
    this.yt.getInfo(this.videoId).subscribe( (data:any) => {

      console.log(data);
      
      this.posterUrl = data.videoDetails.thumbnails.sort( (a:any,b:any) => b.width - a.width )[0].url;
      console.log(this.posterUrl);
      
      this.formats = data.formats.filter( o => o.hasVideo && o.hasAudio).sort(
        (a:any,b:any) => a.itag - b.itag
      ).map( (a:any) => {
        return {
          src : a.url,
          type : a.mimeType.split(';')[0],
          size : +a.qualityLabel.split('p')[0]
        }
      });
      console.log(this.formats);
      
      this.initVideo();      
      
    });
    
  }

}
