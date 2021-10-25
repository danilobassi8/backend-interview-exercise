import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
   providedIn: 'root',
})
export class AuthService {
   constructor(private http: HttpClient) {}

   url = 'http://localhost:8000/api/users/';
   currentUser;

   login(email: string, password: string): Observable<any> {
      return this.http.post<any>(`${this.url}login/`, { email, password });
   }

   getCurretUser() {
      if (this.currentUser) return this.currentUser;
      return localStorage.user;
   }
   setCurrentUser(user: any) {
      this.currentUser = user;
      localStorage.user = JSON.stringify(user);
   }
}
