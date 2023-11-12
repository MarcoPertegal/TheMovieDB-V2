import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieListResponse } from '../models/movie-list.interface';
import { environment } from 'src/environments/environment';
import { MovieDetailsResponse } from '../models/movie-details.interface';
import { MovieVideoResponse } from '../models/movie-trailer.interface';
import { Cast, CreditsResponse } from '../models/credits.interface';

const API_BASE_URL = '/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularList(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${environment.baseUrl}${API_BASE_URL}/popular?api_key=${environment.apiKeyMarco}`);
  }
  getPopularListPage(page: number): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${environment.baseUrl}${API_BASE_URL}/popular?api_key=${environment.apiKeyMarco}&page=${page}`);
  }
  getUpcomingList(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${environment.baseUrl}${API_BASE_URL}/upcoming?api_key=${environment.apiKeyMarco}`);
  }
  getMovieId(id: number): Observable<MovieDetailsResponse> {
    return this.http.get<MovieDetailsResponse>(`${environment.baseUrl}${API_BASE_URL}/${id}?api_key=${environment.apiKeyFran}`)
  }

  getVideoById(id: number): Observable<MovieVideoResponse> {
    return this.http.get<MovieVideoResponse>(`${environment.baseUrl}${API_BASE_URL}/${id}/videos?language=en-US&api_key=${environment.apiKeyFran}`);
  }

  getCast(id:number): Observable<CreditsResponse> {
    return this.http.get<CreditsResponse>(`${environment.baseUrl}${API_BASE_URL}/${id}/credits?api_key=${environment.apiKeyFran}`)
  }
}
