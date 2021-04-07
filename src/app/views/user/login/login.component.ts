import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/shared/services/auth.service';
import {environment} from '../../../../environments/environment';
import {NotifService} from '../../../shared/services/notif.service';

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
              private notifService: NotifService,
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

    this.authService.signIn(this.loginForm.value).subscribe((user) => {
        this.router.navigate(['/']);
      },
      (error) => {
        this.buttonDisabled = false;
        this.buttonState = '';
        this.notifService.errorNotification({error: 'Wrong password, please try again.'});
      });

  }
}
