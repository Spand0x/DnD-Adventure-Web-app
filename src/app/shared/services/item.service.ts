import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Weapon} from '../models/weapon.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiUrl = environment.apiUrl;
  private requestMapping = '/items';
  private url = this.apiUrl + this.requestMapping;

  constructor(private http: HttpClient) {
  }

  createWeapon(weapon: Weapon): Observable<Weapon> {
    return this.http.post<Weapon>(`${this.url}/weapon`, weapon);
  }

}
