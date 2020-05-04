import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {confirmPasswordValidator} from '../../validators/confirm-password.validator';
import {LoginModel} from '../../../models/login/login.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              public router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      psconfirm: ['', Validators.required],
    }, {validator: confirmPasswordValidator });
  }

  isRequired(controlName: string) {
    return !!(this.form.controls[controlName].dirty || this.form.controls[controlName].touched) && this.form.controls[controlName].invalid && this.form.controls[controlName].errors.required;
  }

  isEmailValid() {
    return !!(this.form.controls.email.dirty || this.form.controls.email.touched) && this.form.controls.email.invalid && this.form.controls.email.errors.email;
  }

  isPsconfirmValid() {
    return !!(this.form.controls.psconfirm.dirty || this.form.controls.psconfirm.touched) && this.form.controls.psconfirm.invalid && this.form.controls.psconfirm.errors.psconfirm;
  }

  onSubmit() {
    if (this.form.value) {
      const user = {username: this.form.controls.username.value, password: this.form.controls.password.value} as LoginModel;
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/login']);
    }
  }

}
