
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ErrorService } from '../services/error.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  apiCallCount = 0;
  constructor(private errorService: ErrorService
  ) {}

  //identifies and handles a given HTTP Request
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.headers.has('startTimer')) {
    //   this.timer.setTimer();
    }
    this.apiCallCount++
    // this.spinner.show();
    let body = request.body;
    let headers;

    //add authorization bearer token to headers taking it from local storage
    if (localStorage.getItem('Authorization') === null) {
      headers = request.headers.set('Authorization', '');
    } else {
      headers = request.headers.set(
        'Authorization', `Bearer ${localStorage.getItem('Authorization')}`
        
      );
    }

    //add Content-Type (media type) of the resource prior to any encoding applied for sending
    if (request.headers.get('ignore_headers') !== 'true') {
      headers = headers.set('Content-Type', 'application/json');
      headers = headers.set('Content-Security-Policy', 'default-src');
    } else {
      headers = headers.delete('Authorization');
    }
    const updatedRequest = request.clone({
      headers,
      body,
    });
    return next.handle(updatedRequest).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            event = event.clone({
              //modifies HTTP response body
              body: this.modifyBody(event.body, event.status),
            });
          }
          return event;
        },
        (error) => {
          this.errorService.errorHandler(error);
        }
      ),
      finalize(() => {
        this.apiCallCount--;
        if (this.apiCallCount === 0) {
        //   this.spinner.hide();
        }
      })
    );
  }

  /**
   * Method that modifies event body
   * @param body
   * @param status
   */
  private modifyBody(body: any, status: any) {}
}
