import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';
import {catchError, switchMap} from 'rxjs/operators';

/** Inject withCredentials into every request. */
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      withCredentials: true
    });
    return next.handle(request).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        return this.handleAuthError(request, next);
      } else {
        return throwError(error);
      }
    }));
  }

  private handleAuthError(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      return this.authService.refreshToken().pipe(
        switchMap((token: any) => {
          this.isRefreshing = false;
          return next.handle(request); /** Send previous request again. */
        }),
        catchError(err => {
          this.authService.signOut();
          this.isRefreshing = false;
          this.router.navigate(['/user/login']);
          return throwError(of([]));
        }));
    }
    return next.handle(request);
  }
}
