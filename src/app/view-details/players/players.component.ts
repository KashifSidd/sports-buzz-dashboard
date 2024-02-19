import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';
import { Squad } from '../model/players';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  routeQueryParams: any;
  teamSquads: {
    [key: string]: Squad
  } = {};
  teamType: string = 'homeTeam';
  currentTeamName: string
  constructor(private router: Router, private activeRoute: ActivatedRoute, private playersService: PlayersService) {
    this.activeRoute.queryParams.subscribe(params => {
      this.routeQueryParams = params;
      this.teamType = params['squadFor'];
      if (this.teamType === 'homeTeam') {
        this.currentTeamName = this.routeQueryParams.homeTeamName
      } else {
        this.currentTeamName = this.routeQueryParams.awayTeamName
      }
      console.log(this.currentTeamName)
    })
   }

  ngOnInit(): void {
    console.log(this.routeQueryParams)
    this.playersService.getTeamSquadData(this.routeQueryParams).subscribe(res => {
      // this.teamSquads = res;
      if (res['team1Squad']) {
        this.teamSquads['homeTeam'] = new Squad();
        this.teamSquads['homeTeam']['playingXI'] = res['team1Squad']['homeTeamPlayingXI'];
        this.teamSquads['homeTeam']['onBench'] = res['team1Squad']['homenotPlaying'];
      }
      if (res['team2Squad']) {
        this.teamSquads['awayTeam'] = new Squad();
        this.teamSquads['awayTeam']['playingXI'] = res['team2Squad']['awayTeamPlayingXI'];
        this.teamSquads['awayTeam']['onBench'] = res['team2Squad']['awaynotPlaying'];
      }
      console.log(this.teamSquads)
    })
  }

  navigateToPlayerProfile() {
    this.router.navigate(['player-profile']);
  }
}
