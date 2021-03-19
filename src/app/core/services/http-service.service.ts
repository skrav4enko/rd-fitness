import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient: HttpClient) { }

  get<T>(url: string, showLoader = true): Observable<T> {
    return this.httpClient.get<T>(url);
  }
}
