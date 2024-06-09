import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize, tap } from 'rxjs';
import { SpinnerService } from 'src/app/services/spinner.service';

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService) {}
  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  this.spinnerService.showSpinner();
  return next.handle(request).pipe(finalize(() => {
      this.spinnerService.hideSpinner();
    }));
  }
}
