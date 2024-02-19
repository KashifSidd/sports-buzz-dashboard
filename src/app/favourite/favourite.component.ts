import { GameFormats } from './../view-details/model/players';
import { PlayersService } from './../services/players.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {
  isBrowsePlayerPage:boolean;
  isBrowseTeamsPage:boolean;
  isBrowseSeriesPage:boolean;
  isFavouritePage:boolean=true;
  currentTab: number = 0;
  currentTabName:string="batsmen";
  currentGameFormatName:string="test";
  innerTabList=['Batting','Bowling','All-rounder','Teams'];
  tabList = ['ICC Rankings - Men', 'ICC Rankings - Women'];
  dataOfGameFormats:{
    batsmen: GameFormats,
    bowlers:GameFormats,
    allRounders:GameFormats,
    teams:GameFormats
  }={batsmen:new GameFormats(),bowlers:new GameFormats(),allRounders:new GameFormats(),teams:new GameFormats()};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  showBrowsePlayerPage(){
    this.isBrowsePlayerPage=true;
    this.isBrowseTeamsPage=false;
    this.isBrowseSeriesPage=false;
    this.isFavouritePage=false;
  }
  showBrowseTeamsPage(){
    this.isBrowseTeamsPage=true;
    this.isBrowsePlayerPage=false;
    this.isBrowseSeriesPage=false;
    this.isFavouritePage=false;
  }
  showBrowseSeriesPage(){
    this.isBrowseSeriesPage=true;
    this.isBrowseTeamsPage=false;
    this.isBrowsePlayerPage=false;
    this.isFavouritePage=false;
  }
  showFavouritePage(){
    this.isBrowseSeriesPage=false;
    this.isBrowseTeamsPage=false;
    this.isBrowsePlayerPage=false;
    this.isFavouritePage=true;
  }
  changeTab(index: number) {
    this.currentTab = index;
    this.currentTabName=Object.keys(this.dataOfGameFormats)[this.currentTab];
  }
  
/**
   * Method that navigates to player page
   */
 navigateToPlayers(gender: string) {
  this.router.navigate(['icc-rankings-gender']);
}

}
