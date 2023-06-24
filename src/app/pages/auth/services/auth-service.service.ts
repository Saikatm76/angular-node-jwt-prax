import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthData } from '../components/Model/auth-data.model';
import { LoginData } from '../components/Model/login-data.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }


  createAdmin(formData: any): Observable<any> {
    const authData: AuthData = {
      first_name: formData.firstname,
      last_name: formData.lastname,
      phone: formData.phone,
      email: formData.email,
      password: formData.password
    };
    return this.http.post<any>("http://localhost:3000/api/auth/signup",
      authData
    ).pipe(
      map((returnApiFormData) => {
        return returnApiFormData;
      })
    );
  }

  onLogin(authData: any): Observable<any> {
    const loginData: LoginData = {
      email: authData.email,
      password: authData.password
    };
    return this.http.post<any>("http://localhost:3000/api/auth/login",
      loginData
    ).pipe(
      map((returnApiFormData) => {
        return returnApiFormData;
      })
    );

  }



}
