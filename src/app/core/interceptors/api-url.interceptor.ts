import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const newRequest = req.clone({
      url: this.getApiUrl(req),
    });

    return next.handle(newRequest);
  }

  private getApiUrl(req: HttpRequest<unknown>): string {
    return `${environment.apiUrl}/${req.url}`;
  }
}
