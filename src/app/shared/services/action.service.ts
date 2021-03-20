import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Spell} from '../models/spell.model';
import {Observable} from 'rxjs';
import {Attack} from '../models/attack.model';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  private apiUrl = environment.apiUrl;
  private requestMapping = '/actions';
  private url = this.apiUrl + this.requestMapping;

  constructor(private http: HttpClient) {
  }

  createSpell(spell: Spell): Observable<Spell> {
    return this.http.post<Spell>(`${this.url}/spell`, spell);
  }

  createAttack(attack: Attack): Observable<Attack> {
    return this.http.post<Attack>(`${this.url}/attack`, attack);
  }
}
