import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as apiUrls from '../core/apiUrls'
@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  constructor(private http: HttpClient) { }

  /**
   * Method that gets all matches that are scheduled on that day
   * @returns 
   */
  getMatchSchedulesByDate(date: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('scheduled_date', date)
    return this.http.get(apiUrls.getMatchScheduleEndPoint, { params }).pipe(
      map((response) => {
        return response;
      })
    )
  }

  /**
   * Method that gets last matches of team 
   * @param teamId 
   * @returns 
   */
  getTeamLastMatches(teamId: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('team_id', teamId)
    return this.http.get(apiUrls.getTeamLastMatchesEndPoint, { params }).pipe(
      map((response) => {
        return response;
      })
    )
  }

  /**
   * Method that gets head to head matches b/w two teams
   * @param homeTeamId 
   * @param awayTeamId 
   * @returns 
   */
  getTeamH2HMatches(homeTeamId: string, awayTeamId: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('team1_id', homeTeamId)
    params = params.append('team2_id', awayTeamId)
    return this.http.get(apiUrls.getHeadToHeadMatchesEndPoint, { params }).pipe(
      map((response) => {
        return response;
      })
    )
  }
}
