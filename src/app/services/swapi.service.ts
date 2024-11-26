import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  private apiUrl = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) {}

  getCharacters(page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}people/?page=${page}`);
  }
  

  getPlanet(url: string): Observable<any> {
    return this.http.get(url);
  }

  
}

