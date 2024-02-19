import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { GameFormats } from '../view-details/model/players';

@Component({
  selector: 'app-icc-rankings-gender',
  templateUrl: './icc-rankings-gender.component.html',
  styleUrls: ['./icc-rankings-gender.component.scss']
})
export class IccRankingsGenderComponent implements OnInit {
  currentTab: number = 0;
  currentTabName:string="batsmen";
  currentGameFormatName:string="tests";
  innerTabList=['Batting','Bowling','All-rounder','Teams'];
  dataOfGameFormats:{
    batsmen: GameFormats,
    bowlers:GameFormats,
    allRounders:GameFormats,
    teams:GameFormats
  }={batsmen:new GameFormats(),bowlers:new GameFormats(),allRounders:new GameFormats(),teams:new GameFormats()};
  constructor( private playerService : PlayersService) { }

  ngOnInit(): void {
    this.playerService.getIccRankings().subscribe((res)=>{
      this.dataOfGameFormats['batsmen']=GameFormats.fromJson(res['batsmen']);
      this.dataOfGameFormats['bowlers']=GameFormats.fromJson(res['bowlers']);
      this.dataOfGameFormats['allRounders']=GameFormats.fromJson(res['all-rounders']);
      this.dataOfGameFormats['teams']=GameFormats.fromJson(res['teams']);
      console.log(this.dataOfGameFormats)
    });
  }
  changeTab(index: number) {
    this.currentTab = index;
    this.currentGameFormatName='tests';
    this.currentTabName=Object.keys(this.dataOfGameFormats)[this.currentTab];
  }

}
