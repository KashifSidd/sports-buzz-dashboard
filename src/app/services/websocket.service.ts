import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from './../../environments/environment';
import { EventEmitter, Injectable, NgZone } from '@angular/core';
import io, { Socket } from 'socket.io-client';
@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private homeScreenSocket: Socket;
  private matchDetailsSocket: Socket;
  homeScreenSocketListener: EventEmitter<any> = new EventEmitter();
  matchDetailsSocketListener: EventEmitter<any> = new EventEmitter();
  constructor(private readonly ngZone: NgZone, private spinner:NgxSpinnerService) {
    this.spinner.show();
    setTimeout(()=>{
     this.spinner.hide()},3000)
    // this.openWsConnection();
  }

  openHomeScreenWsConnection() {
    this.ngZone.runOutsideAngular(() => {
      this.homeScreenSocket = io(environment.wss_url, {
        query: { path: 'homescreen' },
        withCredentials: true,
      });
    });

    this.homeScreenSocket.on('message', (data) => {
      this.ngZone.run(() => {
        console.log(data);
        this.homeScreenSocketListener.emit(data);
      });
    });
  }

  closeHomeScreenWsConnection() {
    this.homeScreenSocket.close();
  }

  openMatchDetailsWsConnection(matchId) {
    this.ngZone.runOutsideAngular(() => {
      this.matchDetailsSocket = io('wss://api.sportsbuzz.com', {
        reconnection: true,
        reconnectionDelay: 500,
        reconnectionAttempts: Infinity,
        query: {
          path: "match_details",
          match_id: matchId
        },
        withCredentials: true
      });
    });
    this.matchDetailsSocket.on('message', (data) => {
      this.ngZone.run(() => {
        console.log(data);
        this.matchDetailsSocketListener.emit(data);
      });
    });
  }

  closeMatchDetailsWsConnection() {
    this.matchDetailsSocket.close();
  }
}
