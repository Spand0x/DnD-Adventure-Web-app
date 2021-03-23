import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Spell} from '../models/spell.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpellService {

  private apiUrl = environment.apiUrl;
  private requestMapping = '/spells';
  private url = this.apiUrl + this.requestMapping;

  constructor(private http: HttpClient) { }

  create(spell: Spell): Observable<Spell> {
    return this.http.post<Spell>(`${this.url}`, spell);
  }
}
