import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as apiUrls from '../core/apiUrls'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  /**
   * Method that registers new user
   * @param data 
   * @returns 
   */
  registerUser(data: any): Observable<any> {
    return this.http.post(apiUrls.postRegisterEndPoint, data).pipe(
      map((response) => {
        return response;
      })
    )
  }

  /**
   * Method to login user in the system
   * @param data 
   * @returns 
   */
  loginUser(data: any): Observable<any> {
    return this.http.post(apiUrls.postLoginEndPoint, data).pipe(
      map((response) => {
        return response;
      })
    )
  }
}
