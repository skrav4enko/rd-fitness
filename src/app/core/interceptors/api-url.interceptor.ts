import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000';


@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newRequest = req.clone({
      url: this.getApiUrl(req),
    });

    return next.handle(newRequest)
  }


  private getApiUrl(req: HttpRequest<any>): string {
    return `${BASE_URL}/${req.url}`;
  }

}
