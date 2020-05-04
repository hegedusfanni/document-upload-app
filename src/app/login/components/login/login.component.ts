import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {LoginModel} from '../../../models/login/login.model';
import { isEqual } from 'lodash';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              public router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const savedUser = JSON.parse(localStorage.getItem('user'));
      const user = {username: this.form.controls.username.value, password: this.form.controls.password.value} as LoginModel;
      if (isEqual(savedUser, user)) {
        console.log('Sikeres bejelentkezés');
      } else {
        console.log ('Sikertelen bejelentkezés');
      }
    }
  }

}
