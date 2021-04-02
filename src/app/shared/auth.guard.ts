import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      // const requiresLogin = route.data.redirect;
      // 1. Check if the user is logged in
      this.authenticationService.isLoggedIn()
        .subscribe((isLoggedIn) => {
          if (isLoggedIn) {
            // 2. Check if the user has the role to view this page.
            // let roles = this.authenticationService.getRoles();
            resolve(true);
          } else {
            reject(false);
            this.router.navigate(['index'], {queryParams: {returnUrl: state.url}});
          }
        });
    });
  }

}
