import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private toastrService: ToastrService) { }

    /**
 * Method that handle errors
 * @param error
 * @returns boolean
 */
     errorHandler(error: HttpErrorResponse): boolean {
    this.toastrService.error(error.error.message);
      return false;
    }
}
