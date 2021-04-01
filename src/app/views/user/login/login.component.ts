import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/shared/services/auth.service';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;
  prod: boolean;

  buttonDisabled = false;
  buttonState = '';

  constructor(private authService: AuthService,
              // private notifications: NotificationsService,
              private router: Router) {
    this.prod = environment.production;
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.loginForm.valid || this.buttonDisabled) {
      return;
    }
    this.buttonDisabled = true;
    this.buttonState = 'show-spinner';

    this.authService.signIn(this.loginForm.value).then((user) => {
        this.router.navigate(['/']);
      },
      (error) => {
        this.buttonDisabled = false;
        this.buttonState = '';
      });

  }
}
