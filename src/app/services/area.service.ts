import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  baseUrl = environment.ipAddress;
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) {}

  getDonations() {
    return this.http.get(
      `${this.baseUrl}/action/?locationId=43&actionType=RESOURCES_AVAILABLE&noOfDays=2&pageNo=0&noOfRecords=3`,
      this.httpOptions
    );
  }

  getVolunteers() {
    return this.http.get(
      `${this.baseUrl}/action/?locationId=43&actionType=WANT_TO_HELP&noOfDays=2&pageNo=0&noOfRecords=3`,
      this.httpOptions
    );
  }

  getRequests() {
    return this.http.get(
      `${this.baseUrl}/action/?locationId=43&actionType=NEED_HELP &noOfDays=2&pageNo=0&noOfRecords=3`,
      this.httpOptions
    );
  }
}
