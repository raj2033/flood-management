import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  baseUrl = environment.ipAddress;

  constructor(private http: HttpClient) {}

  getDonors(areaName: string) {
    return this.http.get(`${this.baseUrl}/auth/generate/${areaName}`);
  }
}
