import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as apiUrls from '../core/apiUrls';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  /**
   * Method that gets top-stories data
   * @returns 
   */
  getTopStories(): Observable<any> {
    return this.http.get(apiUrls.getTopStoriesEndPoint).pipe(
      map((response) => {
        return response;
      })
    )
  }

  /**
   * Method that gets all latest-news data
   * @returns 
   */
  getLatestNews(data: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('offset', data.offset);
    params = params.append('limit', data.limit);
    return this.http.get(apiUrls.getLatestNewsEndPoint, {params}).pipe(
      map((response) => {
        return response;
      })
    )
  }

  /**
   * Method that gets cricket-news data
   * @param data 
   * @returns 
   */
  getCricketNews(data: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('offset', data.offset);
    params = params.append('limit', data.limit);
    return this.http.get(apiUrls.getCricketNewsEndPoint, {params}).pipe(
      map((response) => {
        return response;
      })
    )
  }

  /**
   * Method that gets football-news data
   * @param data 
   * @returns 
   */
  getFootballNews(data: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('offset', data.offset);
    params = params.append('limit', data.limit);
    return this.http.get(apiUrls.getFootballNewsEndPoint, {params}).pipe(
      map((response) => {
        return response;
      })
    )
  }

  /**
   * Method that gets all tennis-news data
   * @param data 
   * @returns 
   */
  getTennisNews(data: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('offset', data.offset);
    params = params.append('limit', data.limit);
    return this.http.get(apiUrls.getTennisNewsEndPoint, {params}).pipe(
      map((response) => {
        return response;
      })
    )
  }
}
