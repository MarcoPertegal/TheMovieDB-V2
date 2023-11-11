import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleListResponse } from '../models/people-list.interface';
import { environment } from 'src/environments/environment';

const API_BASE_URL = '/person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getActorList(): Observable<PeopleListResponse> {
    return this.http.get<PeopleListResponse>(`${environment.baseUrl}${API_BASE_URL}/popular?api_key=${environment.apiKeyFran}`);
  }

  getActorsListPage(page: number): Observable<PeopleListResponse> {
    return this.http.get<PeopleListResponse>(`${environment.baseUrl}${API_BASE_URL}/popular?api_key=${environment.apiKeyFran}&page=${page}`);
  }
}
