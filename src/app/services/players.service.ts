import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as apiUrls from '../core/apiUrls';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http: HttpClient) { }

  getTeamSquadData(data: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('tournament_id', data.tournamentId);
    params = params.append('match_id', data.matchId);
    params = params.append('homeTeamId', data.homeTeamId);
    params = params.append('awayTeamId', data.awayTeamId);
    return this.http.get(apiUrls.getSquadDataEndPoint, {params}).pipe(
      map((response) => {
        return response;
      })
    )
  }

  getIccRankings(): Observable<any>{
    return this.http.get(apiUrls.getIccRankings).pipe(
      map((response) => {
        return response;
      })
    )
  }
}
