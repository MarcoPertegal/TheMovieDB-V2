import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieListResponse } from '../models/movie-list.interface';
import { environment } from 'src/environments/environment';

const API_BASE_URL = '/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularList(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${environment.baseUrl}${API_BASE_URL}/popular?api_key=${environment.apiKeyFran}`);
  }

  getMovies(page: number): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${environment.baseUrl}${API_BASE_URL}/popular?api_key=${environment.apiKeyFran}&page=${page}`);
  }
}
