import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserRole} from '../models/user-role.model';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  private apiUrl = environment.apiUrl;
  private requestMapping = '/roles';
  private url = this.apiUrl + this.requestMapping;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<UserRole[]> {
    return this.http.get<UserRole[]>(`${this.url}/all`);
  }
}
