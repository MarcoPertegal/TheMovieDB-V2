import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { AccountDetailsResponse } from '../models/account-details.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccountDetails(): Observable<AccountDetailsResponse> {
    let sessionId = localStorage.getItem('SESSION_ID');
    return this.http.get<AccountDetailsResponse>(`${environment.baseUrl}/account?session_id=${sessionId}&api_key=${environment.apiKeyMarco}`,
      {
        headers: {
          'Authorization': `Bearer ${environment.tmdbTokenMarco}`
        }
      });
  }
}
