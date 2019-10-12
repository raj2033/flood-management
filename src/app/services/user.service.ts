import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.ipAddress;

  constructor(private http: HttpClient) {}

  login(params: JSON) {
    return this.http.post(`${this.baseUrl}/auth/login/`, params);
  }
  register(params: JSON) {
    return this.http.post(`${this.baseUrl}/auth/register/`, params);
  }
}
