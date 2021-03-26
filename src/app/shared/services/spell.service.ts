import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Spell} from '../models/spell.model';
import {Observable} from 'rxjs';
import {SpellName} from '../models/spell-name.model';

@Injectable({
  providedIn: 'root'
})
export class SpellService {

  private apiUrl = environment.apiUrl;
  private requestMapping = '/spells';
  private url = this.apiUrl + this.requestMapping;

  constructor(private http: HttpClient) {
  }

  create(spell: Spell): Observable<Spell> {
    return this.http.post<Spell>(`${this.url}`, spell);
  }

  getAllNames(): Observable<SpellName[]> {
    return this.http.get<SpellName[]>(`${this.url}/names`);
  }

  getById(uuid: string): Observable<Spell> {
    return this.http.get<Spell>(`${this.url}/${uuid}`);
  }
}
