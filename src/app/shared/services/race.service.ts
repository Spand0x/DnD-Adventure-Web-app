import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Race} from '../models/race.model';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  private apiUrl = environment.apiUrl;
  private requestMapping = '/races';
  private url = this.apiUrl + this.requestMapping;

  constructor(private http: HttpClient) {
  }

  save(race: Race): Observable<Race> {
    return this.http.post<Race>(`${this.url}`, race);
  }

  getAllRaces(): Observable<Race[]> {
    return this.http.get<Race[]>(`${this.apiUrl}/races`);
  }
}
