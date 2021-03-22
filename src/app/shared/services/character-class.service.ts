import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CharacterClass} from '../models/characterClass.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterClassService {

  private apiUrl = environment.apiUrl;
  private requestMapping = '/classes';
  private url = this.apiUrl + this.requestMapping;

  constructor(private http: HttpClient) {
  }

  createClass(characterClass: CharacterClass): Observable<any> {
    return this.http.post(`${this.url}`, characterClass);
  }

  getAllClasses(): Observable<CharacterClass[]> {
    return this.http.get<CharacterClass[]>(`${this.url}`);
  }
}
