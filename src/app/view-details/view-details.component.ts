import { KeyValue } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatchesService } from '../services/matches.service';
import { WebsocketService } from '../services/websocket.service';
import { InningDetails, MatchDetails } from './model/view-details';
@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewDetailsComponent implements OnInit, OnDestroy {

  currentTab: number = 0;
  tabList = ['Info', 'Commentary', 'Live', 'Scoreboard', 'H2H'];
  filterBy: string;
  openedKeyEvents: boolean;
  currentMatchId: string;
  matchScheduleDate: string;
  currentHomeTeamId: string;
  currentAwayTeamId: string;
  matchDetails: MatchDetails = new MatchDetails();
  inningWiseDetails: {
    [key: number]: InningDetails
  } = {};
  originalOrder = (a: KeyValue<string, any>, b: KeyValue<string, any>): number => {
    return 0;
  }
  scoreboardCurrentInning: number = 1;
  commentaryCurrentInning: number = 0;
  latestInning: number = 0;
  subcription: Subscription;
  // matchNotStarted: boolean;
  homeTeamPreviousMatchesData: any;
  awayTeamPreviousMatchesData: any;
  bothTeamsPreviousMatchesData: any;

  constructor(private router: Router, private webSocketService: WebsocketService, private route: ActivatedRoute,
              private matchesService: MatchesService) {
    this.route.queryParams.subscribe(params => {
      this.currentMatchId = params['matchId']
      this.matchScheduleDate = params['matchDate'];
      this.currentHomeTeamId = params['homeTeamId'];
      this.currentAwayTeamId = params['awayTeamId'];
    }); //sr:match:34198397
    console.log(this.currentMatchId)
  }

  ngOnInit(): void {
    this.webSocketService.openMatchDetailsWsConnection(this.currentMatchId);
    this.subcription = this.webSocketService.matchDetailsSocketListener.subscribe(data => {
      // this.inningsData = data['inningsData'];
      if (data) {
        this.matchDetails = MatchDetails.fromJson(data);
        console.log(this.matchDetails)
        if (data['inningsData'].length === 0 ) {
          // this.matchNotStarted = true;
          this.tabList = ['Info'];
        } else {
          // this.matchNotStarted = false;
          this.tabList = ['Info', 'Commentary', 'Live', 'Scoreboard', 'H2H'];
        }
        for (var i in data['inningsData']) {
          this.inningWiseDetails[data['inningsData'][i]['number']] = InningDetails.fromJson(data['inningsData'][i]);
          if (this.commentaryCurrentInning === 0) {
            this.commentaryCurrentInning = data['inningsData'][i]['number'];
          }
          if (this.latestInning < data['inningsData'][i]['number']) {
            this.latestInning = data['inningsData'][i]['number'];
          }
          if (data.tournamentType === 'test' || data.tournamentType === 'first_class') {
            let inning: string;
            data['inningsData'][i]['number'] === 1 || data['inningsData'][i]['number'] === 2 ? inning = '1st Inn' : inning = '2nd Inn';
            this.inningWiseDetails[data['inningsData'][i]['number']]['headingDisplay'] = `${data['inningsData'][i]['battingTeamCode']} ${inning}`;
          }
        }
        console.log(this.inningWiseDetails)
      } else {
        this.matchesService.getMatchSchedulesByDate(this.matchScheduleDate).subscribe(res => {
          const matchData = res.filter(r => r.matchId === this.currentMatchId);
          this.matchDetails = MatchDetails.fromJson(matchData[0]);
          if (matchData[0]['inningsData'].length === 0 ) {
            this.tabList = ['Info'];
          } else {
            // this.matchNotStarted = false;
            this.tabList = ['Info', 'Commentary', 'Live', 'Scoreboard', 'H2H'];
          }
          for (var i in matchData[0]['inningsData']) {
            this.inningWiseDetails[matchData[0]['inningsData'][i]['number']] = InningDetails.fromJson(matchData[0]['inningsData'][i]);
            if (this.commentaryCurrentInning === 0) {
              this.commentaryCurrentInning = matchData[0]['inningsData'][i]['number'];
            }
            if (this.latestInning < matchData[0]['inningsData'][i]['number']) {
              this.latestInning = matchData[0]['inningsData'][i]['number'];
            }
            if (matchData[0].tournamentType === 'test' || matchData[0].tournamentType === 'first_class') {
              let inning: string;
              data['inningsData'][i]['number'] === 1 || matchData[0]['inningsData'][i]['number'] === 2 ? inning = '1st Inn' : inning = '2nd Inn';
              this.inningWiseDetails[matchData[0]['inningsData'][i]['number']]['headingDisplay'] = `${matchData[0]['inningsData'][i]['battingTeamCode']} ${inning}`;
            }
          }
          console.log(this.inningWiseDetails)
        })
      }
    })
    this.getHomeTeamLastMatchesData();
    this.getAwayTeamLastMatchesData();
    this.getH2HMatchesData()
  }

  changeCurrentScoreboardInning(inningNumber) {
    this.scoreboardCurrentInning = inningNumber;
  }

  changeCurrentCommentaryInning(inningNumber) {
    this.commentaryCurrentInning = inningNumber;
  }

  filterByKeyEvents(flag: string) {
    this.filterBy = flag;
  }

  openKeyEvents() {
    this.openedKeyEvents = true;
  }

  closeKeyEvents() {
    this.openedKeyEvents = false;
    this.filterBy = null;
  }

  changeTab(index: number) {
    this.currentTab = index;
  }

  /**
   * Method that gets last 5 matches of home team
   */
  getHomeTeamLastMatchesData() {
    this.matchesService.getTeamLastMatches(this.currentHomeTeamId).subscribe(res => {
      this.homeTeamPreviousMatchesData = res;
    })
  }

  /**
   * Method that gets last 5 matches of away team
   */
  getAwayTeamLastMatchesData() {
    this.matchesService.getTeamLastMatches(this.currentAwayTeamId).subscribe(res => {
      this.awayTeamPreviousMatchesData = res;
    })
  }

  /**
   * Method that gets head 2 head matches between 2 teams
   */
  getH2HMatchesData() {
    this.matchesService.getTeamH2HMatches(this.currentHomeTeamId, this.currentAwayTeamId).subscribe(res => {
      this.bothTeamsPreviousMatchesData = res;
    })
  }

  /**
   * Method that navigates to player page
   */
  navigateToPlayers(teamType: string) {
    this.router.navigate(['players'], {
      queryParams: {
        tournamentId: this.matchDetails.tournamentId,
        matchId: this.matchDetails.matchId,
        homeTeamId: this.matchDetails.homeTeamId,
        awayTeamId: this.matchDetails.awayTeamId,
        squadFor: teamType,
        homeTeamName: this.matchDetails.homeTeamName,
        awayTeamName: this.matchDetails.awayTeamName
      }
    });
  }
  navigateToHomePage(){
    this.router.navigate(['home']);
  }
  ngOnDestroy(): void {
    this.webSocketService.closeMatchDetailsWsConnection();
    this.subcription.unsubscribe();
  }
}
