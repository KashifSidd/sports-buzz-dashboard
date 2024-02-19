import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.scss']
})
export class PlayerProfileComponent implements OnInit {

  currentTab: number = 0;
  tabList = ['Overview', 'Stats', 'Records', 'News'];
  constructor() { }

  ngOnInit(): void {
  }
  
  changeTab(index: number) {
    this.currentTab = index;
  }

}
