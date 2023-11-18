import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { AccountDetailsResponse } from '../models/account-details.interface';
import { Observable } from 'rxjs';
import { MovieListResponse } from '../models/movie-list.interface';
import { AddItemResponse } from '../models/add-item.interface';



@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccountDetails(): Observable<AccountDetailsResponse> {
    let sessionId = localStorage.getItem('SESSION_ID');
    return this.http.get<AccountDetailsResponse>(`${environment.baseUrl}/account?session_id=${sessionId}`,
      {
        headers: {
          accept: 'application/json',
          'Authorization': `Bearer ${environment.tmdbTokenMarco}`
        }
      });
  }


  getWatchListMovies(): Observable<MovieListResponse> {
    let accountId = localStorage.getItem('ACCOUNT_ID');
    let sessionId = localStorage.getItem('SESSION_ID');
    return this.http.get<MovieListResponse>(`${environment.baseUrl}/account/${accountId}/watchlist/movies?api_key=${environment.apiKeyMarco}&session_id=${sessionId}`)
  }
  getFavorites(): Observable<MovieListResponse> {
    let sessionId = localStorage.getItem('SESSION_ID');
    let accountId = localStorage.getItem('ACCOUNT_ID');

    return this.http.get<MovieListResponse>(
      `${environment.baseUrl}/account/${accountId}/favorite/movies?session_id=${sessionId}`,
      {
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${environment.tmdbTokenMarco}`
        }
      });
  }

  addWatchListsMovies(id: number): Observable<AddItemResponse> {
    let accountId = localStorage.getItem('ACCOUNT_ID');
    let sessionId = localStorage.getItem('SESSION_ID');
    return this.http.post<AddItemResponse>(`${environment.baseUrl}/account/${accountId}/watchlist?session_id=${sessionId}`,
      {
        "media_type": "movie",
        "media_id": id,
        "watchlist": true
      },
      {
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${environment.tmdbTokenMarco}`
        }
      }
    );
  }
  addMovieToFovorites(movieId: number): Observable<AddItemResponse> {
    let accountId = localStorage.getItem('ACCOUNT_ID');
    return this.http.post<AddItemResponse>(`${environment.baseUrl}/account/${accountId}/favorite`,
      {
        media_type: "movie",
        media_id: movieId,
        favorite: true
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${environment.tmdbTokenMarco}`
        }
      }
    )
  }
  deleteMovieFromFovorites(movieId: number): Observable<AddItemResponse> {
    let accountId = localStorage.getItem('ACCOUNT_ID');
    return this.http.post<AddItemResponse>(`${environment.baseUrl}/account/${accountId}/favorite`,
      {
        media_type: "movie",
        media_id: movieId,
        favorite: false
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${environment.tmdbTokenMarco}`
        }
      }
    )
  }
}



