import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from 'src/app/shared/services/auth.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {NotifService} from '../../../shared/services/notif.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerForm') registerForm: NgForm;
  buttonDisabled = false;
  buttonState = '';
  passwordMismatch = false;

  constructor(private authService: AuthService,
              private notifService: NotifService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.registerForm.valid || this.buttonDisabled) {
      return;
    }
    if (this.registerForm.value.password !== this.registerForm.value.repPassword) {
      this.passwordMismatch = true;
      return;
    }

    this.buttonDisabled = true;
    this.buttonState = 'show-spinner';

    this.authService.register(this.registerForm.value)
      .subscribe(() => {
        this.notifService.successNotification('Registered Successfully');
        this.router.navigate(['/user/login']);
      }, (error) => {
        this.notifService.errorNotification(error);
        this.buttonDisabled = false;
        this.buttonState = '';
      });
  }
}
