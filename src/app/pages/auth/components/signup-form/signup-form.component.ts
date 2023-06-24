import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {



  signupForm: FormGroup;
  formDirective: FormGroupDirective;


  name_pattern = "^[ a-zA-Z][a-zA-Z ]*$";
  phone_pattern = "[7-9]{1}[0-9]{9}";
  email_pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
  password_pattern = ".{2,}";




  constructor(private formBuilder: FormBuilder, private _AuthService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstname: new FormControl({ value: "", disabled: false }, [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(this.name_pattern)]),
      lastname: new FormControl({ value: "", disabled: false }, [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(this.name_pattern)]),
      phone: new FormControl({ value: "", disabled: false }, [Validators.required, Validators.pattern(this.phone_pattern)]),
      email: new FormControl({ value: "", disabled: false }, [Validators.required, Validators.pattern(this.email_pattern)]),
      password: new FormControl({ value: "", disabled: false }, [Validators.required, Validators.pattern(this.password_pattern)]),
      Confirm_password: new FormControl({ value: "", disabled: false }),
    })

  }




  onSignup(formDirective: FormGroupDirective) {
    if (this.signupForm.invalid) {
      return;
    }
    this._AuthService
      .createAdmin(this.signupForm.value)
      .subscribe(returnApiData => {
        this.signupForm.reset();
        formDirective.resetForm();
      });


  }



}