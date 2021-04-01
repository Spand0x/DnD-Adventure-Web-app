import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Character} from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiUrl = environment.apiUrl;
  private requestMapping = '/characters';
  private url = this.apiUrl + this.requestMapping;

  constructor(private http: HttpClient) {
  }

  createCharacter(data): Observable<any> {
    return this.http.post(`${this.url}`, data);
  }

  get(uuid: string): Observable<Character> {
    return this.http.get<Character>(`${this.url}/${uuid}`);
  }

  changeHp(uuid: string, newHp: number): Observable<any> {
    return this.http.post(`${this.url}/change-hp`, {uuid, currentHitPoints: newHp});
  }

  castSpell(uuid: string): Observable<any> {
    return this.http.post(`${this.url}/cast-spell`, {uuid});
  }
}
