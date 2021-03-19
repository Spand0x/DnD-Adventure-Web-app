import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Modifier} from '../models/stats-modifiers.model';

@Injectable({
  providedIn: 'root'
})
export class ModifierService {

  private apiUrl = environment.apiUrl;
  private requestMapping = '/modifiers';
  private url = this.apiUrl + this.requestMapping;

  constructor(private http: HttpClient) {
  }

  save(modifier: Modifier): Observable<Modifier> {
    return this.http.post<Modifier>(`${this.url}`, modifier);
  }

  findAll(): Observable<Modifier[]> {
    return this.http.get<Modifier[]>(`${this.url}/all`);
  }
}
