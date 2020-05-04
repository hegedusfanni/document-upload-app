import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { isEqual } from 'lodash';
import {LoginModel} from '../../../models/login/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  invalidUsernameAndPassword = false;

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
        localStorage.setItem('signin', 'ok');
        this.router.navigate(['/documents']);
      } else {
       this.invalidUsernameAndPassword = true;
      }
    }
  }

}
