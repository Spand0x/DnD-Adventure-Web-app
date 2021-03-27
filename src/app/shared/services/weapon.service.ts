import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Weapon} from '../models/weapon.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {

  private apiUrl = environment.apiUrl;
  private requestMapping = '/weapons';
  private url = this.apiUrl + this.requestMapping;

  constructor(private http: HttpClient) {
  }

  createWeapon(weapon: Weapon): Observable<Weapon> {
    return this.http.post<Weapon>(`${this.url}`, weapon);
  }

  findAllBasicDescription(): Observable<Weapon[]> {
    return this.http.get<Weapon[]>(`${this.url}/basic-info`);
  }

  getAllPaginated(searchValue: string, pageNumber: number, pageSize: number): Observable<any> {
    return this.http.get(`${this.url}/all?search=${searchValue}&page=${pageNumber}&size=${pageSize}`);
  }
}
