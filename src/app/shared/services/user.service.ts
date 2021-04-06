import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl;
  private requestMapping = '/users';
  private url = this.apiUrl + this.requestMapping;

  constructor(private http: HttpClient) {
  }

  getAllPaginated(searchValue: string, pageNumber: number, pageSize: number): Observable<any> {
    return this.http.get(`${this.url}/all?search=${searchValue}&page=${pageNumber}&size=${pageSize}`);
  }

  changeRole(user: User): Observable<any> {
    return this.http.post(`${this.url}/change-role`, user);
  }
}
