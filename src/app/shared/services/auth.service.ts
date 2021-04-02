import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/operators';

export interface ISignInCredentials {
  username: string;
  password: string;
}

export interface ICreateCredentials {
  email: string;
  password: string;
  displayName: string;
}

export interface IPasswordReset {
  code: string;
  newPassword: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  currentUser: Observable<User>;

  private apiUrl = environment.apiUrl;
  private requestMapping = '/users';
  private url = this.apiUrl + this.requestMapping;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  get user(): User {
    return this.currentUserSubject.value;
  }

  signIn(credentials: ISignInCredentials): Promise<any> {
    return this.http.post(environment.apiUrl + '/login',
      {username: credentials.username, password: credentials.password},
      {observe: 'response'})
      .toPromise()
      .then(response => {
        return this.getUserInfo().toPromise;
      }, () => {
        throw new Error('Wrong email or password.');
      });
  }

  isLoggedIn(): Observable<boolean> {
    return this.getUserInfo().pipe(map(() => true), catchError(err => of(false)));
  }

  getUserInfo(): Observable<User> {
    return this.http.get<User>(environment.apiUrl + '/users/info')
      // @ts-ignore
      .pipe<User>(map(user => this.currentUserSubject.next(user)));
  }

  signOut() {
    return this.http.post(environment.apiUrl + '/logout', null)
      .pipe(map(res => {
        this.currentUserSubject.next(null);
      }));
  }

  refreshToken(): Observable<any> {
    return this.http.post<any>(environment.apiUrl + '/auth/token', null);
  }

  register(userRegistration): Observable<any> {
    return this.http.post(`${this.url}/register`, userRegistration);
  }

  getRoles(): string[] {
    return this.user.roles;
  }

  // Todo: Not implemented yet:
  sendPasswordEmail(email) {
    // return from(this.afAuth.auth.sendPasswordResetEmail(email));
  }

  resetPassword(credentials: IPasswordReset) {
    // return from(this.afAuth.auth.confirmPasswordReset(credentials.code, credentials.newPassword));
  }

}
