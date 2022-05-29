import { Component, OnInit } from '@angular/core';
import * as Plyr from 'plyr';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() {

  }
  ngOnInit(): void {
    // Change "{}" to your options:
    // https://github.com/sampotts/plyr/#options
    const player = new Plyr('#player', {});

    // Expose player so it can be used from the console
    //(window as any).player = player;
  }

}
