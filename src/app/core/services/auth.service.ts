import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  get isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getToken(): string {
    return localStorage.getItem('user');
  }

}
