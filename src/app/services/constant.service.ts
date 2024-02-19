import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  socket: Subject<any>;

  // Our constructor calls our websocket connect method
  constructor(private websocket: WebsocketService) {
    // this.socket = <Subject<any>>websocket
    //   .connect()
    //   .map((response: any): any => {
    //     return response;
    //   })
   }

  // Our simplified interface for sending
  // messages back to our socket.io server

  // sendMsg(msg) {
  //   this.socket.next(msg);
  // }
}
