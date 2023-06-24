import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  email_pattern = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$';
  password_pattern = '.{2,}';

  constructor(
    private formBuilder: FormBuilder,
    private _AuthService: AuthServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl({ value: '', disabled: false }, [
        Validators.required,
        Validators.pattern(this.email_pattern),
      ]),
      password: new FormControl({ value: '', disabled: false }, [
        Validators.required,
        Validators.pattern(this.password_pattern),
      ]),
      rememberMe: new FormControl({ value: '', disabled: false }),
    });
  }

  onLogin(): void {

    if (this.loginForm.value.rememberMe === '') {
      if (this.loginForm.invalid) {
        return;
      }
      if (this.loginForm.valid) {
        this._AuthService
          .onLogin(this.loginForm.value)
          .subscribe(returnApiData => {
            console.log(returnApiData)
            this.loginForm.reset();
            // formDirective.resetForm();
          });
      }
    } else {
      if (this.loginForm.invalid) {
        return;
      }
      if (this.loginForm.valid) {

      }
    }
  }
}
