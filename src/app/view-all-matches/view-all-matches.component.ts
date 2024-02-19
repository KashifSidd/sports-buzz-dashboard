import { Component, OnInit } from '@angular/core';
import { ConstantService } from '../services/constant.service';
import { WebsocketService } from '../services/websocket.service';

@Component({
  selector: 'app-view-all-matches',
  templateUrl: './view-all-matches.component.html',
  styleUrls: ['./view-all-matches.component.scss']
})
export class ViewAllMatchesComponent implements OnInit {

  allMatchesData: any
    liveMatchesData = [];
    upcomingMatchesData = [];
    finishedMatchesData = [];
  constructor(private constant: ConstantService, private webSocketService: WebsocketService) { }

  ngOnInit(): void {
    // this.webSocketService.openWsConnection();
    // this.webSocketService.socketListener.subscribe(data =>{
    //   // console.log('data', data);
    //   this.allMatchesData = data;
    //   this.liveMatchesData = [];
    //   this.upcomingMatchesData = [];
    //   this.finishedMatchesData = [];
    //   for (const i of data) {
    //     if(i['status'] === 'live') {
    //       this.liveMatchesData.push(i)
    //     }
    //     if (i['status'] === 'not_started') {
    //       this.upcomingMatchesData.push(i)
    //     }
    //     if (i['status'] === 'closed') {
    //       this.finishedMatchesData.push(i)
    //     }
    //   }
    // })
  }

}
