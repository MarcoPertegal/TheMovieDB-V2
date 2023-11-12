import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SerieListResponse } from '../models/serie-list.interface';
import { environment } from 'src/environments/environment';
import { SerieDetailsResponse } from '../models/serie-details.interface';
import { SerieVideosResponse } from '../models/serie-videos.interface';

const API_BASE_URL = '/tv';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private http: HttpClient) { }

  getPopularList(): Observable<SerieListResponse> {
    return this.http.get<SerieListResponse>(`${environment.baseUrl}${API_BASE_URL}/popular?api_key=${environment.apiKeyMarco}`);
  }
  getPopularListPage(page: number): Observable<SerieListResponse> {
    return this.http.get<SerieListResponse>(`${environment.baseUrl}${API_BASE_URL}/popular?api_key=${environment.apiKeyMarco}&page=${page}`);
  }

  getSerieId(id:number): Observable<SerieDetailsResponse> {
    return this.http.get<SerieDetailsResponse>(`${environment.baseUrl}${API_BASE_URL}/${id}?api_key=${environment.apiKeyFran}`)
  }

  getVideoById(id:number): Observable<SerieVideosResponse> {
    return this.http.get<SerieVideosResponse>(`${environment.baseUrl}${API_BASE_URL}/${id}/videos?api_key=${environment.apiKeyFran}`)
  }
}
