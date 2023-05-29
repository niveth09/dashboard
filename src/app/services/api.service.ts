import { Injectable } from '@angular/core';
import { URLS } from '../api-url-constants';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  checkBalance(): Observable<any> {
    return this.http.get(URLS.CHECK_BALANCE_URL).pipe(
      map((res) => {
        return res;
      })
    );
  }
  getLastTransactions(): Observable<any> {
    return this.http.get(URLS.LAST_TRANSACTION_URL).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
